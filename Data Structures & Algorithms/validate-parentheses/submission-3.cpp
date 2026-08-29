#include <stack>

class Solution {
public:
  bool isValid(std::string s) {
    auto stack = std::stack<char>();
    for (auto c : s) {
      switch (c) {
      case '(':
      case '{':
      case '[':
        stack.push(c);
        break;
      case ')':
        if (stack.empty() || stack.top() != '(')
          return false;
        stack.pop();
        break;
      case '}':
        if (stack.empty() || stack.top() != '{')
          return false;
        stack.pop();
        break;
      case ']':
        if (stack.empty() || stack.top() != '[')
          return false;
        stack.pop();
        break;
      }
    }
    return stack.empty();
  }
};
