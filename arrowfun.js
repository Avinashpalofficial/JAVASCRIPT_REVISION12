const myList = {
  myName: "Avinash",
  lastName: "Pal",

  userBank: function () {
    //  console.log(this.lastName);
    // console.log(this);
  },
};
myList.userBank();
Object.freeze(myList);
myList.myName = "dam";
myList.lastName = "singh";
myList.userBank();

// console.log(this);

// function form(){
//      const name = "avinash"
//      console.log(name);
//      console.log(this.name);
// }
// form()
function coffee() {
  const name = "avinash";
  //  console.log(name);
  //  console.log(this);
  //  console.log(this.name);
}
coffee();
const one = function () {
  const name = "avinash";
  // console.log(name);
  // console.log(this.name);
};

one();

const toffee = () => {
  const name = "avinash";
  //  console.log(name);
  //  console.log(this);
  //  console.log(this.name);
};
toffee();
// const mySystem = (num1,num2)=>{
//       return num1+num2
// }
// console.log(mySystem(2,3));

// const mySystem = (num1,num2)=>  (num1+num2)
const mySystem = (num1, num2) => ({ userName: "avin" });

console.log(mySystem());
