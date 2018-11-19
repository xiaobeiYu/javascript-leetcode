/**
 * @param nums: an array of integers
 * @return: the number of unique integers
 */
const deduplication = function (nums) {
    // write your code here
    let set = new Set();
    for(let item of nums) {
        set.add(item);
    }
    return Array.from(set);
}