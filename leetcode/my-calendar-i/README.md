# README

## Algorithm

Use an array to store sorted intervals. For each booking, use `upperBound` to search for interval with minimum start that is greater than input start time. Then we check if it's overlapped with any of `events[i - 1]` or `event[i]`. If it's overlapped, it's not bookable. Otherwise, it's bookable and insert interval at the index.
