//1st
const profile = {
    username: "dewakarki",
    isfollow: true,
    post: 0,
    followers: 85,
    following: 49,
    bio: "My eyess!!! My eyes!!!",
};
console.log(profile["bio"]);


//2nd 
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