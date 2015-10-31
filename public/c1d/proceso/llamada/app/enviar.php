<?php 
$nombre = $_POST['nombre']; 
$telefono = $_POST['telefono']; 
$mail = $_POST['mail']; 

$header = 'From: ' . $mail . " \r\n"; 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 

$mensaje = "Este mensaje fue enviado por: " . $nombre . ", el telefono es: " . $telefono . " \r\n"; 
$mensaje .= "Su e-mail es: " . $mail . " \r\n"; 
$mensaje .= "Mensaje: " . $_POST['horario'] . " \r\n"; 
$mensaje .= "Enviado el " . date('d/m/Y', time()); 

$para = 'web@cromlu.com'; 
$asunto = 'Cliente cromlu, proceso LLAMADA'; 

mail($para, $asunto, utf8_decode($mensaje), $header); 

echo "<center><br/><h2><strong>MENSAJE ENVIADO ;) </strong></h2><br/> <h3>Cargando los datos</h3> <strong>;)</strong><br/><h2><strong>Porfavor Espere...</strong></h2></center>";
$url="http://cromlu.com/c1d/proceso/llamada/a1"; 
echo "<SCRIPT>window.location='$url';</SCRIPT>"; 
?>	
