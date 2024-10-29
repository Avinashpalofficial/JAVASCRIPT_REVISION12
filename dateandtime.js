const myDate = new  Date()
// console.log(myDate);
 
//console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);
// console.log(myDate.toLocaleString());
 
let myCreateDate = new Date("10-29-2024")

// console.log(myCreateDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp)

// console.log(Math.floor(myTimestamp/1000));

const newDate = new Date()

// console.log(newDate.getDate());
// console.log(newDate.getHours());

console.log(newDate.toLocaleString('default',{
    day: "numeric",
    hour: "numeric"
})
);
