# README

## Algorithm

Iterate over string. Each time, keep going until `\n` is met. In the process of iteration, we need to know the depth and name of that directory or file. And then keep popping out stack if `depth < stack.length`. Then put `name` into stack. Then we check if name is a file name. If so, we compute and update max value.
