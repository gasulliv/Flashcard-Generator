var inquirer = require ('inquirer');
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var answer = process.argv[2];


askQuestion = function(){

	if (count < 5) {
		inquirer.prompt([
		{
			type: "input",
			message: (BasicCard.front),
			name:"name",
		}
	  ]).then(function(answers){
	  	//initializes the varibale newguy to be a programmer object which will take
	  	//in all of the user's answers to the questions above
	  	var newGuy = newProgrammer(
	  		answers.name,
	  		answers.position,
	  		answers.age,
	  		answers.favorite);

	  	//printInfo method is run to show the newguy object was successfully created

	  		newGuy.printInfo();

	  		//run the askquestion function again as to either end the loop or ask questions

	  		count++;

	  		askQuestion();
	  });

	}

	else {
		console.log("asked all questions");
	}
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");


