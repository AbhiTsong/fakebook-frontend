//////////////////////FunctionFor Generating Range Of Values
let Range = (start, end) => {
  let startVal = [],
    values = start;

  while (values < end + 1) {
    startVal.unshift(values++);
  }

  return startVal;
};

export { Range };
