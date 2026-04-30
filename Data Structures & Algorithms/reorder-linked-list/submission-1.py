# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if head is None:
            return None

        slow, fast = head, head
        while slow and slow.next and fast and fast.next and fast.next.next:
            fast = fast.next.next
            slow = slow.next

        mid = slow.next
        slow.next = None

        prev = None
        curr = mid
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        first = head
        second = prev
        
        while second:
            tmp1 = first.next
            tmp2 = second.next
            
            first.next = second
            second.next = tmp1
            
            first = tmp1
            second = tmp2
