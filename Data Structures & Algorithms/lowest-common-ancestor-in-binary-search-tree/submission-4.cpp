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
  TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q) {
    auto l = p->val <= q->val ? p : q;
    auto r = p->val >= q->val ? p : q;
    if (l->val <= root->val && root->val <= r->val)
      return root;
    if (l->val <= root->val && r->val <= root->val)
      return lowestCommonAncestor(root->left, l, r);
    if (l->val >= root->val && r->val >= root->val)
      return lowestCommonAncestor(root->right, l, r);
    throw std::runtime_error("p and q are not in the same subtree");
  }
};

