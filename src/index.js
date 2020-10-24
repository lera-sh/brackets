module.exports = function check (str, bracketsConfig) {
  const stack = [];
  const brackets = Object.fromEntries(bracketsConfig); 
  let arr = str.split('')
  for (let i of arr) {
      if (stack[0] === i) {
          stack.shift();
      } else if (brackets[i]) {
          stack.unshift(brackets[i]);
      } else {
          return false;
      }
  }
  return stack.length === 0;
}
