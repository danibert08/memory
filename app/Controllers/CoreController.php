<?php

// Every Controller MUST extends this class

namespace App\Controllers;

abstract class CoreController
{
    protected $router;
    private $currentRouteName;
    
    public function __construct($router, $match)
    {
        // AltoRouter ==> exit global keyword :-D
        $this->router = $router;

        // Current route name from altoRouter match
        $this->currentRouteName = $match['name'] ?? '';

    }


    public function redirect($currentRouteName, $params = [])
    {
        header('Location:' . $this->router->generate($currentRouteName, $params));
    }

    /**
     * Méthode permettant d'afficher du code HTML en se basant sur les views
     *
     * @param string $viewName Nom du fichier de vue
     * @param array $viewVars Tableau des données à transmettre aux vues
     * @return void
     */
    protected function show(string $viewName, $viewVars = [])
    {
        // On récupère la propriété $router que l'on transmet aux vues
        $router = $this->router;

        // Comme $viewVars est déclarée comme paramètre de la méthode show()
        // les vues y ont accès
        // ici une valeur dont on a besoin sur TOUTES les vues
        // donc on la définit dans show()
        $viewVars['currentPage'] = $viewName;

        // définir l'url absolue pour nos assets
        $viewVars['assetsBaseUri'] = $_SERVER['BASE_URI'] . '/assets/';
        // définir l'url absolue pour la racine du site
        // /!\ != racine projet, ici on parle du répertoire public/
        $viewVars['baseUri'] = $_SERVER['BASE_URI'];

        // On veut désormais accéder aux données de $viewVars, mais sans accéder au tableau
        // La fonction extract permet de créer une variable pour chaque élément du tableau passé en argument
        extract($viewVars);
        // => la variable $currentPage existe désormais, et sa valeur est $viewName
        // => la variable $assetsBaseUri existe désormais, et sa valeur est $_SERVER['BASE_URI'] . '/assets/'
        // => la variable $baseUri existe désormais, et sa valeur est $_SERVER['BASE_URI']
        // => il en va de même pour chaque élément du tableau

        if (isset($_SESSION['userObject'])) {
            // la variable $currentUser pourra être utilisé n'importe dans le site
            // attention pensez à faire un test d'existence dans les templates
            // if (isset($currentUser))... Parce que la variable n'existe que si on 
            // est connecté
            $currentUser = $_SESSION['userObject'];
        }

        // $viewVars est disponible dans chaque fichier de vue
       
        require_once __DIR__ . '/../views/' . $viewName . '.php';
       
    }
}
