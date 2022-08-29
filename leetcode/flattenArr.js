// flatten array

let arr = [1, 2, [3, 4, [5]]];

const flatten = (nested) => {
  const flat = [];

  const handleFlat = (array) => {
    let counter = 0;
    while (counter < array.length) {
      const val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flat.push(val);
      }
      counter++;
    }
  };

  handleFlat(nested);
  return flat;
};

flatten(arr);
