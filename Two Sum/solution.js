function twoSum(nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map.has(complement) && map.get(complement) != i) {
      return new Array(i, map.get(complement));
    }
    map.set(nums[i], i);
  }
  return map;
}

console.log(twoSum([0, 2, 7, 15], 9));
