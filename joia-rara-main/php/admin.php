<?php 
    require 'conex.php';
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Usuários</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
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
                                    <td><?=$usuario['id_user'] ?></td>
                                    <td><?=$usuario['nome'] ?></td>
                                    <td><?=$usuario['email'] ?></td>
                                    <td><?=$usuario['data_nasc'] ?></td>
                                    <td>
                                        <a href="" class="btn btn-secondary btn-sm">Visualizar</a>
                                        <a href="" class="btn btn-success btn-sm">Editar</a>
                                        <form action="" method="POST" class="d-inline">
                                            <button type="submit" name="delete-usuario" value="1" class="btn btn-danger btn-sm">
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
