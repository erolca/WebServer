//var numbers = new Array(10);
//console.log(numbers.length); 

//var numbers = 3;
//var arr = [711, 411, 1776];
//console.log(Array.isArray(numbers));
//console.log(Array.isArray(arr));

//var numbers = [1, 2, 3, 5, 8, 13, 21];
//var sum = 0;
//for (var i = 0; i < numbers.length; ++i) {
//    sum += numbers[i];
//}
//console.log(sum); 
////putput :53



//Creating Arrays from Strings
var sentence = "This is a test";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
    console.log("word " + i + ": " + words[i]);
} 


////Array Assignment
////Bir diziyi ba�ka bir diziye atarken, atanan diziye bir referans atar�z.
////�ki de�i�ken bellekteki ayn� nesneyi g�steriyor.
////Orijinal diziye ge�erken, bu de�i�iklik di�er diziye de yans�t�l�r.
////A�a��daki kod, bunun nas�l �al��t���n� g�sterir:

//var nums = [];
//for (var i = 0; i < 10; ++i) {
//    nums[i] = i + 1;
//}
//var samenums = nums;
//nums[4] = 1978;

//Deep copy
//S�� kopya d���nda, yukar�daki kodda yapt���m�z �ey, dizi nesnesinde derin kopyalar da yapabiliriz.
//Derin kopya, dizi ��elerinin iki ayr� bellek konumunda depoland��� ve iki dizi de�i�keninin bellekte
//iki farkl� adrese i�aret etti�i anlam�na gelir.
//Derin bir kopya yapmak i�in, orijinal dizinin ��elerinin her biri asl�nda yeni dizinin ��elerine kopyalan�r.

function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}


var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}

var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]); 


console.log("");
