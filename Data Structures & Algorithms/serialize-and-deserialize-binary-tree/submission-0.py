# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Codec:
    # Encodes a tree to a single string.
    def serialize(self, root: Optional[TreeNode]) -> str:
        lst = []

        def dfs(node: Optional[TreeNode]):
            if node is None:
                lst.append("null")
                return

            lst.append(str(node.val))

            dfs(node.left)
            dfs(node.right)

        dfs(root)

        return ",".join(lst)

    # Decodes your encoded data to tree.
    def deserialize(self, data: str) -> Optional[TreeNode]:
        lst = data.split(",")
        print(lst)

        if len(list(filter(lambda x: x != "null", lst))) == 0:
            return None

        root = TreeNode(int(lst[0]))
        stack = [[root, 2]]

        for i in range(1, len(lst)):
            parent = stack[-1]
            parent[1] -= 1

            if parent[1] == 0:
                stack.pop()

            node = lst[i]
            if node != "null":
                tree = TreeNode(int(node))
                if parent[1] == 1:
                    parent[0].left = tree
                else:
                    parent[0].right = tree
                stack.append([tree, 2])

        return root
