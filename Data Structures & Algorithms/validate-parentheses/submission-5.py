class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        open_of = {")": "(", "}": "{", "]": "["}
        for c in s:
            print(c, stack)
            if c in ("(", "{", "["):
                stack.append(c)
                continue
            if c in (")", "}", "]"):
                if not stack or open_of[c] != stack[-1]:
                    return False
                stack.pop()
        if stack:
            return False
        return True