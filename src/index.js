
exports.min = function min(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0
  } else {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min
  }
}

exports.max = function max(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0
  } else {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max
  }
}

exports.avg = function avg(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0
  } else {
    return array.reduce((a, b) => a + b) / array.length
  }
}


