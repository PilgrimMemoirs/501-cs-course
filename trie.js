
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
    this.root = new TrieNode(false);
  }
  
  insert(word) {
    // iterate through all but last characters
      // check structure for if that letter exists and build down from there, each time checking that letter exists. 
    
    //last chacter is added outside of the loop, and its marked true as a complete word
      // if word alreayd exists in trie, but hasn't been 'added', the last letter of the word gets marked as true for being a complete word. But it can do that without adding any new words. 
  }
}


// Autocomplete 
  // Add method findPossibleWorlds(prefix) to the Trie class. Function takes a strang and returns a collection of all possible words starting with that prefix. 