/**
 * @param nums: A set of numbers
 * @return: A list of lists
 */
const subsets = (nums) => {
    let results = [];
    
    if (nums == null) {
        return results;
    }
    
    if (nums.length == 0) {
        results.push([]);
        return results;
    }
    
    nums.sort((a,b) => a-b);
    helper([], nums, 0, results);
    return results;
}
   ; 
    
// 递归三要素
// 1. 递归的定义：在 Nums 中找到所有以 subset 开头的的集合，并放到 results
const helper = (subset, nums, startIndex, results) => {
    // 2. 递归的拆解
    // deep copy
    // results.add(subset);
    results.push([...subset]);
    
    for (let i = startIndex; i < nums.length; i++) {
        // [1] -> [1,2]
        subset.push(nums[i]);
        // 寻找所有以 [1,2] 开头的集合，并扔到 results
        helper(subset, nums, i + 1, results);
        // [1,2] -> [1]  回溯
        subset.pop(subset.length - 1);
    }
    
    // 3. 递归的出口
    // return;
}

