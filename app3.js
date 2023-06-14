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

if (qone === "yes" || qone === "y") {
    console.log("That's correct, Well done!");
    alert("That's correct, Well done!");
} else if (qone === "no" || qone === "n") {
    console.log("XXX - Wrong answer...");
    alert("XXX - Wrong answer...");
}else{
    console.log("no idea what you said!");
    alert("no idea what you said!");
}

let qtwo = prompt("Do I enjoy surprises???").toLowerCase();
console.log(qtwo)

if (qtwo === "yes" || qtwo === "y") {
    console.log("ABSOLUTELY NOT, it's just not fun!!");
    alert("ABSOLUTELY NOT, it's just not fun!!");
} else if (qtwo === "no" || qtwo === "n") {
    console.log("Yep!  Totally right, surprises suck!");
    alert("Yep!  Totally right, surprises suck!");
} else{
    console.log("no idea what you said!"); 
    alert("no idea what you said!");
}


let qthree = prompt("Do I speak more than 1 language?").toLowerCase();
console.log(qthree)

if (qthree === "yes" || qthree === "y") {
    console.log("well done, now you're getting me!");
    alert("well done, now you're getting me!");
} else if (qthree === "no" || qthree === "n") {
    console.log("Wronnnnggggggggg!");
    alert("Wronnnnggggggggg!");
} else{
    console.log("no idea what you said!"); 
    alert("no idea what you said!");
}



let qfour = prompt("Have I ever lived in another country???").toLowerCase();
console.log(qfour)

if (qfour === "yes" || qfour === "y") {
    console.log("I would have loved to live or have lived in another, but alas, destiny had another path for me.");
    alert("I would have loved to live or have lived in another, but alas, destiny had another path for me.");
} else if (qfour === "no" || qfour === "n") {
    console.log("Yeah you're right, totally missed that boat!!");
    alert("Yeah you're right, totally missed that boat!!");
} else{
    console.log("no idea what you said!"); 
    alert("no idea what you said!");
}


let qfive = prompt("Have I ever been on a TV gameshow???").toLowerCase();
console.log(qfive)

if (qfive === "yes" || qfive === "y") {
    console.log("Absolutely NOOOO way.... never in a million years... do you even know me???")
    alert("Absolutely NOOOO way.... never in a million years... do you even know me???");
} else if (qfive === "no" || qfive === "n") {
    console.log("Thaaaaaaat's right... and I never ever will!");
    alert("Thaaaaaaat's right... and I never ever will");
} else{
    console.log("no idea what you said!"); 
    alert("no idea what you said!");
}





//Class 03 LabWork





const game = alert("Well done!!!  You've made it this far.... only two more questions to go!");
console.log(game);

//while ((qsix < "42")||(qsix > "42")){
 //   qsix="Please try again" +

 //I think the following question needs a while loop but I can't get my head around implementing it in the code.

 const loop = 4;
 console.log("4");
 for(let qsix = 42; qsix < loop; i++){
    console.log("looplog");
 }

let qsix = prompt("I am thinking of a number between 1-50.... what is it???  You have 4 attempts to get it right and I ask you enter numerically!");
console.log(qsix);

if (qsix == "42"){
    console.log("YAYAYAYA! What a great Number... you must be psychic!");
    alert("YAYAYAYA! What a great Number... you must be psychic!");
}else if (qsix < "42"){
    console.log("Sorry, too low!  Please try again.");
    alert("Sorry, too low!  Please try again.");
}else if (qsix > "42"){
    console.log("Sorry, too high! Please try again.");
    alert("Sorry, too high! Please try again.")

}

qsix = prompt("I am thinking of a number between 1-50.... what is it???  You have 3 attempts to get it right and I ask you enter numerically!");
console.log(qsix);

if (qsix == "42") {
    console.log("YAYAYAYA! What a great Number... you must be psychic!");
    alert("YAYAYAYA! What a great Number... you must be psychic!");
} else if (qsix < "42") {
    console.log("Sorry, too low!  Please try again.");
    alert("Sorry, too low!  Please try again.");
} else if (qsix > "42") {
    console.log("Sorry, too high! Please try again.");
    alert("Sorry, too high! Please try again.")

}

qsix = prompt("I am thinking of a number between 1-50.... what is it???  You have 2 attempts to get it right and I ask you enter numerically!");
console.log(qsix);

if (qsix == "42") {
    console.log("YAYAYAYA! What a great Number... you must be psychic!");
    alert("YAYAYAYA! What a great Number... you must be psychic!");
} else if (qsix < "42") {
    console.log("Sorry, too low!  Please try again.");
    alert("Sorry, too low!  Please try again.");
} else if (qsix > "42") {
    console.log("Sorry, too high! Please try again.");
    alert("Sorry, too high! Please try again.")

}

qsix = prompt("I am thinking of a number between 1-50.... what is it???  You have 1 attempt to get it right and I ask you enter numerically!");
console.log(qsix);

if (qsix == "42") {
    console.log("YAYAYAYA! What a great Number... you must be psychic!");
    alert("YAYAYAYA! What a great Number... you must be psychic!");
} else if (qsix < "42") {
    console.log("Sorry, too low!  Please try again.");
    alert("Sorry, too low!  Please try again.");
} else if (qsix > "42") {
    console.log("Sorry, too high! Please try again.");
    alert("Sorry, too high! Please try again.")

}


let qseven = prompt("You have 6 attempts to guess my favourite foods, can you guess them all???").toLowerCase();
console.log("qseven");

const favFoods = ["pain aux chocolate", "salad", "seafood", "thai", "sushi", "steak", "ice cream", "sarmale", "fruit"];
console.log(favFoods);

if (qseven == favFoods){
    console.log("Yummy! Can you guess any more???");
    alert("Yummy!  Can you guess any more???");
}else if (qseven !== favFoods){
    console.log("Sorry that didn't make the shortlist, try again...");
    alert("Sorry that didn't make the shortlist, try again...");

}

qseven = prompt("You have 5 attempts to guess my favourite foods, can you guess them all???").toLowerCase();
console.log("qseven");

if (qseven == favFoods) {
    console.log("Yummy! Can you guess any more???");
    alert("Yummy!  Can you guess any more???");
} else if (qseven !== favFoods) {
    console.log("Sorry that didn't make the shortlist, try again...");
    alert("Sorry that didn't make the shortlist, try again...");

}

qseven = prompt("You have 4 attempts to guess my favourite foods, can you guess them all???").toLowerCase();
console.log("qseven");

if (qseven == favFoods) {
    console.log("Yummy! Can you guess any more???");
    alert("Yummy!  Can you guess any more???");
} else if (qseven !== favFoods) {
    console.log("Sorry that didn't make the shortlist, try again...");
    alert("Sorry that didn't make the shortlist, try again...");

}

qseven = prompt("You have 3 attempts to guess my favourite foods, can you guess them all???").toLowerCase();
console.log("qseven");

if (qseven == favFoods) {
    console.log("Yummy! Can you guess any more???");
    alert("Yummy!  Can you guess any more???");
} else if (qseven !== favFoods) {
    console.log("Sorry that didn't make the shortlist, try again...");
    alert("Sorry that didn't make the shortlist, try again...");

}

qseven = prompt("You have 2 attempts to guess my favourite foods, can you guess them all???").toLowerCase();
console.log("qseven");

if (qseven == favFoods) {
    console.log("Yummy! Can you guess any more???");
    alert("Yummy!  Can you guess any more???");
} else if (qseven !== favFoods) {
    console.log("Sorry that didn't make the shortlist, try again...");
    alert("Sorry that didn't make the shortlist, try again...");

}

qseven = prompt("You have 1 attempt to guess my favourite foods, can you guess them all???").toLowerCase();
console.log("qseven");

if (qseven == favFoods) {
    console.log("Yummy! Can you guess any more???");
    alert("Yummy!  Can you guess any more???");
} else if (qseven !== favFoods) {
    console.log("Sorry that didn't make the shortlist, try again...");
    alert("Sorry that didn't make the shortlist, try again...");

}
//I know I need to run a (for) loop.  I think this one is a for loop but I can't get my head around how to do it for this.









