// var myArray = [];
// var index;
// for (let index = 0; index <= 100; index++) {
//     console.log( myArray+ index);
    
// }
// console.log(myArray + index);

// function min (a, b) {
//     if (a < b){
//         return a
//     }else if (a > b){
//         return b
//     }
// }
// console.log(min(2,5));

// for (let i = 1; i < 100; i++){
//     if (i/ 3===5 && i/ 5===3){console.log ('fizzbuzz')
//     }else if (i / 5 === 3){
//         console.log ('buzz')
//     }else if (i / 3 === 5){
//         console.log('fizz')
//     }else {
//         console.log(i)
//     }}

 function evenlySpaced (a, b, c) {
     let num = [a, b, c];
     sortNum = num.sort( (b,a)=> b -a );
     a = sortNum [0]
     b = sortNum [1]
     c = sortNum [2]
     let avg = (a+c)/2
     return avg === b 
 }
 console.log (evenlySpaced(2,5,8))
 console.log(evenlySpaced(3,6,9))
 console.log (evenlySpaced(9,6,3))
 console.log (evenlySpaced(6, 12, 8))