# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

import queue

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return None

        tail = head
        if head.next:
            tail = self.reverseList(head.next)
            head.next.next = head
        head.next = None

        return tail
