const ftoc = function(temperature) {
  return Math.round(((temperature - 32)/1.8)*10)/10;
};

const ctof = function(temperature) {
  return Math.round((temperature*1.8 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
