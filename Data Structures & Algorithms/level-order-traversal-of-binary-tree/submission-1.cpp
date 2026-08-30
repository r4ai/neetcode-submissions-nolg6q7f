/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Solution {
public:
  std::vector<std::vector<int>> levelOrder(TreeNode *root) {
    auto result = std::vector<std::vector<int>>();
    auto queue = std::queue<std::pair<int, TreeNode *>>();

    if (root != nullptr)
      queue.push(std::make_pair(0, root));
    while (!queue.empty()) {
      auto [level, node] = queue.front();

      if (result.size() <= level)
        result.push_back(std::vector<int>());
      auto line = &result[level];
      line->push_back(node->val);

      queue.pop();
      if (node->left != nullptr)
        queue.push(std::make_pair(level + 1, node->left));
      if (node->right != nullptr)
        queue.push(std::make_pair(level + 1, node->right));
    }

    return result;
  }
};
