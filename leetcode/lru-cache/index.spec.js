import LRUCache from './index';

const getData = (node) => {
  let ptr = node;
  const output = [];
  while (ptr) {
    const { key, value } = ptr;
    output.push({ key, value });
    ptr = ptr.next;
  }
  return output;
};

test('lru-cache', () => {
  const capacity = 2;
  const obj = new LRUCache(capacity);
  obj.put(2, 1);
  obj.put(1, 2);
  obj.put(2, 3);
  obj.put(4, 1);
  obj.get(1);
  obj.get(1);
  const result = getData(obj.head);
  const expectedResult = [
    { key: undefined, value: undefined },
    { key: 4, value: 1 },
    { key: 2, value: 3 },
    { key: undefined, value: undefined },
  ];
  expect(result).toEqual(expectedResult);
});

test('lru-cache', () => {
  const capacity = 2;
  const obj = new LRUCache(capacity);
  obj.put(1, 1);
  obj.put(2, 2);
  obj.get(1);
  obj.put(3, 3);
  obj.get(2);
  obj.put(4, 4);
  obj.get(1);
  obj.get(3);
  obj.get(4);
  const result = getData(obj.head);
  const expectedResult = [
    { key: undefined, value: undefined },
    { key: 4, value: 4 },
    { key: 3, value: 3 },
    { key: undefined, value: undefined },
  ];
  expect(result).toEqual(expectedResult);
});
