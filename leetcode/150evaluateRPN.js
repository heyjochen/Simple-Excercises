var evalRPN = function(tokens) {
  let stack = []

  for (const t of tokens) {
    const isOperator = t === '+' || t === '-' || t === '*' || t === '/'
    if (isOperator) {
      const v2 = stack.pop()
      const v1 = stack.pop()
      let v3
      switch (t) {
        case "+": v3 = v1 + v2; break;
        case "-": v3 = v1 - v2; break;
        case "*": v3 = v1 * v2; break;
        case "/":
          if (v2 === 0) {
            throw new Error("Division by zero");
          }
          v3 = Math.trunc(v1 / v2);
          break;
      }
      stack.push(v3)
      continue
    } else {
      stack.push(+t)
    }
  }

  return stack.pop()
};

