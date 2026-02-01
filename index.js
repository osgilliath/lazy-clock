#!/usr/bin/env node
const blessed = require('blessed');
const { renderDigit, renderColon } = require('./digital-clock.js');

const screen = blessed.screen({
  smartCSR: true,
  title: 'Lazy Clock'
});

const clockBox = blessed.box({
  top: 'center',
  left: 'center',
  width: 'shrink',
  height: 'shrink',
  content: '',
  tags: true,
  style: {
    fg: 'white',
    bg: 'black'
  }
});

screen.append(clockBox);

function updateClock() {
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
  const datePadding = Math.floor((clockWidth - date.length) / 2);
  const centeredDate = ' '.repeat(datePadding > 0 ? datePadding : 0) + date;

  clockBox.setContent(output.join('\n') + '\n' + centeredDate);
  screen.render();
}

updateClock();

setInterval(updateClock, 1000);

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();
