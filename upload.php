<?php 
if ($_FILES) {
    $b = move_uploaded_file($_FILES['fileToUpload']['tmp_name'], '../upload/' . $_FILES['fileToUpload']['name']);
    echo ($b ? 'true' : 'false');
}
