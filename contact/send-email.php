<?php

if (isset($_POST['f-submit'])) {
    $contact_email = "contact@larsbeijaard.com";
    $no_reply_email = "no-reply@larsbeijaard.com";

    $email_from = $_POST['f-email'];

    $first_name = $_POST['f-firstname'];
    $last_name = $_POST['f-lastname'];

    $subject = $_POST['f-subject'];
    $subjectCopy = "Copy: " . $_POST['f-subject'];

    $message = $_POST['f-message'];
    $messageCopy = "You wrote: \n\n" . $_POST['f-subject'] . "\n\nI will reply as soon as I can!\n\nLars";

    $headers = "From: " . $email_from;
    $headersCopy = "From: " . $no_reply_email;

    // Send the email to contact@larsbeijaard.com.
    mail($contact_email, $subject, $message, $headers);

    // Send the sender a copy of the email that he/she sended.
    mail($email_from, $subjectCopy, $messageCopy, $headersCopy);

    header("Location: email-send.html");
}

?>
