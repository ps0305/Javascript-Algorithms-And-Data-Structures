# README

## Algorithm

First of all, filter out strings containing duplicated characters.

Then try all combinations and keep updating max value. In the process, we maintain a visited state representing unique characters that we have visited. In some cases, we may have the same visited state.

ex: ['abc', 'cba', 'def', 'fed'], select (0, 2) or select (1, 3)

To prevent visiting the same state, we can use memorization. Also we need to include visited state into memorization key. So we can use bitmap to represent 26 characters selection state.
