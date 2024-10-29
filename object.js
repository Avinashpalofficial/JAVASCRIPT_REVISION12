// object literals
const myName = Symbol("avin")
const myList = {
    Name : "AVINASH",
    AGE: "20",
    EMAIL : "AVIN@GMAIL.COM",
    COUNTRY: "INDIA",
   [ myName]: "avin",
    "STATE is": "HARYANA"
}

// console.log(myList.COUNTRY); // not always true
// console.log(myList["COUNTRY"]);//  always prefer this

// console.log(myList["STATE is"]);

// console.log(myList[myName]);
// console.log(myList);

//  myList.EMAIL = "AVIN@GMAIL.COM"
 myList.EMAIL = "AVIN@GMAIL.COM"

//  Object.freeze(myList) 

// myList.EMAIL = "rat@gmail.com"

// console.log(myList.EMAIL);

myList.customer_ = function(){
    console.log("hello ,Rahul");
    
}
myList.customer_1 = function(){
    console.log(`hello  ${this.Name}`);
    
}
// console.log(myList.customer_());

// console.log(myList.customer_1());


console.log(myList);







