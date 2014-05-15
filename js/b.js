
define(['a'], function(a) {
    console.log('b.js:' + a.color);
    return {
        color: a.color,
        width: '120px'
    };
});