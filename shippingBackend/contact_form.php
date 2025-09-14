<?php 
// Enable CORS for requests from any origin (adjust for security)
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:3001"); // Your frontend URL
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0); // No response needed for OPTIONS requests
}

// Include the database connection
require_once 'db_connect.php';
// Include PHPMailer (make sure PHPMailer is installed via Composer or manually)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Autoload PHPMailer

// Check if form data is received
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data using POST method
    $data = json_decode(file_get_contents("php://input"), true);

    $full_name = $data['full_name'] ?? null;
    $phone_number = $data['phone_number'] ?? null;
    $email = $data['email'] ?? null;
    $message = $data['message'] ?? null;

    // Validate form data
    if (empty($full_name) || empty($email) || empty($message)) {
        echo json_encode(['error' => 'Required fields are missing.']);
        exit();
    }

    try {
        // Prepare SQL query to insert the data into database
        $sql = "INSERT INTO contact_form_submissions (full_name, phone_number, email, message) 
                VALUES (:full_name, :phone_number, :email, :message)";

        // Prepare statement
        $stmt = $pdo->prepare($sql);

        // Bind parameters
        $stmt->bindParam(':full_name', $full_name);
        $stmt->bindParam(':phone_number', $phone_number);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':message', $message);

        // Execute the query
        $stmt->execute();
        
        // Send email to the customer (confirmation email)
        $mail = new PHPMailer(true);  // Create instance of PHPMailer
        try {
            // Server settings
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.zoho.com';                        // Set the SMTP server
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'info@amanullahgroup.ae';             // SMTP username
            $mail->Password = 'xZtGpHY6PQwr';                    // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Enable TLS encryption
            $mail->Port = 587;
            $mail->SMTPSecure = 'tls';
            $mail->SMTPDebug = 0;                                  // Disable debugging to avoid verbose output
            $mail->CharSet = 'UTF-8';
            // Recipients
            $mail->setFrom('info@amanullahgroup.ae', 'Amanullah Transport & Logistics');
            $mail->addAddress($email, $full_name);                 // Customer's email

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = "Thank You for Contacting Us – Amanullah Transport & Logistics";
            $mail->Body = "
                <html>
                <body>
                    <p>Dear $full_name,</p>
                    <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
                    <p><b>Your Contact Number:</b></p>
                    <p>$phone_number</p>
                    <p><b>Your Message:</b></p>
                    <p>$message</p>
                    <p>Best regards,<br>
                    <b>Amanullah Transport & Logistics</b></p>
                </body>
                </html>";

            $mail->send();
        } catch (Exception $e) {
            // Catch errors and respond without sending email
            echo json_encode(['success' => false, 'message' => 'Error sending email to customer.']);
            exit(); // Stop further execution
        }

        // Send email to the logistics company (notification email)
        $mailToCompany = new PHPMailer(true); // Instance for company email
        try {
            // Server settings
            $mailToCompany->isSMTP();
            $mailToCompany->Host = 'smtp.zoho.com';
            $mailToCompany->SMTPAuth = true;
            $mailToCompany->Username = 'info@amanullahgroup.ae'; // Your SMTP email
            $mailToCompany->Password = 'xZtGpHY6PQwr';   // Your SMTP password
            $mailToCompany->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mailToCompany->Port = 587;
            $mailToCompany->SMTPSecure = 'tls';
            $mailToCompany->SMTPDebug = 0;       
            $mailToCompany->CharSet = 'UTF-8';

            // Recipients
            $mailToCompany->setFrom('info@amanullahgroup.ae', 'Amanullah Transport & Logistics');
            $mailToCompany->addAddress('info@amanullahgroup.ae', 'Logistics Team');  // Replace with company's email

            // Email content
            $mailToCompany->isHTML(true);
            $mailToCompany->Subject = "New Contact Form Submission – from $full_name";
            $mailToCompany->Body = "
                <html>
                <body>
                    <p>Dear Amanullah Transport & Logistics Team,</p>
                    <p>You have received a new contact form submission. Below are the details:</p>
                    <ul>
                        <li><b>Full Name:</b> $full_name</li>
                        <li><b>Email:</b> $email</li>
                        <li><b>Contact Number:</b> $phone_number</li>
                        <li><b>Message:</b></li>
                        <p>$message</p>
                    </ul>
                    <p>Best regards,<br>
                    <b>Amanullah Transport & Logistics</b></p>
                </body>
                </html>";

            $mailToCompany->send();
        } catch (Exception $e) {
            // Handle error and respond without sending email to the company
            echo json_encode(['success' => false, 'message' => 'Error sending notification to company.']);
            exit(); // Stop further execution
        }

        // Respond with success message if both emails are sent
        echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully!']);
    } catch (PDOException $e) {
        // Handle database error
        echo json_encode(['success' => false, 'message' => 'An error occurred while sending your message.']);
    }
}
?>
