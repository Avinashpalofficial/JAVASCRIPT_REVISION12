// object as singleton
const googleUser = new Object();

//  hum aise bhi declare kr skte hai// const googleUser = {}
googleUser.id = "abc34";
googleUser.name = "Avinash";
googleUser.isLoggedIn = false;

//   console.log(googleUser);

const regularGoogleUser = {
  fullName: {
    userFullname: {
      firstName: "Avinash",
      lastName: "Pal",
    },
  },
};

// console.log(regularGoogleUser.fullName.userFullname.lastName);
const key1 = { 1: "a", 2: "s" };
const key2 = { 3: "d", 4: "f" };

const key3 = Object.assign({}, key1, key2);

//   console.log(key3);

//  array of obj

const newobj = [
  {
    id: "abcid",
    email: "avin@gmail.com",
  },
  {
    firstName: "avinash",
    lastName: "Pal",
  },
];

//   console.log(newobj[0].email);
//   console.log(Object.keys(regularGoogleUser.fullName.userFullname));
//   console.log(Object.values(googleUser));

console.log(Object.entries(googleUser));

console.log(googleUser.hasOwnProperty("id"));
