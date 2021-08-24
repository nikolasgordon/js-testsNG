export function encryptCaesar(inputString, key) {
  // TODO: write your code here
  let ans = "";
  //simple string of the disctionary using he indexOf as he key
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  [...inputString].forEach(e=>{
    if(alpha.indexOf(e)+key <=26)ans = ans.concat(alpha.charAt(alpha.indexOf(e)+key));
    else{
      let temp = (alpha.indexOf(e)+key) % 26;
      ans = ans.concat(alpha.charAt(temp));
    }
  });
  return ans;
}

// BONUS
// With this function, we can both decode and encode with some tweaks. for encode we simply add the key onto the index
// and adjusts the index if it is greater than 26, the length of the alphabet. to decode we need to subtract the key and
// to wrap around if the key number subtraction is less than zero.
    

// Bonus 2
// Without knowing the text, there are multiple ways to decrypt assuming we have access to the encrption our self. We could use
// frequency based appraoch in which we deduce what the vowels are and then from there we should be able to get the key.

