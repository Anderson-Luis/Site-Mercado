<?php
     include_once('conexao.php');

     $nome = $_POST["nomec"];
     $tel = $_POST["telefone"];
     $email = $_POST["email"];
     $cidade = $_POST["cidade"];
     $assunto = $_POST["ass"];
     $msg = $_POST["msg"];

     /* Associando as variáveis com as posições da tabela no banco de dados
       Var1 = "INSERT INTO Nome_da_Tabela(Campos) VALUES('Variáveis');"
       Var2 = mysqli_query(Var_de_Conexão, Var1)*/
     $tabela = "mensagens";
     $campos = "nome, numero, email, cidade, assunto, mensagem";
     $valores = "'$nome', '$tel', '$email', '$cidade', '$assunto', '$msg'";


    // $sql = "INSERT INTO mensagens(nome, numero, email, cidade, assunto, mensagem) VALUES('".$nome."', '".$tel."', '".$email."', '".$cidade."', '".$assunto."', '".$msg."')";

     $sql = "INSERT INTO $tabela ($campos) VALUES($valores)";

     if ($conect) {
  		 mysqli_query($conect, $sql);
  		 echo "Dados enviados com sucesso";
       }
  	 else{
  		die("Falha na conexão: " . mysqli_connect_error());
    }

    // header("location: ./faleconosco.html");

    $tempo = "0.0001";
    $url = "./faleconosco.html";
    echo "<meta HTTP-EQUIV='Refresh' CONTENT='$tempo; URL= $url'>";
?>
