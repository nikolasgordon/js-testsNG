export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
  [...array].forEach(e=>{
    //simple higher order function call
    initialValue = reducer(initialValue, e);
  });
  return initialValue;
}
