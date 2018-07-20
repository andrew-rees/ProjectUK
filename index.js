const readline = require('readline-sync');
const Feature = require("./classes/feature");
//?? require mountain, nationalPark and river?
const Person = require("./classes/person");

//collect fist user input: what do you want 
console.log('What do you want to do? ViewAll, placePeople, xx');
const whatToDoresponse = readline.prompt();
if (whatToDoresponse === `ViewAll`) {
    console.log(`ViewAll`)
} else if (whatToDoresponse=== `placePeople`) {
    console.log(`placePeople`)
} else {
    console.log(`sorry, don't recognise input`)
}
