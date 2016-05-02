<?php
// Routes

require 'vendor/autoload.php';
$app = new \Slim\Slim();

//$app->get('/[{name}]', function ($request, $response, $args) 
$app->get('/hello', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->get('/goodbye', function ($request, $response, $args) {
    return $response->write("Time to go. Goodbye!");
});

//I implemented success/error statments but not sure how to use variables in them.
$app->post('/createUser',
    function ($request, $repsonse, $args) {
        try {
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $fname = $parms['fname'];
            $lname = $parms['lname'];
            $email = $parms['email'];
            $pass = $parms['pass'];

            $query = $db->prepare(
                "INSERT INTO user (first_name, last_name, email, password)
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
    function($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $email = $parms['email'];
            $password = $parms['password'];

            $query = $db->prepare(
                "SELECT email, password
                FROM user 
                WHERE email = $username
                AND password = $password");

            $query->bindParam(':email', $email);
            $query->bindParam(':password', $password);

            $query->execute();

	    $outputJSON = array();
            if($query->rowCount() == 1)
		{
		    $outputJSON["id"] = $query[0]['id'];
                    echo json_encode($outputJSON);
		}
            else
		}
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
    function ($request, $response, $args) {
        try {
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $name = $parms['name'];
            $desc = $parms['desc'];
            $creatorID = $parms['creatorID'];

            $query = $db->prepare(
                "INSERT INTO event (name, `desc`, creatorID)
                VALUES('$name', '$desc', $creatorID)"
                );

            $query->bindParam(':name', $name);
            $query->bindParam(':desc', $desc);
            $query->bindParam(':creatorID', $creatorID);

            $query->execute();

            echo "Event created";

        }
        catch (PDOException $e) {
            echo "Error in createEvent";
        }
    });

$app->post('/addUserToEvent',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $userID = $parms['userID'];
            $eventID = $parms['eventID'];

            $query = $db->prepare(
                "INSERT INTO userEventLink (userId, eventID)
                VALUES($userID, $eventID)"
                );

            $query->bindParam(':userID', $userID);
            $query->bindParam(':eventID', $eventID);

            $query->execute();

            echo "User added to event";
        }
        catch (PDOException $e) {
            echo "Error in addUserToEvent";
        }
    });

//where to get comments.rating?
$app->post('/addComment',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $userID = $parms['userID'];
            $text = $parms['text'];
            $eventID = $parms['eventID'];
            $replyID = $parms['replyID'];

            $query = $db->prepare(
                "INSERT INTO comments (`text`, creatorID, eventID, replyID)
                VALUES('$text', '$creatorID', $eventID, replyID)"
                );

            $query->bindParam(':userID', $userID);
            $query->bindParam(':eventID', $eventID);

            $query->execute();

            echo "Comment added";

        }
        catch (PDOException $e) {
            echo "Error in addComment";
        }
    });

$app->post('/createPoll',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];

            $query = $db->prepare(
                "INSERT INTO poll (eventID)
                VALUES($eventID)");

            $query->bindParam(':eventID', $eventID);

            $query->execute(
                ""
                );

            echo "Poll created";
        }
        catch (PDOException $e) {
            echo "Error in createPoll";
        }
    });

//not exactly how the option implementation is supposed to work
$app->post('/createPollOption',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $pollID = $parms['pollID'];
            $startTimeDate = $parms['startTimeDate'];
            $endTimeDate = $parms['endTimeDate'];

            $query = $db->prepare(
                ""
                );

            $query->bindParam(':pollID', $pollID);
            $query->bindParam(':startTimeDate', $startTimeDate);
            $query->bindParam(':endTimeDate', $endTimeDate);

            $query->execute();

            echo "Poll option created";

        }
        catch (PDOException $e) {
            echo "Error in createPollOption";
        }
    });

//where does poll option come from?
$app->post('/vote',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $pollID = $parms['pollID'];
            $optionID = $parms['optionID'];

            $query = $db->prepare(
                ""
                );

            $query->bindParam(':pollID', $pollID);
            $query->bindParam(':optionID', $optionID);

            $query->execute();

            echo "Voted";

        }
        catch (PDOException $e) {
            echo "Error in vote";
        }
    });

$app->post('/rateComment',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $commentID = $parms['commentID'];
            $up = $parms['up'];

            $query = $db->prepare(
                "UPDATE comments
                SET rating = $up
                WHERE id = $commentID"
                );

            $query->bindParam(':commentID', $commentID);
            $query->bindParam(':up', $up);

            $query->execute();

            echo "Voted";
        }
        catch (PDOException $e) {
            echo "Error in rateComment";
        }
    });

$app->post('/deletePoll',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $pollID = $parms['pollID'];

            $query = $db->prepare(
                "DELETE
                FROM poll
                WHERE id = $pollID"
                );

            $query->bindParam(':pollID', $pollID);

            $query->execute();

            echo "Poll deleted";
        }
        catch (PDOException $e) {
            echo "Error in deletePoll";
        }
    });

$app->post('/deleteEvent',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];

            $query = $db->prepare(
                "DELETE
                FROM event
                WHERE id = $eventID"
                );

            $query->bindParam(':eventID', $eventID);

            $query->execute();

            echo "Event deleted";
        }
        catch (PDOException $e) {
            echo "Error in deleteEvent";
        }
    });

$app->post('/deleteComment',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $commentID = $parms['commentID'];

            $query = $db->prepare(
                "DELETE
                FROM comments
                WHERE id = $commentID"
                );

            $query->bindParam(':commentID', $commentID);

            $query->execute();

            echo "Comment deleted";
        }
        catch (PDOException $e) {
            echo "Error in deleteComment";
        }
    });

//not sure how to implement poll options
$app->post('/deletePollOption',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $optionID = $parms['optionID'];

            $query = $db->prepare(
                "DELETE
                FROM WHAT TABLE
                WHERE id = $optionID"
                );

            $query->bindParam(':optionID', $optionID);

            $query->execute();

            echo "Poll option deleted";
        }
        catch (PDOException $e) {
            echo "Error in deletePollOption";
        }
    });

//not sure what updated time should be. Is it updating to current time?
$app->post('/setEventTime',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];
            $time = $parms['time'];

            $query = $db->prepare(
                "UPDATE event
                SET time = $time
                WHERE id = $eventID"
                );

            $query->bindParam(':commentID', $commentID);
            $query->bindParam(':time', $time);

            $query->execute();

            echo "Event time set";
        }
        catch (PDOException $e) {
            echo "Error in setEventTime";
        }
    });

$app->post('/setEventDesc',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];
            $desc = $parms['desc'];

            $query = $db->prepare(
                "UPDATE event
                SET `desc` = $desc
                WHERE id = $eventID"
                );

            $query->bindParam(':commentID', $commentID);
            $query->bindParam(':desc', $desc);

            $query->execute();

            echo "Event description set";
        }
        catch (PDOException $e) {
            echo "Error in setEventDesc";
        }
    });

$app->get('/getEventsForUser',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $userID = $parms['userID'];

            $query = $db->prepare(
                "SELECT e.id, e.name, e.desc, e.time, e.creatorID
                FROM event e, userEventLink ue, user u
                WHERE $userID = u.id
                AND u.id = ue.userID
                AND ue.eventID = e.id"
                );

            $query->bindParam(':userID', $userID);

            $query->execute();
        }
        catch (PDOException $e) {
            echo "Error in getEventsForUser";
        }
    });

//should creator id correlate with user id so that you can tell which user made which event?
//not exactly sure how this endpoint will be implemented
$app->get('/getEventsCreatedByUser',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $userID = $parms['userID'];

            $query = $db->prepare(
                "SELECT e.id, e.name, e.desc, e.time
                FROM event e, userEventLink ue, user u
                WHERE $userID = u.id
                AND u.id = ue.userID
                AND ue.eventID = e.id
                AND e.creatorID = SOMETHING"
                );

            $query->bindParam(':userID', $userID);

            $query->execute();
        }
        catch (PDOException $e) {
            echo "Error in getEventsCreatedByUser";
        }
    });

$app->post('/getEvent',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];

            $query = $db->prepare(
                "SELECT id, name, `desc`, time, creatorID
                FROM event
                WHERE $eventID = id"
                );

            $query->bindParam(':eventID', $eventID);

            $query->execute();
        }
        catch (PDOException $e) {
            echo "Error in getEvent";
        }
    });

$app->post('/getCommentsForEvent',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];

            $query = $db->prepare(
                "SELECT c.id, c.text, e.creatorID, c.rating, c.replyID
                FROM event e, comments c
                WHERE $eventID = e.id
                AND e.id = c.eventID"
                );

            $query->bindParam(':eventID', $eventID);

            $query->execute();
        }
        catch (PDOException $e) {
            echo "Error in getCommentsForEvent";
        }
    });

$app->get('/getUsersForEvent',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];

            $query = $db->prepare(
                "SELECT u.id, u.first_name, u.last_name
                FROM event e, userEventLink ue, user u
                WHERE $eventID = e.id
                AND e.id = ue.eventID
                AND ue.userID = u.id"
                );

            $query->bindParam(':eventID', $eventID);

            $query->execute();
        }
        catch (PDOException $e) {
            echo "Error in getUsersForEvent";
        }
    });

//where does optionID come from?
$app->get('/getPoll',
    function ($request, $response, $args) {
        try{
            $db = $this->dbConn;

            $parms = $request->getParsedBody();
            $eventID = $parms['eventID'];

            $query = $db->prepare(
                ""
                );

            $query->bindParam(':eventID', $eventID);

            $query->execute();
        }
        catch (PDOException $e) {
            echo "Error in getPoll";
        }
    });
?>
