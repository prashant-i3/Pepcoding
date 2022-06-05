// //

// let arr = [1,2,3,4,5]

// //map method
// let squaredArr = arr.map(function(n){
//     return n*n
// })

// console.log(squaredArr)


// //split()
// let nameArr = ['Aniket Raj', 'Nayan Jha', 'Prashant Pandey']

// //use map method and seperate every element according to firstName and secondName
// let modifiedArr = nameArr.map(function(n){
//     let partsOfName = n.split(' ')
//     return partsOfName
// })

// console.log(modifiedArr)







const transactions = [1000, 2000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 74
let inrToUsd = transactions.map(function(n){
    return (n/74).toFixed(3) //toFixed:- number of decimal digit
})
console.log(inrToUsd)