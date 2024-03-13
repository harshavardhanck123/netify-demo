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
//IIFE
(function(arr) {
  var arr1 = [];
  for(var i = 0; i < arr.length; i++) {
      if(arr[i] % 2 !== 0)
          arr1.push(arr[i]);
  }
  console.log(arr1);
})([1, 2, 3, 4]);

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
//IIFE
(function (words)
{

    for(var i=0;i<words.length;i++)
    {
       words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return words;
})(["guvi","geek"]);


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
console.log(sum([1,2,3,4]));
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
//IIFE
(function (arr)
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
    console.log(arr1)
})([1,2,3,4,5,12,19,99,67]);


//Q-5 Return all the palindromes in an array
var palindrome = function words(arr)
{
    var ans=[]
    for(var i=0;i<arr.length;i++)
    {
         var res=arr[i].split('').reverse().join('')
         if(arr[i]===res)
         {
           ans.push(arr[i])
         }
         
    }
    return ans;
    
}
console.log(palindrome(["guvi","mam","racecar"]))
//IIFE
(function (arr)
{
    var ans=[]
    for(var i=0;i<arr.length;i++)
    {
         var res=arr[i].split('').reverse().join('')
         if(arr[i]===res)
         {
           ans.push(arr[i])
         }
         
    }
    console.log(ans);
    
})(["guvi","mam","racecar"]);


//Q-6 Median of two sorted arrays
var median=function mid(arr1,arr2){
  var res = [...arr1,...arr2]
  var a = (res.length/2)-1;
  var b = ((res.length/2)+1)-1;
  var c = res[a]+res[b]
  var d =c/2
  return d;
}
console.log(median([1,2,3],[4,5,6]))
//IIFE
(function (arr1,arr2){
  var res = [...arr1,...arr2]
  var a = (res.length/2)-1;
  var b = ((res.length/2)+1)-1;
  var c = res[a]+res[b]
  var d =c/2
  console.log(d);
})([1,2,3],[4,5,6]);


//Q-7 Remove Duplicates from the array
var duplicate=function copy(arr){
  var obj={}
  var arr1=[]
  for(var i=0;i<arr.length;i++)
  {
    var element=arr[i]
    if(obj[element])
    {
      obj[element]++
    }
    else
    {
      obj[element]=1
    }
    if(obj[element]==1)
    {
      arr1.push(element)
    }
  }
  
  return arr1
}
console.log(duplicate([1,2,2,3,4,3,4,6,6,6]))
//IIFE
(function copy(arr){
  var obj={}
  var arr1=[]
  for(var i=0;i<arr.length;i++)
  {
    var element=arr[i]
    if(obj[element])
    {
      obj[element]++
    }
    else
    {
      obj[element]=1
    }
    if(obj[element]==1)
    {
      arr1.push(element)
    }
  }
  
  console.log(arr1)
})([1,2,2,3,4,3,4,6,6,6]);


//Q-8 Rotate an array K times [Left rotation]
var rotateArray1 = function(nums, k) {
  for (let i = 0; i < k; i++) {
      nums.push(nums.shift()); // Change the direction of shift to perform left rotation
  }
  return nums;
}
console.log(rotateArray1([1, 2, 3, 4, 5], 6)); // Output: [3, 4, 5, 1, 2]
//IIFE
(function(nums, k) {
  for (let i = 0; i < k; i++) {
      nums.push(nums.shift()); // Change the direction of shift to perform left rotation
  }
  console.log(nums);
})([1, 2, 3, 4, 5], 6);

