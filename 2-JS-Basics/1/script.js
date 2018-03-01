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
/*
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
/*
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

*/
//Lecture: Statements and expressions
/*
function someFun(par){
    //code
}
var someFun = function(par){
    //code
}

//Expressions 
3 + 4;
var x = 3;

//statements

if (x === 5){
    //do something
}
*/
// Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array (1990, 1969, 1948);
        
console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if(john.indexOf('teacher') === -1){
    console.log('John is NOT a teacher');
}
 */

//Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

//Lecture: Objects and methods
// v 1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
}
};

    //console.log(john.calculateAge(1970));
    console.log(john.calculateAge());

    var age = john.calculateAge();
    john.age = age;
    
    console.log(john);
    */

    //V 2.0
    /*
    var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
}
}  ;
    
    john.calculateAge();
    console.log(john);

 var mike = {
    yearOfBirth: 1950,
    calculateAge: function(){
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
}
}  ;
    
    mike.calculateAge();
    console.log(mike);


*/

//Lecture: Loops
    /*
    for (var i = 0; i < 10; i++){
        console.log(i);
    }
    
    /*
    0, true, print 0, update i to 1
    1, true, print 0, update i to 2
    .
    .
    .
    9, true, print 0, update i to 10
    10, False, end loop!

    
    var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
    */
    // for loops
    /*
    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }
    
    for (var i = names.length - 1; i >= 0; i--){
        console.log(names[i]);
    }
    */

    //while loops
/*
    var i = 0;
    while (i < names.length){
        console.log(names[i]);
        i++
    } 
    
    for (var i = 1; i <=5; i++){
        console.log(i);
        
        if (i === 3){
        break;    
        }
    }

    for (var i = 1; i <=5; i++){        
        if (i === 3){
            continue;    
        }
        console.log(i);
    }
*/

//Ejercicio 2 Solucion



    function printFullAge(years){
      var ages = [];
        var fullAges = [];
    
    for (var i = 0; i < years.length; i++){
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++){
        if (ages[i] >=18){
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        }
        else{
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }

    return fullAges;
    }
    
    var years =[2001, 1985, 1994, 2014, 1973];
    var full_1 = printFullAge(years);
    var full_2 = printFullAge([2012, 1915, 1999]);



    
    
    
     