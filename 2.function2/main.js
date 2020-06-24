function reverseString(message){
    return message.split("").reverse().join("") ;
}

function palindrome(message){
    var reverseMessage = reverseString(message);
    if(message == reverseMessage){
        console.log("true");
    }else {
        console.log("false");
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true


