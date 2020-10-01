<?php
function checkRequest(){
    if ($_POST === NULL) {
        throw new Exception('Something went wrong! Please try later!');
    }
    return true;
}

try {
    checkRequest();
    $arr = array(
        'success' => true,
        'message' => 'Your data sent successfully',
        'data' => $_POST);
} catch (Exception $e){
    $arr = array(
        'error' => false,
        'error-message' => $e);
}

echo json_encode($arr);
?>