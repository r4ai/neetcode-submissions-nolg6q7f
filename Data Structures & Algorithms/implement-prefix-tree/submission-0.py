class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class PrefixTree:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            node.children.setdefault(char, TrieNode())
            node = node.children[char]
        node.end = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            if node.children.get(char, None) is None:
                return False
            node = node.children[char]
        if node.end:
            return True
        return False
        

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            if node.children.get(char, None) is None:
                return False
            node = node.children[char]
        return True
        