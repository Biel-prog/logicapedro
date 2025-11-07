<?php
//Percorrer Array Associativo
$notasAtividades = [
    "Caio" => 9,
    "Marcos" => 8,
    "Diego" => 10
];

$notasProvas = [
    "Caio" => 9,
    "Marcos" => 8,
    "Diego" => 10
];

foreach ($notasAtividades as $nome => $nota) {
    $prova = $notasProvas[$nome];

    echo $nome . " nota " . $nota . "<br>";
    echo $nome . " nota " . $nota . "<br>";
}

