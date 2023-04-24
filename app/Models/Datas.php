<?php

namespace App\Models;

use App\Utils\Database;
use App\Models\Dates;
use PDO;

// Mdoel for the table "example"
class Datas extends CoreModel {
    // here I should define every field as a property
    protected $score;
    protected $name;
    protected $date;
    // etc.

   

    public static function findAll() {
       
       //On récupère les meilleurs temps
        $pdo =Database::getPDO();
        $ins = $pdo->prepare("select * from datas order by score limit 10 ");
        $ins->setFetchMode(PDO::FETCH_ASSOC);
        $ins->execute(); 
        $result = $ins->fetchAll();

       return $result;
    }


    protected function insert() {
       
        $pdo = Database::getPDO();
        //On récupère les meilleurs temps
        $ins = $pdo->prepare("select * from datas order by score limit 10");
        $ins->setFetchMode(PDO::FETCH_ASSOC);
        $ins->execute(); 
        $tab = $ins->fetchAll();
            
        // Si l'on a un compteur à enregistrer, on le compare aux meilleurs temps
            
            for($i=0;$i<count($tab);$i++){
                if($this->score < $tab[$i]['score']){ // On en le sauvegarde que s'il rentre dans les 10 meilleurs
                    $score = $this->score;
                    $name = $this->name;
                    $createdAt = new Dates(); 
                    $date = $createdAt->frenchDate();
                   
                    $insertQuery  = $pdo->prepare ( "
                        INSERT INTO datas (score, name, date)
                        VALUES (:score, :name, :date)"
                        );
                    $insertQuery->execute(array(":date"=>"{$date}", ":score"=>"{$score}", ":name"=>"{$name}"));
                    break;
                }
            }
        
    }

    protected function update() {
        
       
    }

    public function jSonSerialize() {
        // TODO
    }

    // GETTERS

    /**
     * Get the value of field1
     */ 
    public function getScore()
    {
        return $this->score;
    }

   

    // SETTERS

    /**
     * Set the value of field1
     */ 
    public function setScore($score)
    {
        $this->score = $score;
    }

   

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of date
     */ 
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set the value of date
     *
     * @return  self
     */ 
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }
}