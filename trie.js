
//allow any amount of child nodes

// have a searchWorld function
//insert word fuction

class TrieNode {
  construtor(word) {
    this.isWorld = word;
    this.children = new Map()
  }
}

module.exports = class Trie {
  constructor{
    this.root = new TrieNode(Null);
  }
}