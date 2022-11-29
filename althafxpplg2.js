    var input = require('readline-sync');
    var a = input.questionInt('Masukkan bilangan pertama : ');
    var b = input.questionInt('Masukkan bilangan kedua : ');
    var c = input.questionInt('Masukkan bilangan ketiga : ');

if (a > b && b > c){
        console.log("Bilangan terbesar adalah" , a , "dan bilangan terkecil adalah" , c);
    } else {
if (a > c && c > b){
    console.log("Bilangan terbesar adalah" , a , "dan bilangan terkecil adalah" , b);
    }
}
if (b > a && a > c){
        console.log("Bilangan terbesar adalah" , b , "dan bilangan terkecil adalah" , c);
    } else {
if (b > c && c > a){
    console.log("Bilangan terbesar adalah" , b , "dan bilangan terkecil adalah" , a);
    }
}
if (c > a && a > b){
        console.log("Bilangan terbesar adalah" , c , "dan bilangan terkecil adalah" , b);
    } else {
if (c > b && b > a){
    console.log("Bilangan terbesar adalah" , c , "dan bilangan terkecil adalah" , a);
    }
}

var total = a + b + c;
var rtrt = total / 3;
console.log("Nilai rata rata-nya adalah" , rtrt);