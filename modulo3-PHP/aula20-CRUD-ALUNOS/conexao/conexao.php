<?php

    $servername = "localhost"; // ip ou dominio do server
    $username = "root"; // usuario no banco de dados
    $password = ""; // senha do usuario no banco de dados
    $dbname = "faculdade"; // nome do banco de dados

    // Cria a conexão
    $conn = new mysqli ($servername, $username, $password, $dbname);

    // Verificar conexao com o bd
    if ($conn -> connect_error){
        die("Conexão Falhou");
    }

?>