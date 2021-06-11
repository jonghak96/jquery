<?php

    // 1. DB 접속
    $servername = 'localhost';
    $username   = 'genshin';
    $password   = 'hello!23';
    $dbname     = 'genshin';

    $conn = mysqli_connect($servername, $username, $password, $dbname); // DB 인증절차
    mysqli_set_charset($conn, 'utf8'); // 인코딩

    if(!$conn) {
        die('DATABASE CONNECT FAIL!!!');
    }

    // 2. 입력정보
    $name   = $_POST['name'];
    $tel    = $_POST['tel'];
    $email  = $_POST['email'];

    // 3. SQL문 (INSERT)
    $sql = "insert into member(name, tel, email) values('$name', '$tel', '$email')";

    $result = mysqli_query($conn, $sql); // DB, SQL문

    // 4. AJAX 리턴값
    if($result) {
        echo $name;
        echo $tel;
        echo $email;
    }

    // 5. 데이터베이스 닫기
    mysqli_close($conn);

?>