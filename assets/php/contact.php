<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'romulosanttos1@gmail.com';
	$subject = 'Site Contact my';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers,'-r'.$sender);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Submission Successful';
    }
	else{
		$res['message'] = 'Failed to send mail. Please mail me to romulosanttos1@gmail.com';
	}
	
	
	echo json_encode($res);
}

?>