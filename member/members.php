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
    $idx   = '';
    $name   = '';
    $tel    = '';
    $email  = '';

    // 3. SQL문 (INSERT)
    $sql = "select * from member";

    $result = mysqli_query($conn, $sql); // DB, SQL문

    // 4. AJAX 리턴값
    if($result) {

        if(mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                $idx = $row["idx"];
                $name = $row["name"];
                $tel = $row["tel"];
                $email = $row["email"];
                echo $idx;
                echo $name;
                echo $tel;
                echo $email;
            }
        }

    }

    // 5. 데이터베이스 닫기
    mysqli_close($conn);

?>