const gameName = new String("Avi-nash")
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));


console.log(gameName.substring(0,4));
console.log(gameName.slice(-8,4));

const newString = "  avinash@avin@1234   "
console.log(newString);
console.log(newString.trim());

const url =" https://www.youtube.com/watch?v=20%sscX432bMZo&t=6144s"
console.log(url);
console.log(url.trim());
console.log(url.replace('20%','_'));

console.log(newString.split('@'));
console.log(gameName.split('-'));

console.log(`hello ${"avinash"} , how are you ,my name is ${"Rahul"}`);  









