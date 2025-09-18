// 1. name
// 2. arguments
// 3. content
// 4. return value
// 5. default values

function min (left, right = 10) {
  if (left < right) {
    return left;
  }
  return right;
}
