//Q1-print odd number in an Array
var odd=function foo(arr)
{
    var arr1=[]
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
          arr1.push(arr[i])
    }
    return arr1
}
console.log(odd([1,2,3,4]))

//Q2-convert all the strings to title caps in a string Array
var caps=function str(words)
{

    for(var i=0;i<words.length;i++)
    {
       words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return words;
}
console.log(caps(["guvi"]))

//Q3-Sum of all numbers in an Array
var sum=function add(arr)
{
    var sums=0;
    for(var i=0;i<arr.length;i++)
    {
        sums+=arr[i];
    }
    return sums;
}
console.log(sum([1,2,3,4]))
//IIFE
(function(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
       sum+=arr[i];
    }
    console.log(sum)
  })([1,2,3]);

//Q-4 Print all the prime numbers in an Array
var prime=function num(arr)
{
    var arr1=[]
    for(var i=0;i<arr.length;i++)
    {
      var isPrime=true;
      if(arr[i]<=1)
        continue;
      for(var j=2;j<=Math.sqrt(arr[i]);j++)
      {
          if(arr[i]%j===0){
            isPrime=false;
             break;}
      }
      if(isPrime)
        arr1.push(arr[i])
    }
    return arr1
}
console.log(prime([1,2,3,4,5,12,19,99,67]))

