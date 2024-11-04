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
 // console.log(key);
  
  
}

const my_Oject= {
   Course : "btech",
   Enroll: "ys",
   isloggedin: "ys"
}

for (const key in my_Oject) {
      // console.log(`${key} => ${my_Oject[key]}`);    
}

const my_array = [1,2,3,4,5,6]
for (const key in my_array) {
     // console.log(`${key} => ${my_array[key]}`);
      
}

const val = new Map()
val.set('myCourse','javascript')
val.set('price',99)
val.set('platform','youtube')

for (const key in val) {
      // console.log(key);
       
}

// foreach 
const length =0
const my_List= ['js','rb','sw','cpp']
my_List.forEach(function(item){
       //   console.log(item);
          
})

my_List.forEach((val)=>{
       //console.log(val);
       
})

function name(params) {
 // console.log(params);
  
}
my_List.forEach(name)

const user =[
  {
    userName :'avin',
    lastName : 'pal'
  },
  {
    userName :'sam',
    lastName : 'singh'
  },
  {
    userName :'tom',
    lastName : 'kaur'
  }
]

function Name(item){
  console.log(item.userName);
  
}
user.forEach(Name)