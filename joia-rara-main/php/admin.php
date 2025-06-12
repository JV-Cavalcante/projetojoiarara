<?php 
    session_start();
    require 'conex.php';
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Usuários</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
  </head>
  <body>
    <?php include('admnav.php');?>
    <hr>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Gerenciamento / Lista de Usuários
                            <a href="http://localhost/joia-rara-main/cadastro.html" class="btn btn-primary float-end">Adicionar Usuário</a>
                        </h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Data Nascimento</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>                
                            <tbody>
                                <?php 
                                $sql = 'SELECT * FROM usuario';
                                $usuario = mysqli_query($conexao, $sql);
                                if(mysqli_num_rows($usuario) > 0){
                                    foreach($usuario as $usuario){
                                
                                ?>
                                <tr>
                                    <td><?=$usuario['id_usuario'] ?></td>
                                    <td><?=$usuario['nome'] ?></td>
                                    <td><?=$usuario['email'] ?></td>
                                    <td><?=$usuario['data_nasc'] ?></td>
                                    <td>
                                        <a href="admview.php?id=<?=$usuario['id_usuario']?>" class="btn btn-secondary btn-sm"><span class="bi-eye-fill"></span>&nbsp;Visualizar</a>
                                        <a href="edit.php?id=<?=$usuario['id_usuario']?>" class="btn btn-success btn-sm"><span class="bi-pencil-fill"></span>&nbsp;Editar</a>
                                        <form action="acoes.php" method="POST" class="d-inline">
                                            <button onclick="return confirm('Excluir usuário?')" type="submit" name="delete-usuario" value="<?=$usuario['id_usuario']?>" class="btn btn-danger btn-sm"><span class="bi-trash3-fill"></span>&nbsp;
                                                Excluir
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                                <?php 
                                }
                            }else{
                                echo "<h5>Nenhum usuário encontrado.</h5>";
                            }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
  </body>
</html>
