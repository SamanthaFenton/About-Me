"use strict"
console.log(...)

//what is a function
//function declaration

function sayHello(){}
console.log("Hello")

//invoke / call a function

sayHello()


//when you declare a function you have parameters that give names to the functions inputs

function sayGoodbye(name){
    console.log("goodbye"+name);
}

// the data we pass into the function is called an argument
sayGoodbye("neo")

//if we want to pass information back to the programme we use az return statement

function getFullName(firstName, secondName){
    return firstName + "" + secondName; /*last thing to enter and total value returned to user*/
}

let ada = getFullName('ada', 'lovelace')
console.log("ada" + ada);

function yesOrNoPrompt(promptInfo){
    let userInput=prompt(promptInfo);
    if(userInput === "yes"){
        console.log("hurrah");
    }else if ... no{

    }else if...maybe{

    }else
}
yesOrNoPrompt("well yes or no")

// to write a function expression assign it to a variable eg 

const myName = function (name){
    console.log(name);
}

mayName();
