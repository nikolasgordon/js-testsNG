//somewhat cheating
let ans = [0, 1, 1];
export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  //helper function
  help(n-1);
  return ans;
}

function help(n, undefined){
  //if ans does not contain n, make it
  if(ans[n] === undefined){
      //call the previous nodes to make the new fib number
      ans[n] = help(n-1) + help(n-2);
  }
  return ans[n];
}

//Dynamic approach!

// export function getFibonacciUntil(n) {
//   //TODO write your code here, remember it should be recursive

//   let ans = [];
//   ans.push(0);
//   if(n===0)return ans;
//   ans.push(1);
//   if(n===1)return ans;

//   for(let i = 2;i<n;i++){
//     ans[i] = ans[i-1] + ans[i-2];
//   }

//   return ans;

// }