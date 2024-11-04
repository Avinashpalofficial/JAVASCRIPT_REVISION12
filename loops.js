for (let i = 0; i < 12; i++) {
  const element = i;
  //
  // console.log(element);
}

for (let i = 0; i <= 5; i++) {
  const element = i;
  // console.log(`The value is ${element}`);

  for (let j = 0; j <= 5; j++) {
    // console.log(i + "*" + j + "=" + i * j);
  }
}

//break and continue

for (let index = 0; index <= 10; index++) {
  if (index == 5) {
  //  console.log("dectected 5");
    break;
  }

 // console.log(`the value of ${index}`);
}
for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    //console.log("dectected 5");
    continue;
  }

  // console.log(`the value of ${index}`);
}
  let index =0
while(index<10){
  // console.log(`value: ${index}`);
   index++
}
     
 const Mylist= ["avin","raj","sam", ["rahul","komal"]]

for (const element of Mylist) {
  //console.log(element[1]);
  
}

const map = new Map()
map.set("name","avin")
map.set("age", 20)
map.set("course","btech")

// console.log(map);
for (const element of map) {
 // console.log(element);
  
}

for (const [key,value] of map) {
  // console.log(key ,"=>" ,value);
  console.log(key);
  
  
}