class Node:
    def __init__(self):
        self.children: Dict[str, Node] = {}
        self.word: Optional[str] = None


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = Node()
        for word in words:
            node = root
            for char in word:
                if not char in node.children:
                    node.children[char] = Node()
                node = node.children[char]
            node.word = word

        result = []

        def dfs(x: int, y: int, parent: Node):
            if y < 0 or len(board) <= y or x < 0 or len(board[y]) <= x:
                return

            char = board[y][x]
            if char not in parent.children:
                return

            node = parent.children[char]
            if node.word:
                result.append(node.word)
                node.word = None

            board[y][x] = "#"
            dfs(x - 1, y, node)
            dfs(x + 1, y, node)
            dfs(x, y - 1, node)
            dfs(x, y + 1, node)
            board[y][x] = char

        for y in range(len(board)):
            for x in range(len(board[y])):
                dfs(x, y, root)

        return result
