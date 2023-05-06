<?php

namespace App\Models;

use PDO;
use App\Models\Dates;
use App\Utils\Database;
use App\Models\CoreModel;

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
        $ins = $pdo->prepare("select * from datas order by score ");
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

        $toDay = new Dates();
        $date = $toDay->frenchDate();
        $monthTab = [];
        
        for($i=0;$i<count($tab);$i++){
            if($tab[$i]["date"] == $date){
               $monthTab[] = $tab[$i];
            }
         }

            
        // Si l'on a un compteur à enregistrer, on le compare aux meilleurs temps
            if(count($monthTab)<10){
            
                $score = $this->score;
                $name = $this->name;
                $insertQuery  = $pdo->prepare ("
                    INSERT INTO datas (score, name, date)
                    VALUES (:score, :name, :date)"
                    );
                $insertQuery->execute(array(":score"=>"{$score}", ":name"=>"{$name}", ":date"=>"{$date}"));
                    
            }else{
                for($i=0;$i<count($monthTab);$i++){
                    if($this->score < $tab[$i]['score']){ // On en le sauvegarde que s'il rentre dans les 10 meilleurs
                        $score = $this->score;
                        $name = $this->name;
                    
                        $insertQuery  = $pdo->prepare ( "
                            INSERT INTO datas (score, name, date)
                            VALUES (:score, :name, :date)"
                            );
                        $insertQuery->execute(array(":score"=>"{$score}", ":name"=>"{$name}", ":date"=>"{$date}"));
                        break;
                    }
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