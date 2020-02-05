/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  const m = watchedVideos.length;
  const dist = new Array(m).fill(Infinity);
  dist[id] = 0;
  const queue = [id];
  while (queue.length) {
    const i = queue.shift();
    for (const j of friends[i]) {
      if (dist[i] + 1 < dist[j]) {
        dist[j] = dist[i] + 1;
        queue.push(j);
      }
    }
  }
  const users = [];
  for (let i = 0; i < dist.length; i++) {
    if (dist[i] === level) {
      users.push(i);
    }
  }
  const videos = [];
  for (const i of users) {
    videos.push(...watchedVideos[i]);
  }
  const freq = {};
  for (const video of videos) {
    freq[video] = (freq[video] || 0) + 1;
  }
  return Object.keys(freq).sort((v1, v2) => {
    if (freq[v1] !== freq[v2]) {
      return freq[v1] - freq[v2];
    }
    return v1 < v2 ? -1 : 1;
  });
};
