# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def dfs(node: ListNode):
            if node.next is None:
                head = ListNode(val=node.val)
                return head, head

            head, cur = dfs(node.next)
            cur.next = ListNode(val=node.val)
            return head, cur.next

        if head is None:
            return head
        head, _ = dfs(head)
        return head
