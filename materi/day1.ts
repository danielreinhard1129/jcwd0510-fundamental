// versi JS
// const message = "Hello World";

// versi TS
const message: string = "Hello World";

// ================ String build in method

const nama: string = "Siti Khodijah";
const nama2: string = " Metal";
const nama3: string = " Banget";

console.log(nama.toLowerCase()); // cara langsung
console.log(nama.toUpperCase());
console.log(nama.replace("S", "o"));
console.log(nama.replaceAll("i", "o"));
console.log(nama.split(" "));
console.log(nama.concat(nama2).concat(nama3));
console.log(nama.slice());

const nama1: string = nama.toLowerCase();
console.log(nama.slice(1, 3)); // cara di tampung dulu di variable

// ============ TEMPLATE LITERALS / TEMPLATE STRING

const nama4: string = "Jack";
const message1: string = `Welcome ${nama4}`;

console.log(message1);
console.log("Welcome" + " " + nama4); // cara manual

// ============= NUMBER BUILD IN METHOD
const angka: string = "2000";
console.log(typeof Number(angka));
console.log(typeof angka);
console.log(typeof parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ============= TYPE CONVERSION

// String conversion
const angka1: number = 20;
console.log(String(123));
console.log(angka1.toString());

// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

// ==================== Date data types
const now: Date = new Date();

console.log(now);

// get method
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getTime());

// set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now);

// ==================== BASIC OPERATOR
// + -> pertambahan
// - -> pengurangan
// * -> perkalian
// / -> pembagian
// % -> modulo sisa bagi
// ** -> pangkat

const a = 20;
const b = 10;
const c = a + b;
console.log(c);

console.log(1 + 1); // pertambahan
console.log(2 - 1); // pengurangan
console.log(2 * 4); // perkalian
console.log(4 / 2); // pembagian
console.log(9 % 2); // sisa bagi
console.log(3 ** 2); // pangkat

// ======================= MODIFY IN PLACE
// n = n + 2

let n: number = 4;
n += 2; // -> shortcut
// n = n + 2 // -> cara panjang

console.log(n);

// ======================== INCREMENT & DECREMENT
let counter: number = 2;

// counter++; // increment
counter--; // decrement

console.log(counter);

// ======================= POSTFIX & PREFIX

let counter2: number = 2;

// console.log(++counter2); // prefix
console.log(counter2++); // postfix

// ======================== COMPARISON OPERATOR

// console.log(5 == "5"); // pengecekan di valuenya saja
// console.log(5 === "5"); // pengecekan di value dan tipe data

console.log(5 > 2);
console.log(5 < 2);
console.log(5 <= 5);
console.log(5 < 5);

// ======================= MATH

// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

// Math floor -> mmebulatkan angka ke bawah
console.log(Math.floor(4.7));

// Math round -> membulatkan angka ke bilangan bulat yang terdekat
console.log(Math.round(4.3));
console.log(Math.round(4.6));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 2, 3, 4, 5, 6));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(2, 3, 4, 1, 5, 6));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-11));

// Math random -> menghasilan angka acak antara 0 dan 1
console.log(Math.random());
