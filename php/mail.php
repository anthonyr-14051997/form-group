<?php
    if (isset($_POST['msg'])) {
        $retour = mail('aruby9905@gmail.com', 'Envoi depuis la page Contact', $_POST['msg'], $_POST['nom'], $_POST['mail'], 
            'From: webmaster@monsite.fr' . "\r\n" . 'Reply-to: ' . $_POST['email']);
        if ($retour)
            echo '<p>Votre message a bien été envoyé.</p>';
    }
?>
<?php echo 'essai'; ?>
            