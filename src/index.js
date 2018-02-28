module.exports = function getZerosCount(number) {
  let count = 0;
  for(let i = 244140625; i>1; i=i/5) {
    count+= Math.floor(number/i);
  }
  return count;
}
