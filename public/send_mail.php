<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No se recibieron datos"]);
    exit;
}

$user_email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$plan = htmlspecialchars($data['plan']);

// --- CONFIGURACIÓN DEL CORREO ---
$to = "hola@korlab.mx";
$subject = "NUEVA INSCRIPCIÓN: Plan " . $plan;

$message = "
<html>
<head><title>Nueva solicitud KØR LAB</title></head>
<body style='font-family: sans-serif; background: #000; color: #fff; padding: 20px;'>
    <h2 style='color: #ff4d4d;'>¡Nueva solicitud de inscripción!</h2>
    <p><strong>Plan interesado:</strong> " . $plan . "</p>
    <p><strong>Correo del interesado:</strong> " . $user_email . "</p>
    <hr style='border: 0; border-top: 1px solid #333;'>
    <p style='font-size: 12px; color: #888;'>Enviado desde el formulario de korlab.mx</p>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: hola@korlab.mx" . "\r\n";

if(mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Mail enviado"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error al enviar el mail"]);
}
?>