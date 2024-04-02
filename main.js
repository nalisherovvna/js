// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// let a = 5; 
// let b = 2;
// let c;
// c = a % b;
// alert(c);


// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// const randomNumber = Math.floor(Math.random() * 10) + 1;
// alert(randomNumber);


// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!


// let a = 12.510;
// let b = Math.round(12,510);
// alert(b);


// 4-savol function

// "" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.


// function myFunction() {
//         var nasiba = "Nasiba Alisherova";
//         var alisherova = nasiba.replace(/\s/g, '').length;
//         alert("Nasiba Alisherova so'zi " + alisherova + " harfdan iborat.");
//       }

//       myFunction();


// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// for (let i = 0; i < 10; i++) {
//     console.log("MARS IT SCHOOL");
// }


// 6-savol Array methods    

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ];

// console.log(harflar[12]);
// console.log(harflar[0]);
// console.log(harflar[17]);
// console.log(harflar[7]);
// console.log(harflar[1]);
// console.log(harflar[0]);



// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak// let age = prompt("Yoshingizni kiriting");


// if (age > 18) {
//     alert("Siz balag'ot yoshiga yetgansiz");
// } else if (age >= 18) {
//     alert("Balog'at yoshi muborak");
// }



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// var name = prompt("Ismingizni kiriting");
// var reverseName = name.split('').reverse().join('');

// console.log(reverseName);


// var name = prompt("Ismingizni kiriting");
// var reverseName = name.split('').reverse().join('');

// console.log(reverseName);



// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// let array = [ 2, 4, 6, 8, 10];

// for (let i = 0; i < array.length; i++) {
//     let check = array[i] % 2;
//     if (check === 0) {
//         console.log((array[i]));
//     }else{
//         console.log("Bu juft son" + array[i]);
//     }
// }