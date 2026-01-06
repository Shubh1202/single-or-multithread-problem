<?php
echo "Hello 1\n";
$url = "https://www.google.com";
$data = file_get_contents($url);
if ($data !== false) {
    echo $data;
} else {
    echo "Data not found";
}
echo "\nHello 2";
?>