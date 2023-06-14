"use strict"
console.log(1)

const welcome = alert("Welcome to my website about me, I hope you enjoy it, but first....");
console.log(welcome)

let user = prompt("Please tell me your name?").toLowerCase();
console.log(user);

const greet = alert("OK, thanks " + user + " now you may enter...ENJOY!!!");
console.log(greet);

const intro = alert("Before you get started could you please try to answer a few questions about me first... please answer with `yes/no' or `y/n' only!   THANK YOOOOOOO.");
console.log(intro);



let qone = prompt("Can I make a Dolphin noise???").toLowerCase();
console.log(qone)

switch(qone){
    case "yes":
    case "y":
        console.log("That's correct, Well done!");
        break;
    case "no":
    case "n":    
        console.log("XXX - Wrong answer... please try again");
        break;
    default:
        console.log("no idea what you said!");

}

let qtwo = prompt("Do I enjoy surprises???").toLowerCase();
console.log(qtwo)

switch (qtwo){

    case "yes":
    case "y":
        console.log("ABSOLUTELY NOT, it's just not fun!!");
        break;
    case "no":
    case "n":
        console.log("Yep!  Totally right, surprises suck!");
        break;
    default:
        console.log("no idea what you said!");

}


let qthree = prompt("Do I speak more than 1 language?").toLowerCase();
console.log(qthree)


switch (qthree){
    case "yes":
    case "y":
        console.log("well done, now you're getting me!");
        break;
    case "no":
    case "n":
        console.log("Wronnnnggggggggg!");
        break;
    default:
        console.log("That's just noise!");

}


let qfour = prompt("Have I ever lived in another country???").toLowerCase();
console.log(qfour)

switch (qfour){
    case "yes":
    case "y":
        console.log("I would have loved to live or have lived in another, but alas, destiny had another path for me.");
        break;
    case "no":
    case "n":
        console.log("Yeah you're right, totally missed that boat!!");
        break;
    default:
        console.log("Boooooooooooooooooooooooo!");

}



let qfive = confirm("Have I ever been on a TV gameshow???").toLowerCase();
console.log(qfive)

switch (qfive){
    case "yes":
    case "y":
        console.log("Absolutely NOOOO way.... never in a million years... do you even know me???");
        break;
    case "no":
    case "n":
        console.log("Thaaaaaaat's right... and I never ever will!");
        break;
    default:
        console.log("You're just no fun!");

}


    
    
   





