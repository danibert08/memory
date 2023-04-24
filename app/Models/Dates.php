<?php

namespace App\Models;



// Mdoel for the table "example"
class Dates  {
    // here I should define every field as a property
    protected $frenchDate;
   
    // etc.

   

    public static function frenchDate() {

       $dateMonth = date('M');
       $dateYear = date('Y');
       $transformDate = [
         'Jan' => "Janvier",
         'Feb' =>"Février",
         'Mar' => 'Mars',
         'Apr' => 'Avril',
         'May' => 'Mai',
         'Jun' => 'Juin',
         'Jul' => 'Juillet',
         'Aug' => 'Août',
         'Sep' => 'Septembre',
         'oct' => 'october',
         'Nov' => 'Novembre',
         'Dec' => 'Décembre',
       ];
        
       $frenchDate = $transformDate[$dateMonth] . " " . $dateYear;
       return $frenchDate;
    }
   }