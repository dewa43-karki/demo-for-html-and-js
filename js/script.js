//1st Variables and Datatype
const profile = {
    username: "dewakarki",
    isfollow: true,
    post: 0,
    followers: 85,
    following: 49,
    bio: "My eyess!!! My eyes!!!",
};
console.log(profile["bio"]);


//2nd Operators and Conditional sentences
const product = {
    title: "Pen",
    rating: 4,
    offer: 5,
    price: 50,
};
console.log(product);


//3rd
let a=8;
if (a%4 == 0){
    console.log(a, "is a multiple of 4.");
}
else {
    console.log(a, "is not a multiple of 4.");
}


//4th
let score=prompt("Enter your score: ");
if (score>=90 && score<=100) {
    console.log("A");
}
else if (score>=70 && score<=89) {
    console.log("B");
}
else if (score>=60 && score<=69) {
    console.log("C");
}
else if (score>=50 && score<=59) {
    console.log("D");
}
else{
    console.log("F");
}


//5th Loops and Strings
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("num", i);
    }
}

let num = 43;
let usernum = parseInt(prompt("Guess the number that you think the Dewa selected:"));
while( usernum !== num) {
    usernum = parseInt(prompt("Take another guess:"));
}

console.log("Well you did it");


//strings
let name= prompt(" Enter your name:");
let username= "@" + name + name.length;
console.log("Your username is", username);


//arrays
let marks= [85, 97, 44, 37, 76, 60];
let sum=0;
for( i=0; i<marks.length; i++) {
    sum += marks[i];
}
let average= sum / marks.length;
console.log("The average marks of the class is", average);

// or
// for (let val of marks){
//     sum += val;
// }
// .......
// console.log(`avg marks of the class = ${avg}`);

let prices = [250, 645, 300, 900, 50];
let finalprices;
for ( i=0; i<prices.length; i++ ){
    finalprices= prices[i] - (1/10 * prices[i]);    // prices[i]/10; and then prices[i] -= finalprices; 
    console.log(finalprices);
}

let company = ["Bloomberg", "Microsoft", "Google", "IBM", "Netflix", "Brave"];
// company.shift();
// company.splice(4,1, "PrimeVideos");
company.push("Amazon");
