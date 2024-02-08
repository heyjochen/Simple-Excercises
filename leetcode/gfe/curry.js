export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      // If enough arguments are provided, invoke the original function
      return func.apply(this, args);
    }

    // If not enough arguments, return a new curried function with the current arguments
    return curried.bind(this, ...args);
  };
}
