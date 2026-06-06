let x =121;
function isPalindrome(x){
    let str=x.toString();
    let reversedStr=str.split('').reverse().join('');
    return str===reversedStr;
}   
console.log(isPalindrome(x));   


