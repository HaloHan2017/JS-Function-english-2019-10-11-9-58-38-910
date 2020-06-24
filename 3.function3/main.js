function alphabetSort(message){
    let splitArr = message.split("");
    console.log(splitArr.sort().join(""))
}
alphabetSort('hello'); // should return 'ehllo'
