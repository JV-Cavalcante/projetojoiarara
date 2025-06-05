<?php


    $dbHost = 'localhost';
    $dbUserName = 'root';
    $dbPassword = '';
    $dbName = 'projeto';

    // Criando a conexão com o banco de dados //
    $conexao = new mysqli($dbHost, $dbUserName, $dbPassword, $dbName);

    // TESTANDO A CONEXÃO //
    if ($conexao->connect_error){
        //die("Conexão Falhou: ".$conexao->connect_error);
    }//else{
        //echo "conexão bem sucedida!";}

?>
