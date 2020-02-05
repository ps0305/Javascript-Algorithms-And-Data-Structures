# README

## Algorithm

- Count number of people for each age.
- Pair each ages to see if they should send request to each other.
  - People don't send request to themselves. `If A === B, n += freq[A] * (freq[B] - 1)`
- For javascript, every key in object will be transform to string. To store key with its original type, we should use `Map`.
