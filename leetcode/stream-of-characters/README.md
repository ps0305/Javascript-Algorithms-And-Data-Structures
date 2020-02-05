# README

## Algorithm

Create a trie containing reversed word of input words. Also maintain an input string containing all inputs. For each query, start from the last character of input, keep decreasing i if str[i:end] is a prefix. Finally return true if a word is found.
