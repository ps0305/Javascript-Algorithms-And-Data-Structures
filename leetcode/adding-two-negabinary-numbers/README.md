# README

## Algorithm

- For each digit
  - Calcute sum which is equal to `arr1[i] + arr2[j] + c`
  - Push `sum % 2` to output
  - Update carry. `c = -(sum >> 1)`
- Finally, trim leading zeros.
