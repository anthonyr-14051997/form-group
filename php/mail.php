
<!-- ------------------------------------------------------------------------------- php -->
<?php

echo "cc", "\n";
if (isset($_POST['btn'])) {
    echo "cc";
    $nom = $_POST['nom'];
    $mail = $_POST['mail'];
    $msg = $_POST['msg'];
    $btn = $_POST['button'];
    $all = $nom + $mail + $msg;
    $retour = mail('aruby9905@gmail.com','test', $all);
    echo $retour;
    exit;
}

?>


<!--
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'path/to/PHPMailer-master/src/Exception.php';
    require 'path/to/PHPMailer-master/src/PHPMailer.php';
    require 'path/to/PHPMailer-master/src/SMTP.php';

    " phpmailer " !!!! 
-->