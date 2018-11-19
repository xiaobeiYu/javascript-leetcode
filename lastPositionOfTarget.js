/**
 * @param nums: An integer array sorted in ascending order
 * @param target: An integer
 * @return: An integer
 */
const lastPosition = function (nums, target) {
    // write your code here
    if (nums === null || nums.length === 0) {
        return -1;
    }
    
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + parseInt((end - start) / 2);
        if (nums[mid] == target) {
            start = mid;
        } else if (nums[mid] < target) {
            start = mid;
            // or start = mid + 1
        } else {
            end = mid;
            // or end = mid - 1
        }
    }
    
    if (nums[end] == target) {
        return end;
    }
    if (nums[start] == target) {
        return start;
    }
    return -1;
}
