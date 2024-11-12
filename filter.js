const my_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = my_num.filter((num) => {
  return num > 5;
});
console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//const myBooks= books.filter((item)=> item.genre === 'Science')

//console.log(myBooks);
const myBooks = books.filter((item) => item.publish > 1999);
//    console.log(myBooks);

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArray = myArray.map((item) => item);
// console.log(newArray);

newArray = myArray
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item >= 41);

//   console.log(newArray);

const userCourse = [
  {
    course: "js",
    price: 1999,
  },
  {
    course: "js",
    price: 999,
  },
  {
    course: "js",
    price: 19999,
  },
];
let totalPrice = 0;
userCourse.forEach((item) => {
       totalPrice+=item.price 
}); 
   
//console.log(totalPrice);

//reduce mathod

 const TotalPrice=  userCourse.reduce( function (acc,curval){
                 return acc+curval
 },0)

 console.log(TotalPrice);
 