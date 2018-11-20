/**
 * @param grid: a chessboard included 0 (false) and 1 (true)
 * @param source: a point
 * @param destination: a point
 * @return: the shortest path 
 */
let min = Number.MAX_VALUE;
const shortestPath = function (grid, source, destination) {
    // write your code here
    min = 999;
    helper(grid, source, destination, 0);
    if (min === 999) return -1;
    return min - 1;
}
const helper = function(grid, source, destination, count) {
    const x = source.x;
    const y = source.y;
    if (x == destination.x && y == destination.y) {
        if (count++ < min) min =  count;
        return;
    }
    if(x >= grid.length || x < 0 || y >= grid[0].length || y < 0 ||  grid[x][y] == 1){
        return;
    }
    console.log([x,y]);
    count++;
    grid[x][y] = 1;
    helper(grid, new Point(x + 1, y + 2), destination, count);
    helper(grid, new Point(x + 1, y - 2), destination, count);
    helper(grid, new Point(x - 1, y + 2), destination, count);
    helper(grid, new Point(x - 1, y - 2), destination, count);
    helper(grid, new Point(x + 2, y + 1), destination, count);
    helper(grid, new Point(x + 2, y - 1), destination, count);
    helper(grid, new Point(x - 2, y + 1), destination, count);
    helper(grid, new Point(x - 2, y - 1), destination, count);
    grid[x][y]=0;
}

