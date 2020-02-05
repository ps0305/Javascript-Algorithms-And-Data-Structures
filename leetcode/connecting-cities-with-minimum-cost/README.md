# README

## Algorithm

First of all, we create a graph. So that for each node, we know its sibilings and the cost for each sibiling. Because we are checking if this graph is connected and searching for the minimum cost, We can use BFS approach and start from any node. If the graph is connected, every node should be reachable from any other nodes. Otherwise it's disconnected and we should return -1.

To find the minimum cost, we use BFS and priority queue so that we can always span with minimum cost edges. If a node is dequeued from the priority queue and it's not yet visited, then this edge is the minimum cost to this node. So we increment costs by that value. If at the same time we've already visited all nodes, return minimum cost. Otherwise, push current node's sibilings to priority queue as candidates. Repeat this process until there is no more candidates.
