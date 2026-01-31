const symbols = [
  // 0
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  // 1
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
  // 2
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  // 3
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  // 4
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
  // 5
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  // 6
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  // 7
  [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  // 8
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  // 9
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
];

const colon = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0];

function renderDigit(digit) {
  const digitData = symbols[digit];
  let output = '';
  for (let i = 0; i < digitData.length; i++) {
    if (i > 0 && i % 3 === 0) {
      output += '\n';
    }
    output += digitData[i] ? '█' : ' ';
  }
  return output;
}

function renderColon() {
  let output = '';
  for (let i = 0; i < colon.length; i++) {
    if (i > 0 && i % 3 === 0) {
      output += '\n';
    }
    output += colon[i] ? '█' : ' ';
  }
  return output;
}

module.exports = {
  renderDigit,
  renderColon,
};
