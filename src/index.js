module.exports.zeroArray = (size, arr) => {
  if (size !== arr.length)
    return "NO";
  const sum = arr.reduce((accumulator, currentValue) => (
    accumulator + currentValue));
  if (sum % 2)
    return "NO";
  const largerItem = Math.max(...arr);
  if (largerItem > sum - largerItem)
    return "NO";
  return "YES";
}
