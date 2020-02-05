/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const n = nums1.length + nums2.length;
  const k = Math.floor(n / 2);
  if (n % 2 === 1) {
    return findKth(nums1, nums2, k + 1);
  }
  return (findKth(nums1, nums2, k) + findKth(nums1, nums2, k + 1)) / 2;
};

function findKth(nums1, nums2, k) {
  if (nums1.length > nums2.length) {
    return findKth(nums2, nums1, k);
  }
  let left = 0;
  let right = nums1.length;
  while (left < right) {
    const i = Math.floor((left + right) / 2);
    const j = k - i - 2;
    // prettier-ignore
    const maxLeft = Math.max(
      i in nums1 ? nums1[i] : -Infinity,
      j in nums2 ? nums2[j] : -Infinity,
    );
    // prettier-ignore
    const minRight = Math.min(
      i + 1 in nums1 ? nums1[i + 1] : Infinity,
      j + 1 in nums2 ? nums2[j + 1] : Infinity,
    );
    if (maxLeft <= minRight) {
      return maxLeft;
    } else if (nums1[i] > nums2[j + 1]) {
      right = i;
    } else {
      left = i + 1;
    }
  }
  return nums2[k - 1];
}
