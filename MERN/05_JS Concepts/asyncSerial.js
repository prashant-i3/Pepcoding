const fs = require('fs')

// const { findSeries } = require("async")

// console.log('Before')

// let data1 = fs.readFileSync('f1.txt')
// let data2 = fs.readFileSync('f2.txt')
// let data3 = fs.readFileSync('f3.txt')

// console.log('This is file Data of file 1' + data1)
// console.log('This is file Data of file 2' + data2)
// console.log('This is file Data of file 3' + data3)

console.log('Before')

fs.readFile('f1.txt', cb)

function cb(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log('This is file data->  ' +data)
    }
    fs.readFile('f2.txt', cb2)
}



function cb2(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log('This is file data->  ' +data)
    }
    fs.readFile('f3.txt', cb3)
}




function cb3(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log('This is file data->  ' +data)
    }
}



console.log('After')