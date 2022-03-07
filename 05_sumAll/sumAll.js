const sumAll = function(first, second) {
    let sum = 0;

    if(typeof(first)!=='number' || typeof(second)!=='number' || first<0) return "ERROR";
    if(second<first){
        let swap = first;
        first = second;
        second = swap;
    }
    for (i = first; i<=second;i++){
        sum+= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
