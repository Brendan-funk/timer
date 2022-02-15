//takes the array of inputs and returns only the valid ones
const getValidInput = function(arr) {
  let output = [];
  for (const item of arr) {
    if (!Number.isNaN(item) && item > 0) {
      output.push(item);
    }
  }
  return output;
};

//loops through times given setting a beep after timer
const timer = function(arr) {
  for (const time of arr) {
    const delay = time * 1000;
    setTimeout(() => process.stdout.write('\x07'),delay);
  }
};

const input = process.argv.slice(2);
const times = getValidInput(input);
if (times.length !== 0) {
  timer(times);
}