/**
 * @param nums: an array of Integer
 * @param target: target = nums[index1] + nums[index2]
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSum = function (nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        console.log(map);
        if(map.has(nums[i])) {
            return [map.get(nums[i])+1, i+1];
        } else {
            map.set(target-nums[i], i);
        }
    }
    return [];
}