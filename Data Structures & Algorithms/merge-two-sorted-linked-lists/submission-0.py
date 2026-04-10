# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 == None: return list2
        if list2 == None: return list1

        def merge(prev, next1, next2):
            if next1 == None:
                prev.next = next2
                return
            if next2 == None:
                prev.next = next1
                return
            if next1.val <= next2.val:
                prev.next = next1
                merge(prev.next, next1.next, next2)
            else:
                prev.next = next2
                merge(prev.next, next1, next2.next)

        head = list1 if list1.val <= list2.val else list2

        if list1.val <= list2.val:
            merge(list1, list1.next, list2)
        else:
            merge(list2, list1, list2.next)
        
        return head