<?php

include 'functions.php';

// remember to use the technique pan is shwoing you to clean up user input (prepared statements ect...)

if (isset($_GET['users'])) {
    $data = get_single_user($conn, $_GET['users']);
    echo json_encode($data);
} else{
    $data = get_all_users($conn);
    echo json_encode($data);
}


?>