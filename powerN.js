const myPow = function (x, n) {
    // write your code here
    if (n === 0)
        return 1;
    if (n === 1)
        return x;
    if (n === -1)
        return 1/x;
    
    /**
     * To avoid exceeding time limit, good practice:
     *  When there is a duplicated expression, store it in a variable to avoid 
     *      calculate it mutiple times.
     */
    let half_pow = myPow(x, parseInt(n/2));
    
    if (n % 2 === 0) {
        return half_pow * half_pow; 
    } else {
        if (n > 0)
            return x * half_pow * half_pow;
        else {
            return (1/x) * half_pow * half_pow;
        }
    }
}
