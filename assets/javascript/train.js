  // Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyCw6N568trmw8WUiYJ6hz8fUB5PrIzVQSY",
    authDomain: "train-info-22f29.firebaseapp.com",
    databaseURL: "https://train-info-22f29.firebaseio.com",
    projectId: "train-info-22f29",
    storageBucket: "train-info-22f29.appspot.com",
    messagingSenderId: "43091263026"
  };
  firebase.initializeApp(config);*/
  

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCw6N568trmw8WUiYJ6hz8fUB5PrIzVQSY",
    authDomain: "train-info-22f29.firebaseapp.com",
    databaseURL: "https://train-info-22f29.firebaseio.com",
    projectId: "train-info-22f29",
    storageBucket: "train-info-22f29.appspot.com",
    messagingSenderId: "43091263026"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
$('#addBtn').on("click", function(){

	//Grabs user input
	var tname = $('#tname').val().trim();
	var destination = $('#destination').val().trim();
	var frequency  = $('#frequency').val().trim();
	var nextarrival = /*$('#nextarrival').val().trim();*/ moment($("#nextarrival").val().trim(), "hh:mm").format("X"); 
	var miniuteaway = $('#miniuteaway').val().trim();
	
	// Creates local "temporary" object for holding train data
	var newTrain = {
		tname: tname,
		destination: destination,
		frequency: frequency,
		nextarrival: nextarrival,
		miniuteaway: miniuteaway
	}
//Uploads employee data to the database
	database.ref().push(newTrain);

	console.log(newTrain.tname);
	console.log(newTrain.destination);
	console.log(newTrain.frequency);
    console.log(newTrain.nextarrival);
	console.log(newTrain.miniuteaway);
	
    $('#tname').val().trim();
	$('#destination').val().trim();
	$('#frequency').val().trim();
	$('#nextarrival').val().trim(); 
	$('#miniuteaway').val().trim();

	return false;
});

// Creates a Firebase event for adding trains to the database and a row in the html
database.ref().on("child_added", function(childSnapshot){
	console.log(childSnapshot.val());

	// Store everything into a variable
	var tname = childSnapshot.val().tname;
	var destination = childSnapshot.val().destination;
	var frequency = childSnapshot.val().frequency;
	var nextarrival = /*childSnapshot.val().nextarrival;*/(moment().format("hh:mm a"));
	var miniuteaway = childSnapshot.val().miniuteaway;

	// Train info
	console.log(tname);
	console.log(destination);
	console.log(frequency);
    console.log(nextarrival);
	console.log(miniuteaway);
	
	$("#traininfo > tbody").append("<tr><td>" + tname + "</td><td>" + destination  + "</td><td>" + frequency + "</td><td>" + nextarrival + "</td><td>"+ miniuteaway +"</td><td>");

});



