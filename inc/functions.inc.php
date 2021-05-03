<?php 

function debug( $arg ){

    echo "<div style='background:#fda500; z-index:1000; padding:15px'>";

        $trace = debug_backtrace();
        //debut_backtrace() : fonction interne de php qui retourne un array avec des infos à l'endroit où l'on fait appel à elle

        echo "Debug demandé dans le fichier : " . $trace[0]['file'] . " à la ligne " . $trace[0]['line'];

        print '<pre>';
            print_r( $arg );
        print '</pre>';
    echo "</div>";
}

//------------------------------------------------------------------------------------------
