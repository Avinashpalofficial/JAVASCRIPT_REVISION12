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

  console.log(`the value of ${index}`);
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
   console.log(`value: ${index}`);
   index++
}