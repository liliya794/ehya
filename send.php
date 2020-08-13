<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$mail = $_POST['email'];

// Формирование самого письма
$title = "Подписка на Ehya";
$body = "
<h2>Новая подписка</h2>
<b>Почта:</b> $mail<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'liliya.ant794@gmail.com'; // Логин на почте
    $mail->Password   = '1994_yeardog'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('liliya.ant794@gmail.com', 'Лилия Антоненко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('liliya.ant794@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// header('Location: thankyou-subscription.html');
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);