/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

const sortByMail = (a, b) => {
  if (a.indexOf('@') <= -1) {
    return -1;
  }
  return a <= b ? -1 : 1;
};

const sortByName = (a, b) => {
  return a[0] <= b[0];
};

const mergeSortedArray = (arr1, arr2) => {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let m = arr1.length + arr2.length - 1;
  arr1.push(...arr2);
  while (m >= 0) {
    if (arr2[j] >= arr1[i] || i < 0) {
      arr1[m] = arr2[j];
      m -= 1;
      j -= 1;
    } else if (arr1[i] >= arr2[j] || j < 0) {
      arr1[m] = arr1[i];
      m -= 1;
      i -= 1;
    }
  }
  return arr1;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const removeDuplicates = (nums) => {
  if (!nums.length) {
    return 0;
  }
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[j]) {
      continue;
    }
    j += 1;
    swap(nums, i, j);
  }
  return nums.slice(0, j + 1);
};

var accountsMerge = function(accounts) {
  for (let i = 0; i < accounts.length; i++) {
    accounts[i].sort(sortByMail);
  }
  accounts.sort(sortByName);
  const output = [];
  let ptr = accounts.pop();
  while (ptr) {
    const account = accounts.pop();
    if (account && ptr[0] === account[0] && account[1] < ptr[ptr.length - 1]) {
      ptr = mergeSortedArray(ptr, account);
      ptr = removeDuplicates(ptr);
    } else {
      ptr = removeDuplicates(ptr);
      output.push([...ptr]);
      ptr = account;
    }
  }
  return output;
};
