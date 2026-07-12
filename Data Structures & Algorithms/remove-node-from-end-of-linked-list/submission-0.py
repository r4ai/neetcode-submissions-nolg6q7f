# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        def dfs(prev: ListNode, node: ListNode | None) -> int:
            if node is None:
                return 1
            
            i = dfs(node, node.next)
            if i == n:
                # prev -> node -> node.next
                # => prev -> node.next
                prev.next = node.next

            return i + 1
        
        prev = ListNode()
        prev.next = head
        dfs(prev, head)
        return prev.next