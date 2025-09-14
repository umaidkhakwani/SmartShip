<?php
// Enable CORS for requests from any origin (adjust for security)
header("Access-Control-Allow-Origin: http://localhost:3000"); // Your frontend URL
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0); // No response needed for OPTIONS requests
}

ini_set('display_errors', 1);
error_reporting(E_ALL);

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
    $email = $data['email'] ?? null;
    $phone_number = $data['phone_number'] ?? null;
    $company_name = $data['company_name'] ?? null;
    $origin_port = $data['origin_port'] ?? null;
    $destination_port = $data['destination_port'] ?? null;
    $commodity_value = $data['commodity_value'] ?? null;
    $gross_weight = $data['gross_weight'] ?? null;
    $length = $data['length'] ?? null;
    $width = $data['width'] ?? null;
    $height = $data['height'] ?? null;
    $number_of_packages = $data['number_of_packages'] ?? null;
    $package_type = $data['package_type'] ?? null;
    $comments = $data['comments'] ?? null;
    $commodity = $data['commodity'] ?? null;
    $weight_unit = $data['weight_unit'] ?? null;
    $add_insurance = $data['add_insurance'] ?? null;
    $unit_type = $data['unit_type'] ?? null;

    // Validate form data
    if (empty($full_name) || empty($email) || empty($origin_port) || empty($destination_port) || empty($commodity_value)) {
        echo json_encode(['error' => 'Required fields are missing.']);
        exit();
    }

    // Prepare SQL query to insert the data
    $sql = "INSERT INTO project_cargo_heavy_lift_quotes (
                full_name, email, phone_number, company_name, origin_port, 
                destination_port, commodity_value, gross_weight, length, 
                width, height, number_of_packages, package_type, 
                comments, commodity, weight_unit, add_insurance, unit_type
            ) VALUES (
                :full_name, :email, :phone_number, :company_name, :origin_port, 
                :destination_port, :commodity_value, :gross_weight, :length, 
                :width, :height, :number_of_packages, :package_type, 
                :comments, :commodity, :weight_unit, :add_insurance, :unit_type
            )";

    try {
        // Prepare statement
        $stmt = $pdo->prepare($sql);

        // Bind parameters
        $stmt->bindParam(':full_name', $full_name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone_number', $phone_number);
        $stmt->bindParam(':company_name', $company_name);
        $stmt->bindParam(':origin_port', $origin_port);
        $stmt->bindParam(':destination_port', $destination_port);
        $stmt->bindParam(':commodity_value', $commodity_value);
        $stmt->bindParam(':gross_weight', $gross_weight);
        $stmt->bindParam(':length', $length);
        $stmt->bindParam(':width', $width);
        $stmt->bindParam(':height', $height);
        $stmt->bindParam(':number_of_packages', $number_of_packages);
        $stmt->bindParam(':package_type', $package_type);
        $stmt->bindParam(':comments', $comments);
        $stmt->bindParam(':commodity', $commodity);
        $stmt->bindParam(':weight_unit', $weight_unit);
        $stmt->bindParam(':add_insurance', $add_insurance);
        $stmt->bindParam(':unit_type', $unit_type);

       // Execute the query

       // Execute the query
       $stmt->execute();

       // Send email notification to user
       $mail = new PHPMailer(true);  // Create instance of PHPMailer
       try {
           // Server settings Logistics
           $mail->isSMTP();                                      // Set mailer to use SMTP
           $mail->Host = 'smtp.zoho.com';                        // Set the SMTP server
           $mail->SMTPAuth = true;                               // Enable SMTP authentication
           $mail->Username = 'info@amanullahgroup.ae';             // SMTP username
           $mail->Password = 'xZtGpHY6PQwr';                    // SMTP password
           $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Enable TLS encryption
           $mail->Port = 587;
           $mail->SMTPDebug = 0;                                  // Disable debugging to avoid verbose output
            $mail->CharSet = 'UTF-8';                // TCP port to connect to

           // Recipients
           $mail->setFrom('info@amanullahgroup.ae', 'Amanullah Transport & Logistics');
           $mail->addAddress($email, $full_name);                // User's email and name

           // Content
           $mail->isHTML(true);                                  // Set email format to HTML
           $mail->Subject = 'Thank You for Your Quote Request – Amanullah Transport & Logistics';
           $mail->Body = "
                <html>
                <body>
                    <p>Dear $full_name,</p>

                    <p>Thank you for choosing <b>Amanullah Transport & Logistics</b> for your air freight and logistics needs. We have successfully received your <b>Project Cargo / Heavy Lift</b> Quote request. Below are the details of your submission for your reference:</p>
                    
                    <h3>Customer Information:</h3>
                    <ul>
                        <li><b>Full Name:</b> $full_name</li>
                        <li><b>Email:</b> $email</li>
                        <li><b>Phone Number:</b> $phone_number</li>
                        <li><b>Company Name:</b> $company_name</li>
                    </ul>

                    <h3>Shipment Details:</h3>
                    <ul>
                        <li><b>Origin Port:</b> $origin_port</li>
                        <li><b>Destination Port:</b> $destination_port</li>
                        <li><b>Commodity:</b> $commodity</li>
                        <li><b>Commodity Value:</b> $commodity_value</li>
                    </ul>

                    <h3>Load Details: </h3>
                    <ul>
                        <li><b>Gross Weight:</b> $gross_weight $weight_unit</li>
                        <li><b>Dimensions (L x W x H):</b> $length x $width x $height</li>
                        <li><b>Number of Packages:</b> $number_of_packages</li>
                        <li><b>Package Type:</b> $package_type</li>
                    </ul>
                    
                    <ul>
                        <li><b>Add Insurance:</b> " . ($add_insurance ? "Yes" : "No") . "</li>
                    </ul>

                    <h3>Comments:</h3>
                    <p>$comments</p>

                    <p>We appreciate your interest in our services and assure you that your quote request will be reviewed promptly. Our team will contact you shortly with a customized quote that meets your requirements.</p>

                    <p>If you have any questions or require immediate assistance, feel free to contact us at <b>+971 42 25 5735</b>. Additionally, you can reach us via WhatsApp at <b>+971 52 232 4064</b>.</p>

                    <p>Best regards,<br>
                    <b>Amanullah Transport & Logistics</b></p>
                </body>
                </html>";

    $mail->send();
       } catch (Exception $e) {
           echo json_encode(['success' => false, 'message' => 'Error sending email to customer.']);
       }

       try {
        // Email to the logistics company
        $mailToCompany = new PHPMailer(true);
    
        // Server settings
        $mailToCompany->isSMTP();
        $mailToCompany->Host = 'smtp.zoho.com';
        $mailToCompany->SMTPAuth = true;
        $mailToCompany->Username = 'info@amanullahgroup.ae';  // Your SMTP email
        $mailToCompany->Password = 'xZtGpHY6PQwr';       // Your SMTP password
        $mailToCompany->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mailToCompany->Port = 587;
            $mailToCompany->CharSet = 'UTF-8';
    
        // Recipients
        $mailToCompany->setFrom('info@amanullahgroup.ae', 'Amanullah Transport & Logistics');
        $mailToCompany->addAddress('info@amanullahgroup.ae', 'Logistics Team');  // Replace with the company's email address
    
        // Email content
        $mailToCompany->isHTML(true);
        $mailToCompany->Subject = "New Quote Submission Received – from $full_name";
    
        // Email body
        $companyEmailBody = "
            <p>Dear Amanullah Transport & Logistics Team,</p>

            <p>A new quote request has been received for Project Cargo / Heavy Lift Transport. Please find the details of the submission below for your reference:</p>
            
            <p><b>Customer Details:</b></p>
            <ul>
                <li><b>Full Name:</b> $full_name</li>
                <li><b>Email:</b> $email</li>
                <li><b>Phone Number:</b> $phone_number</li>
                <li><b>Company Name:</b> $company_name</li>
            </ul>
            <p><b>Quote Detail
            s:</b></p>
            <ul>
                <li><b>Origin Port:</b> $origin_port</li>
                <li><b>Destination Port:</b> $destination_port</li>
                <li><b>Commodity:</b> $commodity</li>
                <li><b>Commodity Value:</b> $commodity_value</li>
            </ul>";
    
            $companyEmailBody .= "
                <ul>
                    <li><b>Gross Weight:</b> $gross_weight $weight_unit</li>
                    <li><b>Dimensions (L x W x H):</b> $length x $width x $height</li>
                    <li><b>Number of Packages:</b> $number_of_packages</li>
                    <li><b>Package Type:</b> $package_type</li>
                </ul>";
        
    
        $companyEmailBody .= "
            <ul>";

        $companyEmailBody .= "
                <li><b>Add Insurance:</b> " . ($add_insurance ? "Yes" : "No") . "</li>";
        $companyEmailBody .= "
                <li><b>Comments:</b> $comments</li>
            </ul>
            <p><b>Submission Time:</b> " . date('Y-m-d H:i:s') . "</p>
            <p>Please review and process the quote.</p>
            <p>Best regards,<br>
            <b>Amanullah Transport & Logistics</b></p>";
    
        $mailToCompany->Body = $companyEmailBody;
        
        // Send the email
        $mailToCompany->send();
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Error sending notification to company.']);
    }
    
  // Respond with success message if both emails are sent
  echo json_encode(['success' => true, 'message' => 'Your Qoute has been sent successfully!']);
} catch (PDOException $e) {
    // Handle database error
    echo json_encode(['success' => false, 'message' => 'An error occurred while sending your Qoute.']);
}
}
?>