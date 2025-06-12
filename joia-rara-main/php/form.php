<?php
    //Trecho para testar se está recendo o dados de forma certa, colocar como comentário dps//
    //echo "O arquivo foi carregado.<br>";
        //if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //echo "Dados enviados via POST.<br>";
            //print_r($_POST);
        //} else {
            //echo "Nenhum dado enviado.<br>";}
        //exit;

    if(isset($_POST['submit'])){

        include_once('conex.php');


        $name = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $phone = $_POST['phone'];
        $gender = $_POST['gender'];
        $birthdate = $_POST['birthdate'];

        //print_r($_POST);


        $incremento = mysqli_query($conexao, "INSERT INTO usuario(nome, email, senha, telefone, genero, data_nasc)VALUES('$name', '$email', '$password', '$phone', '$gender', '$birthdate')");

        if($incremento){
            header("Location: login.php");
            exit();    
        }else{
            echo "Erro ao salvar os dados!";
        }
    } 
?>