/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
3 or less - subtract the last character of the string
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
More than 3 - subtract the first 3 characters of the string

d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank*/

//Fill the first blank with the modified string, and fill the second blank with the original string.

/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"


let string = 'Functions rock!';

function modifiedString(string){
  let lastCharacters = '';
  if (string.length <= 3) {
    lastCharacters = string[string.length-1];
  } else {
    lastCharacters = string.slice(0,3);
  }
  return lastCharacters;
};
console.log(modifiedString(string));
console.log();


console.log(`We put the ${modifiedString(string)} in .`) 