class Solution {
public:
    int maxProfit(vector<int>& prices) {
        auto max_profit = 0;
        auto min_buy = prices[0];
        for (auto price : prices) {
            auto profit = price - min_buy;
            if (profit > max_profit) max_profit = profit;
            if (price < min_buy) min_buy = price;
        }
        return max_profit;
    }
};
