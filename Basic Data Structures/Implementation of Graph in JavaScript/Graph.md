A graph is a data structure composed of a collection of `nodes` and `edges`. Graphs are a non-linear data structure (as opposed to a linked list, stack, or queue). You may also hear
nodes referred to as vertices.
Graphs are used to solve many real-world problems and can be used to represent networks.
Let’s say you’re a school bus driver, for example, and you want to illustrate the different ways you can complete your bus route each school morning to maximize efficiency, you can use a graph to map it out (this is a version of the Traveling Salesman problem, also
known as an NP-Hard problem, and would take a lot of time to solve).

There are two types of graphs:

* Directed graphs - Where edges have direction.
* Undirected graphs - Where edges do not represent any directed

There are various ways to represent a Graph:- 
 
* Adjacency Matrix
* Adjacency List

## Directed Graphs

A directed graph contains edges which function similarly to a one-way street; they have a direction. For example you might have a graph where people can have favorite foods but
foods don’t have favorite people

![image](https://user-images.githubusercontent.com/34129569/157867584-fee03441-174c-418b-a51d-2b25b9922b19.png)

## Undirected Graphs

An undirected graph, in contrast, contains edges which flow bidirectionally, like a twoway street. For example you might have a graph of pets where people have pets and pets
have owners. The relationship goes both ways.

![image](https://user-images.githubusercontent.com/34129569/157867695-1b9f8322-63bf-48ee-8d64-a1cdfcb9476a.png)

In this article, we would be using **Adjacency List** to represent a graph because in most cases it has a certain advantage over the other representation. 
Now Let’s see an example of Graph class- 

```js
// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor (noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
  }

  // functions to be implemented

  // addVertex(v)
  // addEdge(v, w)
  // printGraph()

  // bfs(v)
  // dfs(v)

  // add vertex to the graph
  addVertex (v) {
    // initialize the adjacent list with a
    // null array

    this.AdjList.set(v, [])
  }

  // add edge to the graph
  addEdge (v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w)

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v)
  }

  // Prints the vertex and adjacency list
  printGraph (output = value => console.log(value)) {
    // get all the vertices
    const getKeys = this.AdjList.keys()

    // iterate over the vertices
    for (const i of getKeys) {
      // great the corresponding adjacency list
      // for the vertex
      const getValues = this.AdjList.get(i)
      let conc = ''

      // iterate over the adjacency list
      // concatenate the values into a string
      for (const j of getValues) {
        conc += j + ' '
      }

      // print the vertex and its adjacency list
      output(i + ' -> ' + conc)
    }
  }
}

export { Graph }

```
