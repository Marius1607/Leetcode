/*
Title: Memoize 
Link: https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
Nr: 2623
JS challenge nr: 10.
*/


function memoize(fn) {
    const cache = {};
    return function(...args) {
        const argsStr = args.join('_');
        if (cache[argsStr] != undefined) {
            return cache[argsStr];
        }

        cache[argsStr] = fn(...args);
        return cache[argsStr];
    }
}
