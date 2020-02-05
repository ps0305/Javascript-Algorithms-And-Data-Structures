# README

## Algorithm

- Create a set to store all points. So that given (x, y), we can know if this point exists or not.
- Iterate over combinations of two points representing diagonal points of the rectangle.
  - If rest of the two points exists in the set, we have found a rectangle. Then update min value.
- Finally return min value.
