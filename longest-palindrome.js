/**
 * @param s: a string which consists of lowercase or uppercase letters
 * @return: the length of the longest palindromes that can be built
 */
const longestPalindrome = (s) => {
    if (s.length === 0) return 0;
    let set = new Set();
    Array.from(s).forEach((item) => {
        if(set.has(item)) {
            set.delete(item);
        } else {
            set.add(item);
        }
    });
    let remove = set.size;
    if(remove > 0) remove -=1;
    return s.length - remove;
}
