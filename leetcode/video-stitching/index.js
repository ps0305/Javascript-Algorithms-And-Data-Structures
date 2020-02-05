/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  clips.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let nClips = 0;
  let curEnd = 0;
  for (let i = 0; i < clips.length && curEnd < T; ) {
    if (!isOverlapped(curEnd, clips[i])) {
      return -1;
    }
    let max = 0;
    while (i < clips.length && isOverlapped(curEnd, clips[i])) {
      max = Math.max(max, clips[i][1]);
      i += 1;
    }
    nClips += 1;
    curEnd = max;
  }
  return curEnd >= T ? nClips : -1;
};

function isOverlapped(t, clip) {
  return clip[0] <= t;
}
