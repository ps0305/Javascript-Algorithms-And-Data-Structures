# README

## Algorithm

- Create a map from stop to bus
  - So for each stop, we know which buses will visit
- Do BFS started from buses containing stop `S`
  - For each visit
    - Check if this bus contains destination. If so, return nBuses
    - Else, iterate over routes the bus will visit.
      - Iterate over buses that will visit the route.
        - If next bus is not the same with the bus and we haven't visited before,
          - Add next bus to visited
          - Add next bus to the queue with nBuses + 1
- If there is no more candidates in the queue, return -1 meaning there exists no path for that
