# README

## Algorithm

- Create candidates from following rules:
  - Mirror
    - Odd
      - left + 1
        - 12345 => 12421
      - left + 0
        - 12345 => 12321
      - left - 1
        - 12345 => 12221
    - Even
      - left + 1
        - 1234 => 1331
      - left + 0
        - 1234 => 1221
      - left - 1
        - 1234 => 1111
  - Less digits
    - 12345 => 9999
  - More digits
    - 12345 => 100001
- Find out the one with minimal absolute differences from candidates
