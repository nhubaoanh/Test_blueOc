var arr = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];

function getMaxLength(arr) {
    var lengCount = {};

    arr.forEach(item => {
        var len = item.length;
        lengCount[len] = (lengCount[len] || 0) + 1;
     });

     var maxCount = 0;
     var mostFrequentLengths = [];

     for(var len in lengCount){
         if (lengthCount[len] > maxCount) {
            maxCount = lengthCount[len];
            mostFrequentLengths = [Number(len)];
        } else if (lengthCount[len] === maxCount) {
            mostFrequentLengths.push(Number(len));
        }
     }
     return arr.filter(item => mostFrequentLengths.includes(item.length));
}

// Test cases
console.log(getMaxLength(['a', 'ab', 'abc', 'cd', 'def', 'gh'])); // ['ab', 'cd', 'gh']
console.log(getMaxLength(['hello', 'hi', 'hey', 'yo', 'ok']));   // ['hi', 'yo', 'ok']
console.log(getMaxLength(['a', 'bb', 'ccc', 'dddd']));     