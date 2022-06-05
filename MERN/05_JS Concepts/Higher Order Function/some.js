//it check one or more value is true return all values which is true

const transactions = [1000, 2000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 74

let myDeposit = transactions.some(function(n){
    return n>0
})

console.log(myDeposit)