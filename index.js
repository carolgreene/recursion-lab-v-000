// Code your solution here!
function printString(myString) {
  console.log(myString[0])
    if (myString.length > 1) {
 //.substring gives u the characters btwn 2 indexes
    //in this case the first & the length of the string
      
      let mySubString = myString.substring(1, myString.length);
      //console.log(mySubStr)
      printString(mySubString)
    } else {
      return true
    }
  }

  function reverseString(myString) {    
      console.log('myStr', myStr)
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
      
      
  
  
  