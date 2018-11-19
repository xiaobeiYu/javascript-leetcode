/**
 * @param nums: The integer array you should partition
 * @param k: An integer
 * @return: The index after partition
 */
const partitionArray = function (nums, k) {
    if(nums == null || nums.length == 0) return 0;
    let part1 = nums.filter((num) => (num < k));
    let part2 = nums.filter((num) => (num >= k));
    let result = part1.concat(part2).sort((a, b) => a-b);
    let index = result.findIndex((num) => num >= k);
    if(index == -1) return result.length;
    return index;
}