# README

## Algorithm

- Iterate over combinations of any two points. Each iteration, we do followings:
  - Count nEquals
  - Count frequency of each slope
- Summarize frequency and nEquals
  - `max = Math.max(max, 1 + maxFreq + nEquals)`
- Note
  - For javascript, there is a division precision issue
    - http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
    - To prevent the precision issue, multiply slope with a very large number
