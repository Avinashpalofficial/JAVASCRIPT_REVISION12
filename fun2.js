function calAmazonCart(...val1) {
  // spreadoperator (...)
  return val1;
}
//console.log(calAmazonCart(1,2,3,4,5));

const user = {
  username: "Avinash",
  coursePrice: 149,
};

function myCourse(anyUser) {
  return `hello my name is ${anyUser.username} and price is ${anyUser.coursePrice}`;
}
//  console.log(myCourse(user));

// console.log(myCourse({

//         username:"Rahul",
//         coursePrice:199

//     }
//    ))
//    arrays pass in function

const myName = ["avin", "rahul", "dam", "sam"];

function my_name(anyArray) {
  return anyArray[1];
}

//  console.log(my_name(myName[1]));
console.log(my_name([1, 2, 3, 4]));
