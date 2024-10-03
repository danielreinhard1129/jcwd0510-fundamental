// No 1
// const lebar: number = 5;
// const panjang: number = 3;
// const area: number = lebar * panjang;

// console.log(area);

// No 2
// const lebar: number = 5;
// const panjang: number = 3;
// const perimeter = 2 * (panjang + lebar);

// console.log(perimeter);

// No 3
// const radius: number = 14;
// const diameter: number = 2 * radius;
// const circumference: number = 2 * 3.14;
// const area: number = 3.14 * radius * radius;

// console.log(
//   `diameter: ${diameter}, circumference: ${circumference}, area : ${area}`
// );

// No 4
// const a: number = 80;
// const b: number = 65;
// const c: number = 180 - (a + b);

// console.log(`c : ${c}`);

// No 5
const hari: number = 400;
const tahun: number = Math.floor(hari / 365);
const bulan: number = Math.floor((hari % 365) / 30);
const tanggal: number = Math.floor((hari % 365) % 30);

console.log(`${tahun} tahun, ${bulan} bulan, hari ${tanggal}`);

// No 6
const date1: Date = new Date("2024-01-01");
const date2: Date = new Date("2024-10-10");
const bedaTanggal: number = Math.abs(date1.getTime() - date2.getTime());
const bedaHari: number = bedaTanggal / (1000 * 3600 * 24);

console.log(`perbedaan hari dari tanggal pertama dan kedua : ${bedaHari}`);
