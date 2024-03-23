//this keyword
let student={
    name:"namrata",
    age:21,
    eng:95,
    math:92,
    phy:96,
   getAvg(){
    console.log(this)
    let avg= (this.eng+this.math+this.phy)/3
    console.log(student.getAvg)
   } 
}
console.log(student)

//try and catch
console.log("hello")

try{
    console.log(a)
} catch{
    console.log("caught an eeror")  
}
console.log("hello")
console.log("hello")
console.log("hello")


//miscellanneous funtion
//arrow function
// let add=(a,b)=>{
//     console.log(a+b)
// }
// console.log(sum(2,3))

// let cube=(n)=>{
//     console.log(n*n*n)
// }


//implicit return
// const mul=(a,b)=>(
//     a*b
// )
// console.log(mul(3,4))

//set timeout
console.log("hi there!!!")

// setTimeout( ()=>{
//     console.log("apna college")
// },4000)
// console.log("welcome to")

//set interval
setInterval( ()=>{
    console.log("apna college")
},2000)

