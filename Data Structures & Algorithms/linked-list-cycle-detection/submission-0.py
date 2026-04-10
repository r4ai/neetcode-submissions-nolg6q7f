# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head is None:
            return False

        visited = set()

        cur = head
        visited.add(cur)
        while cur.next is not None:
            if cur.next in visited:
                return True

            cur = cur.next
            visited.add(cur)

        return False