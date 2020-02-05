# README

## Algorithm

Main idea:

- **_An edge is a critical connection, if and only if it is not in a cycle._**

So we use dfs starting from any node to traverse the graph. If an edge is critical connection, discard it. Else, add it to output.

Define rank of a node: maximum depth starting from a source. Rank of source is 0.

If no cycle exists during traversal, rank value should be increasing.

If cycle exists, `rank[j]` should be less than `rank[i]`. ( Traversing from `i` to `j` )

For now, we are able to know cycle exists at current node. But ancestors of current node do not aware of that.

To let ancestors be aware of cycle exists, we return min rank value seen at current node.

Time Complexity: O(|V| + |E|)
Space Complexity: O(|V|)

Time Complexity: Since every edges and vertices are traversed only once.
