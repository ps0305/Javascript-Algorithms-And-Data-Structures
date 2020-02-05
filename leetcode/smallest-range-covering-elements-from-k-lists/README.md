# README

## Algorithm

### Method 1: Iterator, Priority Queue and Sliding Window

Create an iterator that can iterate over all elements as a merged array in order. In the process of iteration, we maintain a sliding window to ensure there is at least one element in each nums.

### Method2: Priority Queue, Min and Max

Use a priority queue to maintain the minimum value. In the beginning, we put the smallest elements in each array to the priority queue. So we have the min value. Also we compute the max value of these elements. Right now we have a smallest range for these elements. Then we can start iterating.

We shift the smallest element in the priority queue and add next element to the priority queue. Then we can update the range. We keep this process until we run out of any array.
