//Lecture: Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: Variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);


var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + ' Is he Married? ' + isMarried + '.');



age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + ' Is he Married? ' + isMarried + '.');


//var lastName = prompt('Whats is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + ' Is he Married? ' + isMarried + '.');
*/

//Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);



var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);



*/


//Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
    //if(false)
    console.log(name + ' is marred!')
}
else{
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

/*
if(isMarried) {
    console.log('YES');
}
else{
    console.log('NO');
}


if(isMarried) {
    console.log('YES');
}

if (23 == "23"){
    console.log('Somenthing to print...');
}
*/

//Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20){
    console.log('John es a teenager');
}
else if (age >= 20 && age < 30){    
    console.log('John is a young man.');
}
else{
    console.log('John es a man');
}

var job = 'teacher';

job = prompt('What does john do?');

switch(job){
    case 'teacher':
        console.log('John taeches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John help fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/

//SOLUTION 

var heightJohn = 180;
var heigtMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn
;

var scoreMike = heigtMike + 5 * ageMike;

/*
if(scoreJohn > scoreMike){
    console.log('John wins the game with ' + scoreJohn + 'points');
}

else if(scoreMike > scoreJohn){
     console.log('Mike wins the game with ' + scoreMike + 'points');
}
else if (scoreJohn === scoreMike){
    console.log('There is a draw');
}
*/
/*
var heightMary = 158;
var ageMary = 31;
var ScoreMary = heightMary + 5 * ageMary;

if(scoreJohn > scoreMike && scoreJohn > ScoreMary){
   console.log('John wins the game with ' + scoreJohn + 'points');
}

else if (scoreMike > scoreJohn && scoreMike > ScoreMary){
  console.log('Mike wins the game with ' + scoreMike + 'points');
}

else if (ScoreMary > scoreJohn && ScoreMary > scoreMike){
  console.log('Mary wins the game with ' + ScoreMary + 'points');
}

else {
    console.log('It\' a draw.');
} 

*/

//Lecture: Funcions

function calculateAge(yearOfBirth){
 var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0){
 console.log(name + ' retires in ' + retirement + ' years.');    }
    else{
         console.log(name + ' is already retired');
    }
    
   
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);