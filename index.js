// Code Along
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// Code your solutions in this file

function writeCards(name,event){
    let thankYou = [];

    for (let i=0; i < name.length; i++)
    {thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);}
    return thankYou;
}

function countDown(){
    let countDown = 10;
    while (countDown > -1 ) {
      console.log(countDown--);
      debugger;
    }
  }
  
  countDown(10);