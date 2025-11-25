//const getString=arr=>arr.filter(ele=>typeof ele=='string')

//console.log(getString(['dct','secret','home',123]))
 /*number=[10,20,30,40]
const result=number.reduce((acc,cv)=>{
    return acc+cv;

}, 0);
console.log(result) */
/*function SumAscii(arr){
    const result= arr.reduce((acc,cv)=>{
        return acc+(cv.charCodeAt());       
    }, 0);
    return result
}
console.log(SumAscii(['a','n','l'])); */
/*const numbers=[10,11,12,13,140];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
console.log(numbers); */
const numbers=[10,11,12,13,15,16];
numbers.forEach((ele)=>{
    console.log(ele)

})

const result=numbers.filter((ele)=>{
    return ele%2==0

})
console.log(result)

const result1=numbers.find((ele)=>{
    return ele>12

})
console.log(result1)





