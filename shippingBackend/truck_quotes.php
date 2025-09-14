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

    // Extract values from the request data
    $full_name = $data['full_name'] ?? null;
    $email = $data['email'] ?? null;
    $phone_number = $data['phone_number'] ?? null;
    $company_name = $data['company_name'] ?? null;
    $international = $data['international'] ?? null;
    $origin_port = $data['origin_port'] ?? null;
    $destination_port = $data['destination_port'] ?? null;
    $origin_country = $data['origin_country'] ?? null;
    $destination_country = $data['destination_country'] ?? null;
    $commodity_value = $data['commodity_value'] ?? null;
    $gross_weight = $data['gross_weight'] ?? null;
    $length = $data['length'] ?? null;
    $width = $data['width'] ?? null;
    $height = $data['height'] ?? null;
    $number_of_packages = $data['number_of_packages'] ?? null;
    $package_type = $data['package_type'] ?? null;
    $refrigerated_temperature = $data['refrigerated_temperature'] ?? null;
    $mco_class_un_number = $data['mco_class_un_number'] ?? null;
    $comments = $data['comments'] ?? null;
    $commodity = $data['commodity'] ?? null;
    $load_type = $data['load_type'] ?? null;
    $container_type = $data['container_type'] ?? null;
    $weight_unit = $data['weight_unit'] ?? null;
    $flatbed = $data['flatbed'] ?? false;
    $refrigerated = $data['refrigerated'] ?? false;
    $residential_pickup = $data['residential_pickup'] ?? false;
    $residential_delivery = $data['residential_delivery'] ?? false;
    $customs_in_bond_freight = $data['customs_in_bond_freight'] ?? false;
    $hazardous_shipment = $data['hazardous_shipment'] ?? false;
    $inside_limited_access_pickup = $data['inside_limited_access_pickup'] ?? false;
    $inside_limited_access_delivery = $data['inside_limited_access_delivery'] ?? false;

    // Validate required fields
    if (empty($full_name) || empty($email) || empty($origin_port) || empty($destination_port) || empty($commodity_value)) {
        echo json_encode(['error' => 'Required fields are missing.']);
        exit();
    }

    // Prepare SQL query to insert the data
    $sql = "INSERT INTO truck_quotes (
                full_name, email, phone_number, company_name, international, origin_port, 
                destination_port, origin_country, destination_country, commodity_value, gross_weight, length, 
                width, height, number_of_packages, package_type, refrigerated_temperature, 
                mco_class_un_number, comments, commodity, load_type, container_type, 
                weight_unit, flatbed, refrigerated, residential_pickup, residential_delivery, 
                customs_in_bond_freight, hazardous_shipment, inside_limited_access_pickup, 
                inside_limited_access_delivery
            ) VALUES (
                :full_name, :email, :phone_number, :company_name, :international, :origin_port, 
                :destination_port, :origin_country, :destination_country, :commodity_value, :gross_weight, :length, 
                :width, :height, :number_of_packages, :package_type, :refrigerated_temperature, 
                :mco_class_un_number, :comments, :commodity, :load_type, :container_type, 
                :weight_unit, :flatbed, :refrigerated, :residential_pickup, :residential_delivery, 
                :customs_in_bond_freight, :hazardous_shipment, :inside_limited_access_pickup, 
                :inside_limited_access_delivery
            )";

    try {
        // Prepare statement
        $stmt = $pdo->prepare($sql);

        // Bind parameters
        $stmt->bindParam(':full_name', $full_name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone_number', $phone_number);
        $stmt->bindParam(':company_name', $company_name);
        $stmt->bindParam(':international', $international);
        $stmt->bindParam(':origin_port', $origin_port);
        $stmt->bindParam(':destination_port', $destination_port);
        $stmt->bindParam(':origin_country', $origin_country);
        $stmt->bindParam(':destination_country', $destination_country);
        $stmt->bindParam(':commodity_value', $commodity_value);
        $stmt->bindParam(':gross_weight', $gross_weight);
        $stmt->bindParam(':length', $length);
        $stmt->bindParam(':width', $width);
        $stmt->bindParam(':height', $height);
        $stmt->bindParam(':number_of_packages', $number_of_packages);
        $stmt->bindParam(':package_type', $package_type);
        $stmt->bindParam(':refrigerated_temperature', $refrigerated_temperature);
        $stmt->bindParam(':mco_class_un_number', $mco_class_un_number);
        $stmt->bindParam(':comments', $comments);
        $stmt->bindParam(':commodity', $commodity);
        $stmt->bindParam(':load_type', $load_type);
        $stmt->bindParam(':container_type', $container_type);
        $stmt->bindParam(':weight_unit', $weight_unit);
        $stmt->bindParam(':flatbed', $flatbed);
        $stmt->bindParam(':refrigerated', $refrigerated);
        $stmt->bindParam(':residential_pickup', $residential_pickup);
        $stmt->bindParam(':residential_delivery', $residential_delivery);
        $stmt->bindParam(':customs_in_bond_freight', $customs_in_bond_freight);
        $stmt->bindParam(':hazardous_shipment', $hazardous_shipment);
        $stmt->bindParam(':inside_limited_access_pickup', $inside_limited_access_pickup);
        $stmt->bindParam(':inside_limited_access_delivery', $inside_limited_access_delivery);

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

                        <p>Thank you for choosing <b>Amanullah Transport & Logistics</b> for your air freight and logistics needs. We have successfully received your <b>Truck</b> quote request. Below are the details of your submission for your reference:</p>
                        
                        <h3>Customer Information:</h3>
                        <ul>
                            <li><b>Full Name:</b> $full_name</li>
                            <li><b>Email:</b> $email</li>
                            <li><b>Phone Number:</b> $phone_number</li>
                            <li><b>Company Name:</b> $company_name</li>
                        </ul>

                        <h3>Shipment Details:</h3>
                        <ul>";

                if ($international ) {
                    $mail->Body .= "
                            <li><b>International Shipment:</b> Yes</li>
                            <li><b>Origin Country:</b> $origin_country</li>
                            <li><b>Destination Country:</b> $destination_country</li>";
                } else {
                    $mail->Body .= "
                            <li><b>International Shipment:</b> No</li>";
                }

                $mail->Body .= "
                            <li><b>Origin Port:</b> $origin_port</li>
                            <li><b>Destination Port:</b> $destination_port</li>
                            <li><b>Commodity:</b> $commodity</li>
                            <li><b>Commodity Value:</b> $commodity_value</li>
                        </ul>

                        <h3>Load Type: $load_type</h3>";

                if ($load_type === "FCL") {
                    $mail->Body .= "
                        <ul>
                            <li><b>Container Type:</b> $container_type</li>
                        </ul>";
                } elseif ($load_type === "LCL") {
                    $mail->Body .= "
                        <ul>
                            <li><b>Gross Weight:</b> $gross_weight $weight_unit</li>
                            <li><b>Dimensions (L x W x H):</b> $length x $width x $height</li>
                            <li><b>Number of Packages:</b> $number_of_packages</li>
                            <li><b>Package Type:</b> $package_type</li>
                        </ul>";
                }

                $mail->Body .= "
                        <h3>Special Requirements:</h3>
                        <ul>
                        <li><b>Flatbed :</b> " . ($flatbed ? "Yes" : "No") . "</li>
                        <li><b>Refrigerated :</b> " . ($refrigerated ? "Yes" : "No") . "</li>";

                if ($refrigerated && !empty($refrigerated_temperature)) {
                    $mail->Body .= "<li><b>Temperature Requirement:</b> $refrigerated_temperature</li>";
                }

                if ($hazardous_shipment && !empty($mco_class_un_number)) {
                    $mail->Body .= "<li><b>MCO Class/UN Number:</b> $mco_class_un_number</li>";
                }

                $mail->Body .= "
                            <li><b>Residential Pickup:</b> " . ($residential_pickup ? "Yes" : "No") . "</li>
                            <li><b>Residential Delivery:</b> " . ($residential_delivery ? "Yes" : "No") . "</li>
                            <li><b>Customs in Bond Freight:</b> " . ($customs_in_bond_freight ? "Yes" : "No") . "</li>
                             <li><b>Hazardous Cargo:</b> " . ($hazardous_shipment ? "Yes" : "No") . "</li>
                            <li><b>Inside Limited Access Pickup:</b> " . ($inside_limited_access_pickup ? "Yes" : "No") . "</li>
                            <li><b>Inside Limited Access Delivery:</b> " . ($inside_limited_access_delivery ? "Yes" : "No") . "</li>
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
    
        // Email body  <h3>Mode of Transport: Truck</h3>
        $mailToCompany->Body = "
    <html>
    <body>
        <p>Dear Amanullah Transport & Logistics Team,</p>

        <p>A new quote request has been received from a customer for Truck Transport. Below are the details of the submission for your reference:</p>

        <h3>Customer Information:</h3>
        <ul>
            <li><b>Full Name:</b> $full_name</li>
            <li><b>Email:</b> $email</li>
            <li><b>Phone Number:</b> $phone_number</li>
            <li><b>Company Name:</b> $company_name</li>
        </ul>

        <h3>Shipment Details:</h3>
        <ul>";

        if ($international ) {
            $mailToCompany->Body .= "
                <li><b>International Shipment:</b> Yes</li>
                <li><b>Origin Country:</b> $origin_country</li>
                <li><b>Destination Country:</b> $destination_country</li>";
        } else {
            $mailToCompany->Body .= "
                <li><b>International Shipment:</b> No</li>";
        }

        $mailToCompany->Body .= "
            <li><b>Origin Port:</b> $origin_port</li>
            <li><b>Destination Port:</b> $destination_port</li>
            <li><b>Commodity:</b> $commodity</li>
            <li><b>Commodity Value:</b> $commodity_value</li>
        </ul>

        <h3>Load Type: $load_type</h3>";

        if ($load_type === "FCL") {
            $mailToCompany->Body .= "
                <ul>
                    <li><b>Container Type:</b> $container_type</li>
                </ul>";
        } elseif ($load_type === "LCL") {
            $mailToCompany->Body .= "
                <ul>
                    <li><b>Gross Weight:</b> $gross_weight $weight_unit</li>
                    <li><b>Dimensions (L x W x H):</b> $length x $width x $height</li>
                    <li><b>Number of Packages:</b> $number_of_packages</li>
                    <li><b>Package Type:</b> $package_type</li>
                </ul>";
        }

        $mailToCompany->Body .= "
            <h3>Special Requirements:</h3>
            <ul>
            <li><b>Flatbed :</b> " . ($flatbed ? "Yes" : "No") . "</li>
            <li><b>Refrigerated :</b> " . ($refrigerated ? "Yes" : "No") . "</li>";

        if ($refrigerated && !empty($refrigerated_temperature)) {
            $mailToCompany->Body .= "<li><b>Temperature Requirement:</b> $refrigerated_temperature</li>";
        }

        if ($hazardous_shipment && !empty($mco_class_un_number)) {
            $mailToCompany->Body .= "<li><b>MCO Class/UN Number:</b> $mco_class_un_number</li>";
        }

        $mailToCompany->Body .= "
            <li><b>Residential Pickup:</b> " . ($residential_pickup ? "Yes" : "No") . "</li>
            <li><b>Residential Delivery:</b> " . ($residential_delivery ? "Yes" : "No") . "</li>
            <li><b>Customs in Bond Freight:</b> " . ($customs_in_bond_freight ? "Yes" : "No") . "</li>
            <li><b>Hazardous Cargo:</b> " . ($hazardous_shipment ? "Yes" : "No") . "</li>
            <li><b>Inside Limited Access Pickup:</b> " . ($inside_limited_access_pickup ? "Yes" : "No") . "</li>
            <li><b>Inside Limited Access Delivery:</b> " . ($inside_limited_access_delivery ? "Yes" : "No") . "</li>
        </ul>

        <h3>Comments:</h3>
        <p>$comments</p>

        <p><b>Submission Time:</b> " . date('Y-m-d H:i:s') . "</p>
        <p>Please review and process the quote.</p>

        <p>Best regards,<br>
        <b>Amanullah Transport & Logistics</b></p>
    </body>
    </html>";
    
        
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