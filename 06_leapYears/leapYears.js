const leapYears = function(years) {
    if (years%4 === 0){
        if (years%100 === 0){
            if (years%400 === 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
