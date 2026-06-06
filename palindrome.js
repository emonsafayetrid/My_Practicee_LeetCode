let x =121;
function isPalindrome(x){
    let str=x.toString();
    let reversedStr=str.split('').reverse().join('');
    return str===reversedStr;
}   
console.log(isPalindrome(x));   


let x = 121;

function isPalindrome(x) {
    let str = x.toString();
    // Convert the string to an array, reverse it, and join it back
    let reversedStr = str.split('').reverse().join(''); 
    
    if (str === reversedStr) {
        console.log(true);
    } else {
        console.log(false);
    }   
}

// You also need to call the function to see the output!
isPalindrome(x);