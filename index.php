<?php
// echo "Hello 1\n";
// $url = "https://www.google.com";
// $data = file_get_contents($url);
// if ($data !== false) {
//     echo $data;
// } else {
//     echo "Data not found";
// }
// echo "\nHello 2";


/***********
 * File read operation
 */
// console.log() ki jagah error_log() ya echo use karein
// Server logs mein dekhne ke liye:
error_log("Before Async Operation");

// fs.readFileSync() ka equivalent PHP mein file_get_contents() hai
$fileContent = file_get_contents("./non-blocking-1.txt");

error_log("After async operation completed");

// res.writeHead(200, ...) ke liye header() function use karein
header('Content-Type: application/json');
http_response_code(200);

// res.end(JSON.stringify(...)) ka equivalent json_encode() aur echo hai
echo json_encode(["message" => "Server testing"]);
?>