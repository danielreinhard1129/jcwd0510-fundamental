// // PROMISE & ASYNC AWAIT

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve("Data berhasil diambil");
//       } else {
//         reject("Terjadi kesalahan!");
//       }
//     }, 500);
//   });
// }

// // promise / tanpa async await
// fetchData()
//   .then((data) => {
//     console.log(data);
//     return "asdasda";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // menggunakan async await
// const getData = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();

// // async function getData2() {}

// // tanpa async await
// const fetchData2 = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// fetchData2();

// // menggunakan async await
// const fetchData3 = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     throw "ini Errorkuuuu"; // create error
//     // throw new Error("ini error buatanku"); // create error
//     console.log(users);
//     return users;
//   } catch (error) {
//     // if (error instanceof Error) {
//     //   console.log(error.stack);
//     // }
//     console.log(error);
//   }
// };

// fetchData3();

// JSON -> javascript object notation
const user = {
  name: "budi",
  age: 40,
};

const userJSON = JSON.stringify(user); // js object to JSON

console.log(userJSON);

const parseJSON = JSON.parse(userJSON); // JSON to js object

console.log(parseJSON);

// Modules
import { myFunc, name } from "./test";

myFunc();

console.log(name);

// HOISTING -> var & func declaration

// func expression
// testFuncExpression(); // gak bakalan bisa di panggil sebelum penulisan function
const testFuncExpression = () => {};

// func declaration
testFuncDelaration(); // ini bisa di panggil sebelum penulisan function
function testFuncDelaration() {}
