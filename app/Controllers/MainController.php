<?php

namespace App\Controllers;
use App\Models\Datas;
use App\Models\Dates;

class MainController extends CoreController{


    /**
     * Method for the home page
     */
    public function home()
    {
        // If I need data from database (Models)
        $tab = Datas::findAll();
        $date = new Dates();
        $frenchDate = $date->frenchDate();
     
        $monthTab = [];
        
        for($i=0;$i<count($tab);$i++){
            if($tab[$i]["date"] == $frenchDate){
               $monthTab[] = $tab[$i];
            } 
         }

        // For now, this page only needs the view
        $this->show('game', [
            'tab' => $tab,
            'date'=> $frenchDate,
            'monthTab' => $monthTab,
           
            
        ]);
    }

     /**
     * Method for the checkScore page
     */
    public function checkScore($score, $name)
    {
      
      $newData = new Datas();
      $newData->setScore($score);
      $newData->setName($name);
      $newData->save();
       
      unset($_GET); // On vide la variable $_GET
      $this->redirect("main-home"); // on redirige vers la page d'accueil
   }
    
}