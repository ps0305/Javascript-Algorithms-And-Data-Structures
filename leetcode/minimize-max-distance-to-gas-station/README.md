# README

## Algorithm

Use binary search to guess a distance and adjust the guessed value based on the counting. Given a maximum distance, `count` function should return how many stations is required to achieve this. If n <= K, we need a greater n. So making maximum distance smaller can make it happen. And vice versa.

P.S.

In this question, the searching space is continuous. So we can't increment left or right by 1. Instead, we can always include the starting and ending of searching space for the next iteration. We keep searching until searching space is smaller than a threshold.
