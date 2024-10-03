// IF STATEMENT
// syntax
// if(condition){
//  code block
//}

const age: number = 20;

// kondisi harus boolean (true / false)
if (age >= 17) {
  console.log("Anda bisa buat KTP");
}

// ====================== ELSE STATEMENT
// backup plan dari if statement

const age1: number = 10;
if (age1 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

// ====================== ELSE IF STATEMENT

const input: string = "A";
const grade: string = input.toLowerCase();

if (grade === "a") {
  console.log("nilai bagus");
} else if (grade === "b") {
  console.log("nilai lumayan");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

// ===================== SWITCH CASE
const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  default:
    console.log("Hari tidak ditemukan");
    break;
}

// ===================== LOGICAL OPERATOR
// && -> and
// || -> or
// ! -> not

// OR -> kalau salah 1 ada yg nilai true akan menghasilkan nilai true
const car: string = "mercy";
//    false              true            -> true
if (car === "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// AND -> harus keduanya bernilai true agar menghasilkan nilai true
const umur: number = 19;
const punyaSIM: boolean = true;
//     true              true            -> true
if (umur >= 18 && punyaSIM === true) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// =============== TERNARY OPERATOR
// shortcut untuk if else condition
// condition ? true : false

const str: string = "typescript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

// =========================== LOOP STATEMENT (perulangan)
// rangkaian instruksi yang dilakukan berulangkali hingga kondisinya
// tidak terpenuhi

// type loop : for loop, while loop, dan do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi diakhir setiap iterasi

// syntax : for(statement1;statement2;statement3){
// code block yang akan diulang-ulang
//}

for (let i = 0; i < 6; i++) {
  console.log("hello world");
}

// WHILE LOOP

let i: number = 11;

while (i < 10) {
  console.log("hello world");
  i++;
}

// DO WHILE LOOP

let count: number = 1;

do {
  console.log("ini iterasi ke: " + count);
  count++;
} while (count <= 5);

// ====================== BREAK
// untuk menghentikan loop

let sum: number = 0;
while (true) {
  console.log("sum : " + sum);

  if (sum >= 5) break;

  sum++;
}

// ===================== CONTINUE
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;

  console.log(i);
}
