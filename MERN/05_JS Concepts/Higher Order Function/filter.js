//Filter------>
// It returns a new array containing array elements that matches a specified condition
//if the condition stands true it will filter out those elements and will present them in a new Array


// let arr = [2, 4, 5, 6, 7,8,9,10]
//         // let evenOdd = arr.map(function(n){
//         //     if(n%2==0){
//         //         console.log('even')
//         //     }
//         //     else{
//         //         console.log('odd')
//         //     }
//         // })

// let evenOrOdd = arr.filter(function(n){
//     return n%2==0
// })
// console.log(evenOrOdd)



const transactions = [1000, 2000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 74
let inrToUsd = transactions.filter(function(n){
    return n>0
})
console.log(inrToUsd)