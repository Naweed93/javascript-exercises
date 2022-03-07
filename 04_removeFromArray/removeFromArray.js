const removeFromArray = function(array) {
    for(i of arguments){
        while(true){
            let index = array.indexOf(i)
            if(index === -1) break;
            array.splice(index, 1)
        }
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
