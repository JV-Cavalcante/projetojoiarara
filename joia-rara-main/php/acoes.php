<?php 
    session_start();
    require 'conex.php';


    if (isset($_POST['update_usuario'])) {
        $usuario_id = mysqli_real_escape_string($conexao, $_POST['id_usuario']);
        $nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
        $email = mysqli_real_escape_string($conexao, trim($_POST['email']));
        $data_nascimento = mysqli_real_escape_string($conexao, trim($_POST['data_nasc']));
        $senha = mysqli_real_escape_string($conexao, trim($_POST['senha']));

        $sql = "UPDATE usuario SET nome = '$nome', email = '$email', data_nasc = '$data_nascimento'";

        if (!empty($senha)) {
            if(strlen($senha) >= 8){
                $sql .= ", senha=' " . $senha . "'";
                
            }
            //$sql .= ", senha='" . password_hash($senha, PASSWORD_DEFAULT) . "'";
        }
        $sql .= " WHERE id_usuario = '$usuario_id'";
        
        mysqli_query($conexao, $sql); // Armazene o resultado da query

        if (mysqli_affected_rows($conexao) > 0) {
            $_SESSION['mensagem'] = 'Usuário atualizado com sucesso';
            header('Location: admin.php');
            exit();
        } else {
            //Se a query foi bem-sucedida, mas nenhuma linha foi afetada, pode ser que o ID não existe
            // ou os dados enviados são os mesmos que já estão no banco de dados.
            $_SESSION['mensagem'] = 'Usuário não foi atualizado (nenhuma alteração feita ou ID não encontrado).';
            header('Location: admin.php');
            exit();
        }}


    
    if(isset($_POST['delete-usuario'])){
        $usuario_id = mysqli_real_escape_string($conexao, $_POST['delete-usuario']);
        $sql = "DELETE FROM usuario WHERE id_usuario = '$usuario_id'";
        mysqli_query($conexao, $sql);
        
        if(mysqli_affected_rows($conexao) > 0){
            $_SESSION['mensagem'] = 'Usuário deletado com sucesso!';
            header('Location: admin.php');
            exit;
        }else{
            $_SESSION['mensagem'] = 'Usuário deletado com sucesso!';
            header('Location: admin.php');
            exit;
        }
    }

?>