//1. Write a code to find area of rectangle
// rumus luas persegi adalah P * L
// buat 3 variabel untuk menyimpan nilai panjang, lebar, dan hasil
const rectLength : number = 5;
const rectWidth : number = 3;
let resultA : number;
resultA = rectLength * rectWidth;
console.log(resultA);

//2. write a code to find perimeter of rectangle
// rumus keliling persegi adalah 2 * (P + L)
// jumlahkan variabel panjang dan lebar terlebih dahulu ke dalam sebuah variabel
// kalikan variabel tersebut dengan 2
let resultB : number;
let jmlhPL : number = (rectLength + rectWidth) * 2;
console.log(jmlhPL);

//3. write a code to find diameter, circumference and area of a circle
// buat variabel untuk menyimpan nilai jari-jari dan pi
const radius : number = 5

// Diameter
// rumus diameter lingkaran adalah 2 * r
let circleDiameter : number = radius * 2;
console.log(circleDiameter);

// Circumference
// rumus keliling lingkaran adalah 2 * pi * r
let circleCircumference : number = Math.PI * circleDiameter;
console.log(circleCircumference);

// Area
// rumus luas lingkaran adalah pi * r^2
// simpan nilai r^2 ke dalam variabel baru kemudian dikalikan dengan pi
let circleArea : number = Math.PI * Math.pow(radius, 2);
console.log(circleArea);

//4. Write a code to find  angles of triangle if two angles are given
const angleA : number = 80;
const angleB : number = 65;
const triangle : number = 180;

// semua sudut segitiga jika dijumlahkan ==> 180
// dari sini kita bisa mengurangi nilai tersebut dengan nilai sudut yang sudah ada
let angleC : number = triangle - angleA - angleB;
console.log(angleC);

//5. write a code to convert days to years, months and days
//buat variabel untuk menyimpan inputan jumlah hari
const inputDays : number = 700;
// bagikan nilai input dengan 365 untuk mendapatkan jumlah hari
let years : number = Math.floor(inputDays / 365);
// cari remainder inputan hari dengan 365 lalu dibagikan 30 untuk mendapatkan jumlah bulan
let months : number = Math.floor(inputDays % 365 / 30);
// cari remainder dari input hari, 365 dan 30 untuk mendapatkan jumlah hari
let days : number = Math.floor(inputDays % 365 % 30);

console.log(`${years} years, ${months} months, ${days} days`);

//6. write a code to get difference between dates in days
let date1 : Date = new Date('2022-09-05');
let date2 : Date = new Date('2022-09-01');
let diff : number = date2.getTime() - date1.getTime();
let dayDiff : number = diff / (1000 * 3600 * 24);
console.log(Math.abs(dayDiff));
