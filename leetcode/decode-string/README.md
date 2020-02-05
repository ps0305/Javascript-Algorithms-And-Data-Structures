# README

## Algorithm

Use a stack to store `[nRepeats, str]`.

Iterate over str.

- if encounter a number, update `nRepeats` in the top of stack.
- if encounter `[`, continue.
- if encounter `]`, compute the result of top of stack and append result to top of remaining stack.
- otherwise, append character to top of stack.
