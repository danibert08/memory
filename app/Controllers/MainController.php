<?php

namespace App\Controllers;

use App\Controllers\CoreController;
use App\Models\Datas;

class MainController extends CoreController{


    /**
     * Method for the home page
     */
    public function home()
    {
        // If I need data from database (Models)
        $tab = Datas::findAll();

        // For now, this page only needs the view
        $this->show('game', [
            'tab' => $tab
        ]);
    }

     /**
     * Method for the checkScore page
     */
    public function checkScore()
    {
       
      $score = $_POST['score'];// On récupère le score transmis en POST
      $newData = new Datas();
      $newData->setScore($score);
      $newData->save(); // On l'insère en BDD
   
       unset($_POST); // On vide la variable $_POST
   }
    
}