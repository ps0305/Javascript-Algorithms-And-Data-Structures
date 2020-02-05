import KthLargest from './index';

test('kth-largest-element-in-a-stream', () => {
  const kthLargest = new KthLargest(3, []);
  kthLargest.add(3);
  kthLargest.add(9);
  kthLargest.add(7);
  kthLargest.add(1);
  kthLargest.add(4);
  kthLargest.add(0);
  const result = kthLargest.add(2);
  expect(result).toEqual(4);
});

test('kth-largest-element-in-a-stream', () => {
  const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  kthLargest.add(3);
  kthLargest.add(5);
  kthLargest.add(10);
  kthLargest.add(9);
  const result = kthLargest.add(4);
  expect(result).toEqual(8);
});
