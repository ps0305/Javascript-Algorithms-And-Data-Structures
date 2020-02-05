# README

## Algorithm

First of all, sort clips by start time.

- `nClips`: number of clips required.
- `curEnd`: maximum end time of previous segment.

Outer loop is used to iterate over segments. This loop keeps going if `i < clips.length` && `curEnd < T`. `curEnd < T` means not yet reaching `T`.

```js
// prettier-ignore
for (let i = 0; i < clips.length && curEnd < T; ) {

}
```

In the beginning of outer loop, we check if current clip `clips[i]` is overlapped with end time of previous segment. If not, it means there exists a gap between previous segment and current clip. So it's not possible to finish it.

```js
if (!isOverlapped(curEnd, clips[i])) {
  return -1;
}
```

If it's possible, we start another inner loop to find the maximum end time in this segment. So while current clip is overlapped with `curEnd`, it will keep extending `max`.

```js
let max = 0;
while (i < clips.length && isOverlapped(curEnd, clips[i])) {
  max = Math.max(max, clips[i][1]);
  i += 1;
}
```

Inner loop will break at the clip which is not overlapped with `curEnd`. It mean it's a start of new segment. So we increment `nClips` and set end time `curEnd` of previous segment.

Finally, we have gone through all clips. If we are able to reach T, return `nClips`. Otherwise, return `-1`
