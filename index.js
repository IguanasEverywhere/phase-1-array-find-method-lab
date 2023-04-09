// code your solution here
function superbowlWin(arr) {
  let wonSuperbowlObj = arr.find((obj) => {
    return obj.result === 'W';
  });

  return wonSuperbowlObj ? wonSuperbowlObj.year : undefined;

}