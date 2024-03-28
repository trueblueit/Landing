<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

include "dbconnect.php";
$myobj = new DbConnect;
$conn = $myobj->connect();

$method =$_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
    $new_member=json_decode(file_get_contents("php://input")); 
    if (empty($new_member->email)) {
        $response = [
            'success' => false,
            'message' => 'Email is required'
        ];
    } else {
        // Check if email already exists
        $emailExistsSql = "SELECT COUNT(*) AS count FROM enquire WHERE email = :email";
        $emailExistsStmt = $conn->prepare($emailExistsSql);
        $emailExistsStmt->bindParam(':email', $new_member->email);
        $emailExistsStmt->execute();
        $emailExistsResult = $emailExistsStmt->fetch(PDO::FETCH_ASSOC);

        if ($emailExistsResult['count'] > 0) {
            // Email already exists, return response
            $response = [
                'success' => false,
                'message' => 'Email already exists'
            ];
        } else {
            
        }
    $sql = "INSERT INTO enquire (id, Name, email, subject, description) VALUES (null, :Name, :email, :subject, :description)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':Name', $new_member->Name);
    $stmt->bindParam(':email', $new_member->email);
    $stmt->bindParam(':subject', $new_member->subject);
    $stmt->bindParam(':description', $new_member->description);
    if ($stmt->execute()) {
        $response = [
            'success' => true,
            'message' => 'Data inserted successfully'
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Error inserting data: ' . $stmt->error
        ];
    }
}
    break;
}
    

echo json_encode($response); 
?>