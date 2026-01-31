const { renderDigit, renderColon } = require('./digital-clock.js');

function displayTime() {
  console.clear();
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const date = now.toLocaleDateString();
  const [h1, h2, , m1, m2, , s1, s2] = time.split('');

  const hour1 = renderDigit(parseInt(h1));
  const hour2 = renderDigit(parseInt(h2));
  const minute1 = renderDigit(parseInt(m1));
  const minute2 = renderDigit(parseInt(m2));
  const second1 = renderDigit(parseInt(s1));
  const second2 = renderDigit(parseInt(s2));
  const colon = renderColon();

  const output = [];
  for (let i = 0; i < 5; i++) {
    output.push(
      `${hour1.split('\n')[i]} ${hour2.split('\n')[i]} ${colon.split('\n')[i]} ${minute1.split('\n')[i]} ${minute2.split('\n')[i]} ${colon.split('\n')[i]} ${second1.split('\n')[i]} ${second2.split('\n')[i]}`
    );
  }

  const clockWidth = output[0].length;
  const clockHeight = output.length + 2; // +2 for the date and the empty line

  const termWidth = process.stdout.columns || 80;
  const termHeight = process.stdout.rows || 24;

  const horizontalPadding = Math.floor((termWidth - clockWidth) / 2);
  const verticalPadding = Math.floor((termHeight - clockHeight) / 2);

  const horizontalPaddingStr = ' '.repeat(horizontalPadding);

  for (let i = 0; i < verticalPadding; i++) {
    console.log('');
  }

  for (const line of output) {
    console.log(horizontalPaddingStr + line);
  }

  const datePadding = Math.floor((clockWidth - date.length) / 2);
  const centeredDate = ' '.repeat(datePadding) + date;
  console.log(horizontalPaddingStr + '\n' + horizontalPaddingStr + centeredDate);
}

setInterval(displayTime, 1000);
