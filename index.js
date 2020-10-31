// Code your solution here!
//print individual chars of a string
function printString(myString) {
  console.log(myString[0])
    if (myString.length > 1) {
 //.substring gives u the characters btwn 2 indexes
    //in this case the first & the length of the string
      
      let mySubString = myString.substring(1, myString.length);
      //console.log(mySubStr)
      return printString(mySubString)
    } else {
      return true
    }
  }

//reverse string
  function reverseString(myString) {    
      console.log('myStr', myString)
      //base case to end recursion
        if (myStr === '') {
          return '';
        } else {
        //myStr.substr(1) knocks off the first letter
        //& leaves the rest of the string
        //+ myStr.charAt(0) will add the first letter
        //on to the end of the string.
        console.log('substr', myStr.substr(1))
        console.log('charAt0', myStr.charAt(0))        
        return reverseStr(myStr.substr(1)) + myStr.charAt(0)
        
        }
      }

      //is the string a palidrome?
      function isPalidrome(str) {
        console.log(str)
        //base case to end recursion
        //is a palidrome if it's down to 0 or 1 characters
        if (str.length <= 1) {
          return true
          //ck 1st char & last char to see if same
        } else if (str[0] !== str.charAt(str.length - 1)) {
          return false
        }
        //remove the 1st & last char & call function again
        //combined the line below into the return line
        //str = str.substr(1, str.length - 2)
        return isPalidrome(str.substr(1, str.length - 2))
      }
      
      
      
      
      
  
  
  