/**
 * @param grid: a boolean 2D matrix
 * @return: an integer
 */
const numIslands = function (grid) {
    // write your code here
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) {
                helper(grid, i , j)
                count+=1;
            }
        }
    }
    return count;
}

const helper = (grid, i, j) => {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
    if(grid[i][j] == 0) return;
    grid[i][j] = 0;
    helper(grid, i+1, j);
    helper(grid, i-1, j);
    helper(grid, i, j+1);
    helper(grid, i, j-1);
}