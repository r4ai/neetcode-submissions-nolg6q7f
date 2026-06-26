class Twitter {
    tweets: { user; tweet }[] = [];
    user2follows: Map<number, number[]> = new Map();

    constructor() {}

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        this.tweets.push({ user: userId, tweet: tweetId });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        const follows = [...this.user2follows.get(userId) ?? [], userId]
        console.log(this.tweets)

        const result = []
        for (let i = this.tweets.length - 1; i >= 0; i--) {
            const tweet = this.tweets[i]
            if (follows.includes(tweet.user)) {
                result.push(tweet.tweet)
                if (result.length >= 10) {
                    break
                }
            }
        }
        return result
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        const follows = this.user2follows.get(followerId) ?? [];
        follows.push(followeeId);
        this.user2follows.set(followerId, follows);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        const follows = this.user2follows.get(followerId) ?? [];
        this.user2follows.set(
            followerId,
            follows.filter((id) => id !== followeeId),
        );
    }
}
