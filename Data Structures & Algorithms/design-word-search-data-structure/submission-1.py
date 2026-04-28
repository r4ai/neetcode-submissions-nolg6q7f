class WordNode:
    def __init__(self):
        self.end = False
        self.children = {}


class WordDictionary:
    def __init__(self):
        self.wt = WordNode()

    def addWord(self, word: str) -> None:
        node = self.wt
        for char in word:
            if char not in node.children:
                node.children[char] = WordNode()
            node = node.children[char]
        node.end = True
        return None

    def search(self, word: str) -> bool:
        def dfs(i: int, node: WordNode):
            if i == len(word):
                return node.end
            if word[i] == ".":
                for child in node.children.values():
                    if dfs(i + 1, child):
                        return True
                return False
            if word[i] in node.children:
                return dfs(i + 1, node.children[word[i]])
            return False

        return dfs(0, self.wt)
