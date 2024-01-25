export default function debounce(func, wait = 0) {
  let timeoutID = null;

  return function(...args) {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      // Not strictly necessary but good to do this,
      // re: subsequent calls.
      timeoutID = null;

      func.apply(this, args);
    }, wait);
  };
}




