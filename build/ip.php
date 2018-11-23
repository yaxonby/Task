<?php
$name = "no";
$age = "no";
if(isset($_GET['name'])) $name = $_GET['name'];
if (isset($_GET['age'])) $age = $_GET['age'];
echo "Yura: $name  <br> old: $age";

 ?>
