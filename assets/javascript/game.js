var targetNumber
var wins = 0;
var losses = 0; 
// Generate a random number to represent the target number
$(document).ready(function(){
	$("#randomButton").on("click", function(){
		for (var i = 0; i < 2; i++){
			var random = Math.floor(Math.random() * 102) + 19;			
			targetNumber = random;
	$("#numberToGuess").text(targetNumber);
		}
		})
	})
var counter = 0;
//Create multiple crystals each with their own unique value.
// Expand our array to include four options (the four options would be numbers between 1 and 12 selected randomly)

var makeRandoms = function(){
	return Math.floor(Math.random()*12)+1;
}
var numberOptions = Array(4).fill(0).map(makeRandoms);
 
// Create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++){
	//for each iteration, create an imageCrystal
	var imageCrystal = $("<img>");
	//First each crystal will be given the class .img-circle allowing the CSS to take effect
	imageCrystal.addClass("img-circle");
	//Each imageCrystal will be given a src link to the crystal image
	imageCrystal.attr("src", "assets/images/crystal_d.png"); 
	
	//Each imageCrystal will be given a data attribute called data-crystalvalue.
	//This data attribute will be set equal to the array value
	imageCrystal.attr("data-crystalvalue", numberOptions[i]);
	//Each crystal image (with all its classes and attributes) will get added to the page.
	$("#crystals").append(imageCrystal);
}
// This time, our click event applies to every single crystal on the page. Not just one
$(".img-circle").on("click", function(){
	//Determining the crystal's value required us to extract the value from the data attribute.
	//Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
	// Using the .data("crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // (It automatically strips the "data-" part).
    var crystalValue = ($(this).data("crystalvalue"));

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#crystalValue").text(counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
    if (counter === targetNumber) {
    	wins++;
    	alert("You Win!");
    	$("#Wins").text(wins);
    }
    else if (counter >= targetNumber) {
    	losses++;
    	alert("You lose!!");
    	$("#Losses").text(losses);
    }
    $(".resetButton").click(function(){
    	$("#numberToGuess").empty();
    	$("#crystalValue").empty();
    	counter = null;
    	})
})