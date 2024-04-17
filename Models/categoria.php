<?php


class Categoria{

    public $nome_categoria;
    public $foto_categoria;
    public $td_categoria;

    public function criar(){

        $sql = 'INSERT INTO categorias (nome_categoria, foto_categoria) VALUES (:nome, :foto)';

    
        $conexão = Conexão::conectar();
        $stmt = $conexão->prepare($sql);
        $stmt->bindVALUE(':nome', $this->nome_categoria);
        $stmt->bindVALUE(':nome', $this->foto_categoria);
        $stmt->esecute();


    }
    



    // Editar
    // Listar
    // Deletar
    // Carregar


}


