<?php 

require '../configs/config.php';

class Conexao{

    public static function conectar(){
        $conn = new PDO( SGBD , ":host=", DBLOCAL : ";dbname =" DBNAME, Usuário, Senha );
        $conn-->setAtribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    }
}

?>