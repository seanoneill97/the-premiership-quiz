
var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct = 0,name = 0; 

quizAnswers = [];
		
//Place the questions array here
var questions=[
	{
	    question: "Where do Tottenham Hotspur play their home games?",//question
	    correctAnswer: "White Hart Lane",//right answer to question
        
        //list of multiple choice answers
	    answer0: "White Hart Lane",
	    answer1: "Anfield",
	    answer2: "Stamford Bridge",
        answer3: "Town Park"
	},
	{
		question: "Who currently captains the Chelsea team?",
		correctAnswer: "Gary Cahill",

		answer0:"Diego Costa",
		answer1:"Gary Cahill",
		answer2:"Didier Drogba",
		answer3:"Ashley cole"
	},
	{
		question:"How many teams are there in the Premier league?",
		correctAnswer: "20",

		answer0:"20",
		answer1:"22",
		answer2:"24",
		answer3:"25"
	},
	{
		question:"What season did Arsenal last win the league in?",
		correctAnswer:"03/04",

		answer0:"00/01",
		answer1:"11/12",
		answer2:"03/04",
		answer3:"01/02"
	},
	{
		question:"Which defender has scored the most own goals in the Premier League?",
		correctAnswer:"Richard Dunne",

		answer0:"William Gallas",
		answer1:"Richard Dunne",
		answer2:"Jamie Carragher",
		answer3:"John Terry"
	},
	{
		question:"Who was the biggest transfer ever to come to the Premier league?",
		correctAnswer:"Paul Pogba",

		answer0:"Paul Pogba",
		answer1:"David Luiz",
		answer2:"Robinho",
		answer3:"Demba Ba"
	},
	{
		question:"Where do Burnley play their home games?",
		correctAnswer:"Turf Moor",

		answer0:"Turf Farm",
		answer1:"Home Farm",
		answer2:"Turf Moor",
		answer3:"Melview park"
	},
	{
		question:"Who won the league last year at 5000/1 odds?",
		correctAnswer:"Leicester city",

		answer0:"Leicester city",
		answer1:"Manchester City",
		answer2:"Manchester Utd",
		answer3:"Chesterfield"
	},
	{
		question:"Who won the golden boot in the 1997/98 season?",
		correctAnswer:"Michael Owen",

		answer0:"Alan Shearer",
		answer1:"Michael Owen",
		answer2:"Teddy Sheringham",
		answer3:"Nigel Owens"
	},
	{	
		question:"What player won the PFA player of the year award in the 2015,16 season?",
		correctAnswer:"Riyad Mahrez",

		answer0:"Riyad Mahrez",
		answer1:"Ngolo Kante",
		answer2:"Stephen Gerrard",
		answer3:"Frank Lampard"
	},
	{
		question:"Who won the first ever Premier league title?",
		correctAnswer:"Manchester Utd",

		answer0:"Leeds United",
		answer1:"Newcastle",
		answer2:"Manchester Utd",
		answer3:"Chelsea"
	},
	{
		question:"Who was the first manager to be sacked in 2016?",
		correctAnswer:"Steve McClaren",

		answer0:"Jose Mourinho",
		answer1:"Roberto Martinez",
		answer2:"Steve McClaren",
		answer3:"Alex Ferguson"
	},
	{ 
		question: "Which one of the Toure brothers plays for Manchester City?",
		correctAnswer: "Yaya",

		answer0: "Yaya",
		answer1: "Kolo",
		answer2: "Francois",
		answer3: "Koyo"
	},
	{
		question:"What club does England striker Jermain Defo currently play for?",
		correctAnswer:"Sunderland",

		answer0: "Wigan",
		answer1: "Sunderland",
		answer2: "Crystal Palace",
		answer3: "Liverpool"
	},
	{
		question: "18 year old Marcus Rashford scored his first brace agaist Arsenal in 2016, He was the same age as which legend when scoring their first brace?",
		correctAnswer: "Wayne Rooney",

		answer0: "Michael Owen",
		answer1: "Robbie Fowler",
		answer2: "Wayne Rooney",
		answer3: "Owen Hargreaves"
	},
	{
		question: "Which club did Arsenal sign danny Welbeck from?",
		correctAnswer: "Man Utd",

		answer0: "Chelsea",
		answer1: "Man Utd",
		answer2: "Everton",
		answer3: "Southampton"
	},
	{
		question: "At which stadium do Everton play their home games?",
		correctAnswer: "Goodison Park",

		answer0: "Liberty Stadium",
		answer1: "Twickenham",
		answer2: "Goodison Park",
		answer3: "Celtic Park"
	},
	{
		question: "Which player won the PFA Player of the Year Award in the opening Premier League season of 92/93?",
		correctAnswer: "Paul McGrath",

		answer0: "Paul McGrath",
		answer1: "Paul Ince",
		answer2: "Paul Scholes",
		answer3: "David Beckham"
	},
	{
		question: "Arsenals last match at Highbury took place in 2005/06, but who was it against?",
		correctAnswer: "Wigan",

		answer0: "Blackburn",
		answer1: "Charlton",
		answer2: "Wigan",
		answer3: "Barnet"
	},
	{
		question: "Which country has provided the most players to the Premier League outside of England?",
		correctAnswer: "France",

		answer0: "Brazil",
		answer1: "France",
		answer2: "Spain",
		answer3: "China"
	}
];

function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

function _(x) {
	return document.getElementById(x);
} 

//Setting underscore equal to document.getElementById (handy shortcut)
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

//Insert Javascript functions renderQuestion() & checkAnswer() here
function renderQuestion()
{
	test = _("test");
	if(pos >= questions.length)//If position is greater than or equal to the number of questions
	{
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() +"%)</h2>";//Print # correct out of 20
		_("test_status").innerHTML += "Thank you for completing the quiz";//Print "thank you ...."
		pos = 0;
		correct= 0;
		return false;
	}
	
	 _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //Print questions and increment by one each iteration

    var bar=document.getElementById("progressBar");//Progress bar value
    bar.value = (pos+1);//Progress bar increments as we go through questions, starts at 1

    //console.log("Pos value is " + pos);//write this to console

    //push all potential answers to the quizAnswers array

    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
    
    console.log("Unshuffled answers" + quizAnswers);
    
	 //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;//question is in position 0 in the array(zero indexed)
    choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
    choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
    choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
    choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array
    
    test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//on clicking submit button, it checks your answers
}

function checkAnswer()
{
	choices = document.getElementsByName("choices"); // creates an array
	for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of choices, increment it by one
	{
		if(choices[i].checked) //if a choice is checked
		{
			choice = choices[i].value; // take the value of that choice and put it into choice
		}
	}
	if(choice == questions[pos][0])//if the value of the choice is equal to position 4
	{
		alert('Correct!');//Alert correct
		correct++;//increment your correct answers by one
	}
	else//or else
	{
		alert('Sorry wrong answer. the correct answer is ' + questions[pos].correctAnswer);
	}
	pos++; //Increment position  by one ie go onto the next question
	
	renderQuestion(); //go to render question again
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);
