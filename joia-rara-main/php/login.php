<?php
// Teste para verificar se há erros 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once('conex.php');

// Primeiro, verifica se a requisição é POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Verifica se o botão 'submit' foi enviado)
    if (isset($_POST['submit'])) {

        // Verifica SE OS CAMPOS NÃO ESTÃO VAZIOS para processar o login
        if (!empty($_POST['email']) && !empty($_POST['password'])) {

            $email = $_POST['email'];
            $password = $_POST['password'];

            echo 'Email: ' . $email . '<br>';
            echo 'Senha: ' . $password . '<br>';

            
            $email_seguro = $conexao->real_escape_string($email);
            $password_seguro = $conexao->real_escape_string($password);

            $sql = "SELECT * FROM usuario WHERE email = '$email_seguro' AND senha = '$password_seguro'";

            $resultado = $conexao->query($sql);

            if ($resultado && $resultado->num_rows > 0) {
                // Credenciais corretas
                echo "<script>alert('Sucesso! O registro email e Senha existe no BD');</script>";
                // Redireciona para a página de sucesso
                header("Location: http://localhost/joia-rara-main/index.html");
            } else {
                // Nenhuma correspondência encontrada (e-mail ou senha incorretos)
                echo "<script>alert('E-mail ou Senha incorretos! Tente Novamente.');</script>";
                echo "<script>window.location.href='http://localhost/joia-rara-main/login.html';</script>"; // Redireciona de volta
            }

        } else { // Este 'else' trata quando os campos 'email' ou 'password' estão vazios
            echo "<script>alert('Por favor, preencha todos os campos (e-mail e senha).');</script>";
            echo "<script>window.location.href='http://localhost/joia-rara-main/login.html';</script>"; // Redireciona de volta
        }

    } else { // Este 'else' trata quando o botão 'submit' não está setado.
        echo "<script>alert('Acesso inválido. Formulário não submetido corretamente.');</script>";
        echo "<script>window.location.href='http://localhost/joia-rara-main/login.html';</script>"; // Redireciona de volta
    }

    } else { // Este 'else' trata quando a página é acessada diretamente via GET
        echo "<script>alert('Acesso inválido. Por favor, use o formulário de login.');</script>";
        echo "<script>window.location.href='http://localhost/joia-rara-main/login.html';</script>"; // Redireciona de volta
    }

    function exibirMensagemERedirecionar($mensagem, $url){
        echo "<script>alert('$mensagem');window.location.href = '$url';</script>";
        exit();
    }

?>