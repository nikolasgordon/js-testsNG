export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  if(![...inputString].includes("(") && ![...inputString].includes(")"))return true;
  let stack = [];
  
  [...inputString].forEach(e => {
    if(e === "("){
      //if left bracket input automatically
      stack.push("(");
    }
    else if(e === ")"){
      //push left braxket if stack is empty: does not work with return option
      if(stack[stack.length - 1] !== "("){
        stack.push("}");
      }
      //matching bracket, pop stack
      else stack.pop();
    }
  });
  return stack.length===0;
  
}