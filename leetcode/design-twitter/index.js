/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.nMax = 10;
  this.following = createObject(() => new Set(), {});
  this.tweets = createObject(() => new Array(), {});
  this.id = 0;
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweets[userId].push([tweetId, this.id++]);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const followings = [...this.following[userId], userId];
  const tweets = followings
    .map((id) => this.tweets[id])
    .reduce((acc, cur) => [...acc, ...cur], [])
    .sort((a, b) => b[1] - a[1])
    .slice(0, this.nMax)
    .map(([tweetId]) => tweetId);
  return tweets;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (followerId === followeeId) {
    return;
  }
  this.following[followerId].add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (followerId === followeeId) {
    return;
  }
  this.following[followerId].delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

function createObject(createDefaultValue, obj) {
  return new Proxy(obj, {
    get: (target, prop) => {
      if (!(prop in target)) {
        target[prop] = createDefaultValue();
      }
      return target[prop];
    },
  });
}
