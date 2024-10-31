function myName(num1, num2) {
  //console.log(num1 + num2);
  return num1 + num2;
}
const X = myName(2, 3);

// console.log("x :", X);

function username(fullname){
       return `${fullname} is logged in our server`
}
// console.log(username("Avinash") );
//    if we don't give argumnet then undefined outcome

// function myDashboard(myCourse){
//    if (myCourse===undefined) {
//       console.log("please choose your course");
      
//       return;
//    }
//    return `${myCourse} is my course`
// }

//  console.log(myDashboard());
function myDashboard(myCourse){
   if (!myCourse) {
      console.log("please choose your course");
      
      return;
   }
   return `${myCourse} is my course`
}

 console.log(myDashboard("Avin"));
  