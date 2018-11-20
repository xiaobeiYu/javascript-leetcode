/**
 * @param root: A Tree
 * @return: Level order a list of lists of integer
 */
const levelOrder = function (root) {
    // write your code here
    if(root === null) return[];
    let queue = [];
    let result = [];
    queue.push(root);
    while(queue.length) {
        const len = queue.length;
        let level = [];
        for(let i = 0; i < len; i++) {
            const current = queue.shift();
            level.push(current.val);
            if(current.left !== null) {
                queue.push(current.left);
            }
            if(current.right !== null) {
                queue.push(current.right);
            }
        }
        result.push([...level]);
    }
    return result;
}

