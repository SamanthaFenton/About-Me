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
}

let qtwo = prompt("Do I enjoy surprises???").toLowerCase();
console.log(qtwo)

if (qtwo === "yes" || qtwo === "y") {
    console.log("ABSOLUTELY NOT, it's just not fun!!");
    alert("ABSOLUTELY NOT, it's just not fun!!");
} else if (qtwo === "no" || qtwo === "n") {
    console.log("Yep!  Totally right, surprises suck!");
    alert("Yep!  Totally right, surprises suck!");
}


let qthree = prompt("Do I speak more than 1 language?").toLowerCase();
console.log(qthree)

if (qthree === "yes" || qthree === "y") {
    console.log("well done, now you're getting me!");
    alert("well done, now you're getting me!");
} else if (qthree === "no" || qthree === "n") {
    console.log("Wronnnnggggggggg!");
    alert("Wronnnnggggggggg!");
}


let qfour = prompt("Have I ever lived in another country???").toLowerCase();
console.log(qfour)

if (qfour === "yes" || qfour === "y") {
    console.log("I would have loved to live or have lived in another, but alas, destiny had another path for me.");
    alert("I would have loved to live or have lived in another, but alas, destiny had another path for me.");
} else if (qfour === "no" || qfour === "n") {
    console.log("Yeah you're right, totally missed that boat!!");
    alert("Yeah you're right, totally missed that boat!!");
}


let qfive = confirm("Have I ever been on a TV gameshow???").toLowerCase();
console.log(qfive)

if (qfive === "yes" || qfive === "y") {
    console.log("Absolutely NOOOO way.... never in a million years... do you even know me???")
    alert("Absolutely NOOOO way.... never in a million years... do you even know me???");
} else if (qfive === "no" || qfive === "n") {
    console.log("Thaaaaaaat's right... and I never ever will!");
    alert("Thaaaaaaat's right... and I never ever will");
}




