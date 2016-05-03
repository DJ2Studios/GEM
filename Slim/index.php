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


//Poll_id is currently nullable because wasn't sure how to get that value. Event.id is auto incremented,
//so poll_id can not be as well
$app->post('/createEvent',
    function () {
        global $db;
        try {
            $name = $_POST['name'];
            $desc = $_POST['desc'];
            $creatorID = $_POST['creatorID'];

            $query = $db->prepare(
                "INSERT INTO event (name, `desc`, creatorID)
                VALUES('$name', '$desc', '$creatorID')"
                );

            $query->bindParam(':name', $name);
            $query->bindParam(':desc', $desc);
            $query->bindParam(':creatorID', $creatorID);

            $query->execute();
            $outputJSON = array('id'=>$db->lastInsertID());
            echo json_encode($outputJSON);

        }
        catch (PDOException $e) {
            $outputJSON = array('id'=>-1);
            echo json_encode($outputJSON);
        }
    });


$app->post('/addUserToEvent',
    function () {
        global $db;
        try{
            $userID = $_POST['userID'];
            $eventID = $_POST['eventID'];

            $query = $db->prepare(
                "INSERT INTO userEventLink (userId, eventID)
                VALUES($userID, $eventID)"
                );

            $query->bindParam(':userID', $userID);
            $query->bindParam(':eventID', $eventID);

            $query->execute();
            $outputJSON = array('status'=>'success');
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('status'=>'failure');
            echo json_encode($outputJSON);
        }
    });

//where to get comments.rating?
$app->post('/addComment',
    function () {
        global $db;
        try{
            $userID = $_POST['userID'];
            $text = $_POST['text'];
            $eventID = $_POST['eventID'];
            $replyID = $_POST['replyID'];

            $query = $db->prepare(
                "INSERT INTO comments (`text`, creatorID, eventID, replyID, rating)
                VALUES('$text', '$userID', '$eventID', '$replyID', 0)"
                );

            $query->bindParam(':userID', $userID);
            $query->bindParam(':eventID', $eventID);
            $query->bindParam(':replyID', $replyID);
            $query->bindParam(':text', $text);

            $query->execute();

            $outputJSON = array('id'=>$db->lastInsertID());
            echo json_encode($outputJSON);

        }
        catch (PDOException $e) {
            $outputJSON = array('id'=>-1);
            echo json_encode($outputJSON);
        }
    });


$app->post('/createPoll',
    function () {
    global $db;
        try{
            $eventID = $_POST['eventID'];

            $query = $db->prepare(
                "INSERT INTO poll (eventID)
                VALUES($eventID)");

            $query->bindParam(':eventID', $eventID);

            $query->execute();

            $outputJSON = array('id'=>$db->lastInsertID());
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('id'=>-1);
            echo json_encode($outputJSON);
        }
    });

//not exactly how the option implementation is supposed to work
$app->post('/createPollOption',
    function () {
    global $db;
        try{
            $pollID = $_POST['pollID'];
            $startTimeDate = $_POST['startTimeDate'];
            $endTimeDate = $_POST['endTimeDate'];

            $query = $db->prepare(
                "INSERT INTO slot (pollID, votes, startTime, endTime) VALUES ('$pollID', 0, '$startTimeDate', '$endTimeDate')");

            $query->bindParam(':pollID', $pollID);
            $query->bindParam(':startTimeDate', $startTimeDate);
            $query->bindParam(':endTimeDate', $endTimeDate);

            $query->execute();

            $outputJSON = array('id'=>$db->lastInsertID());
            echo json_encode($outputJSON);

        }
        catch (PDOException $e) {
            $outputJSON = array('id'=>-1);
            echo json_encode($outputJSON);
        }
    });

//where does poll option come from?
$app->post('/vote',
    function () {
        global $db;
        try{
            $pollID = $_POST['pollID'];
            $optionID = $_POST['optionID'];

            $getVoteQuery = $db->prepare("SELECT votes FROM slot WHERE id=:optionID");
            $getVoteQuery->bindParam(':optionID', $optionID);
            $getVoteQuery->execute();

            $votes = $getVoteQuery->fetchAll(PDO::FETCH_ASSOC);
            $votes = $votes[0]['votes']+1;

            $query = $db->prepare(
                "UPDATE slot SET votes=$votes WHERE id=$optionID"
                );

            $query->bindParam(':votes', $votes);
            $query->bindParam(':optionID', $optionID);

            $query->execute();

            $outputJSON = array('votes'=>$votes);
            echo json_encode($outputJSON);

        }
        catch (PDOException $e) {
            $outputJSON = array('votes'=>-1);
            echo json_encode($outputJSON);
        }
    });


$app->post('/rateComment',
    function () {
        global $db;
        try{
            $commentID = $_POST['commentID'];
            $up = $_POST['up'];

            if($up)
                $up = 1;            
            else
                $up = -1;
            $getRatingQuery = $db->prepare("SELECT rating FROM comments WHERE id = $commentID");
            $getRatingQuery->bindParam(':commentID', $commentID);
            $getRatingQuery->execute();

            $rating = $getRatingQuery->fetchAll(PDO::FETCH_ASSOC);
            $rating = $rating[0]['rating']+intval($up);

            $query = $db->prepare(
                "UPDATE comments
                SET rating = $rating
                WHERE id = $commentID"
                );

            $query->bindParam(':commentID', $commentID);
            $query->bindParam(':rating', $rating);

            $query->execute();

            $outputJSON = array('rating'=>$rating);
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('rating'=>-1);
            echo "Error in rateComment";
        }
    });


$app->post('/deletePoll',
    function () {
        global $db;
        try{
            $pollID = $_POST['pollID'];

            $query = $db->prepare(
                "DELETE
                FROM poll
                WHERE id = $pollID"
                );

            $query->bindParam(':pollID', $pollID);

            $query->execute();

            $outputJSON = array('status'=>'success');
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('status'=>'failure');
            echo json_encode($outputJSON);
        }
    });


$app->post('/deleteEvent',
    function () {
        global $db;
        try{
            $eventID = $_POST['eventID'];

            $query = $db->prepare(
                "DELETE
                FROM event
                WHERE id = $eventID"
                );

            $query->bindParam(':eventID', $eventID);

            $query->execute();

            $outputJSON = array('status'=>'success');
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('status'=>'failure');
            echo json_encode($outputJSON);
        }
    });


$app->post('/deleteComment',
    function () {
        global $db;
        try{
            $commentID = $_POST['commentID'];

            $query = $db->prepare(
                "DELETE
                FROM comments
                WHERE id = $commentID"
                );

            $query->bindParam(':commentID', $commentID);

            $query->execute();

            $outputJSON = array('status'=>'success');
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('status'=>'failure');
            echo json_encode($outputJSON);
        }
    });


$app->post('/deletePollOption',
    function () {
        global $db;
        try{
            $optionID = $_POST['optionID'];

            $query = $db->prepare(
                "DELETE
                FROM slot
                WHERE id = $optionID"
                );

            $query->bindParam(':optionID', $optionID);

            $query->execute();

            $outputJSON = array('status'=>'success');
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('status'=>'failure');
            echo json_encode($outputJSON);
        }
    });


//Updated time is the input time
$app->post('/setEventTime',
    function () {
        global $db;
        try{
            $eventID = $_POST['eventID'];
            $time = $_POST['time'];

            $query = $db->prepare(
                "UPDATE event
                SET time = '$time'
                WHERE id = $eventID"
                );

            $query->bindParam(':eventID', $eventID);
            $query->bindParam(':time', $time);

            $query->execute();

            $outputJSON = array('success'=>true);
            echo json_encode($outputJSON);
        }
        catch (PDOException $e) {
            $outputJSON = array('success'=>false);
            echo json_encode($outputJSON);
        }
    });


$app->run();
?>
