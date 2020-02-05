# README

## Algorithm

- Use BFS to test every candidate combinations.
  - For each visit
    - Test current board configuration. If it's solved, return nSteps.
    - Else, put next state derived from current board into queue.
      - How to create next state ?
        - Clone the board
        - Swap the position of zero with positions next to zero. That is up, right, bottom and left.
        - To prevent visiting the same board configuration again, we create key from current board configuration and save to visited.
- If we can't find any solution from the candidates, return -1.
