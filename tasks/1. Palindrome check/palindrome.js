export function isPalindrome(inputString) {
  // TODO: write your code here
  for(let i = 0,j=inputString.length-1;i<inputString.length/2;i++,j--){
    //define the start and end of the string and keep comparing until its either false or true
    //increment i and decrement j
    if(inputString.charAt(i)!==inputString.charAt(j))return false;
  }
  return true;
}