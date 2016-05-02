<?php

require 'vendor/autoload.php';
$app = new \Slim\Slim();
$db = new PDO('mysql:host=localhost;dbname=gem;charset=utf8', 'root', '');


$app->get('/hello', function() {
	echo "Hello world";
});

//I implemented success/error statments but not sure how to use variables in them.
$app->post('/createUser',
    function () {
        global $db; 
        try {
            $fname = $_POST['fname'];
            $lname = $_POST['lname'];
            $email = $_POST['email'];
            $pass = $_POST['pass'];

            $query = $db->prepare(
                "INSERT INTO User (first_name, last_name, email, password)
                VALUES('$fname', '$lname', '$email', '$pass')"
                );

            $query->bindParam(':fname', $fname);
            $query->bindParam(':lname', $lname);
            $query->bindParam(':email', $email);
            $query->bindParam('pass', $pass);
        
            $query->execute();

	    $id = $db->lastInsertID();
	    $outputJSON = array('ID'=>$id);
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
	    $outputJSON = array('ID'=>-1);
            echo json_encode($outputJSON);
        }

    });


//not sure if this is correct
$app->post('/login',
    function() {
	   global $db;
        try{
            $email = $_POST['email'];
            $password = $_POST['password'];

            $query = $db->prepare("SELECT * FROM User WHERE email=:email AND password=:password");

            $query->bindValue(':email', $email, PDO::PARAM_STR);
            $query->bindValue(':password', $password, PDO::PARAM_STR);

            $query->execute();
            $result = $query->fetchAll(PDO::FETCH_ASSOC);                                                                      

            $outputJSON = array();
            if($query->rowCount() == 1)
		{
		    $outputJSON["id"] = $result[0]['id'];
                    echo json_encode($outputJSON);
		}
            else
		{
                    $outputJSON["id"] = -1;
		    echo json_encode($outputJSON);
		}
        }
        catch (PDOException $e) {
	    $outputJSON = array('id'=>-1);
            echo json_encode($outputJSON);
        }

    });


$app->run();
?>
