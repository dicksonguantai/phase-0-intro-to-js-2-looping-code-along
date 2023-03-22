// Code your solutions in this file
for(let age= 30;age<40;age++){
    console.log(`I'm ${age} years old.Happy birthday to me!`);
}

const gifts =["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
for(i=0;i<gifts.length;i++) {
console.log(`Wrapped ${gifts[i]} and added a bowl!`);
debugger;

}
}
wrapGifts(gifts);


function writeCards(names,event){

    for(i = 0;i< names.length;i++){

        console.log(`Thank you ${names[i]}, for the wonderful ${event} gift`);
    }
}
writeCards(["Ada", "Brendan", "Ali"],"birthday");

function countDown(number){

    for(i = parseInt(number);i>=0; i--){//takes a number and checks if equal to zero or greater and decrements
        console.log(i);// print the current number

    }
}
countDown(21);