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
////Bir diziyi başka bir diziye atarken, atanan diziye bir referans atarız.
////İki değişken bellekteki aynı nesneyi gösteriyor.
////Orijinal diziye geçerken, bu değişiklik diğer diziye de yansıtılır.
////Aşağıdaki kod, bunun nasıl çalıştığını gösterir:

//var nums = [];
//for (var i = 0; i < 10; ++i) {
//    nums[i] = i + 1;
//}
//var samenums = nums;
//nums[4] = 1978;

//Deep copy
//Sığ kopya dışında, yukarıdaki kodda yaptığımız şey, dizi nesnesinde derin kopyalar da yapabiliriz.
//Derin kopya, dizi öğelerinin iki ayrı bellek konumunda depolandığı ve iki dizi değişkeninin bellekte
//iki farklı adrese işaret ettiği anlamına gelir.
//Derin bir kopya yapmak için, orijinal dizinin öğelerinin her biri aslında yeni dizinin öğelerine kopyalanır.

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
