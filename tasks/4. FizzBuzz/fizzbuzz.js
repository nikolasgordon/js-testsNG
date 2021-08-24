export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  //empty array to start
  let ans = [];
  //starts with 1, use mod operator to deduce remainder
  for(let i = 1;i<=n;i++){
    if(i%15===0)ans.push("FizzBuzz");
    else if(i%5===0)ans.push("Buzz");
    else if(i%3===0)ans.push("Fizz");
    //if not divisible, return number
    else
      ans.push(i);
  }
  return ans;
}
