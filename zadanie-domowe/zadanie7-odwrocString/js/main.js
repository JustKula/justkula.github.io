function reverseString(str) {
  
  var splitString = str.split("");                // rozdziela string i kreuje nowa tablice
  
  var sortArray = splitString.sort();       //sortowanie tablicy
  
  var joinArray = sortArray.join("");          // polacznie tablicy w string
  
  return (joinArray);
}

console.log(reverseString("Akademia108"));


