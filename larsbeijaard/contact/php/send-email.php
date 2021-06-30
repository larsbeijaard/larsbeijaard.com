<?php

if (isset($_POST['f-submit'])) {
    // Validate the email address.
    if (filter_var($_POST['f-email'], FILTER_VALIDATE_EMAIL)) {
        sendReceivingEmail();
        sendReplyEmail();
    
        finalize();
    }
}

function sendReceivingEmail() {
    $contact_email = "contact@larsbeijaard.com";

    // Form the email.
    $email_from = $_POST['f-email'];

    $first_name = $_POST['f-firstname'];
    $last_name = $_POST['f-lastname'];

    $subject = $_POST['f-subject'];
    $message = $_POST['f-message'];

    $headers = "From: " . $email_from;

    // Send the email.
    mail($contact_email, $subject, $message, $headers);
}

function sendReplyEmail() {
    $no_reply_email = "no-reply@larsbeijaard.com";
    
    // Form the email.
    $subject = "Thank you for your email!";
    $message = "<html><body><img src=\"https://larsbeijaard.com/_site/contact/files/email-send.png\"></body></html>";

    $headers = "From: " . $no_reply_email . "\r\n";
    $headers .= "MINE-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";

    // Send the email.
    mail($email_from, $subject, $message, $headers);
}

function finalize() {
    // Go to the 'email-sent' page after the email has been sent.
    header("Location: ../email-send.html");
}

?>
