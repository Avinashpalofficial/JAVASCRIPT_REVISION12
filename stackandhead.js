let myNameis = "Avinash"
let myAnotherNameIs = myNameis
myAnotherNameIs = "visnu"

console.log(myNameis);
console.log(myAnotherNameIs);

 //Heap Concept

 let Userone = {
    emailId: "avin@1234",
    upiId: "8081792148@phone"
 }
 
 let userTwo = Userone
  userTwo.emailId = "visnu@1234"
  userTwo.upiId = "231324556@phone"

 console.log(Userone);
 console.log(userTwo);
 
 