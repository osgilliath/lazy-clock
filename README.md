## lazy-clock

a clock in the terminal, inspired by [peaclock](https://github.com/octobanana/peaclock), but since it was not availabe for windows, I had to take matters into my own hands and make one myself.

It shows live clock (with seconds as well), and the date as well.

To run it: 
```bash
npx lazy-clock
```

## How it centres

It uses blessed library, that creates a box in the centre of the terminal window which then contains the clock

## Bug

When the terminal width is shrinked, the clock bugs and is unusable (needs fixing).