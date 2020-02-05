# README

## Algorithm

It can be uniquely reconstructed from the sequences in seqs if:

- Topological sorting is unique.
- Topological sorting is equal to org.

Topological sorting is unique if there is always only one starting point. Starting point is a node with in drgree is 0. So we can use BFS to check this. For each iteration, if `queue.length > 1` which means there are more than one starting point. if `String(org[i]) !== String(queue[0])` which means ith charater in org in not equal to ith chracter in topological sorting. Then we decrease in drgree of adjacent nodes by 1. If the in degree of that node is zero, push it to the queue. Keep this process until there is no more node in queue.

Finally, i should be equal to the length of org. And in degree of every node should be zero.
