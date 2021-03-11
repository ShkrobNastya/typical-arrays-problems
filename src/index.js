
exports.min = function min (array) {
  let minim;
  if (!array || (array.length === 0)) {
    return 0;
  } else {
    minim = array[0];
    for (let i=1; i<array.length; i++){
      if (array[i]<minim) {
        minim=array[i];
      }
    }
    return minim;
  }
};

exports.max = function max (array) {
  let maxim;
  if (!array || (array.length === 0)) {
    return 0;
  } else {
    maxim = array[0];
    for (let i=1; i<array.length; i++){
      if (array[i]>maxim) {
        maxim=array[i];
      }
    }
    return maxim;
  }
};

exports.avg = function avg (array) {
  let sum=0;
  if (!array || (array.length === 0)) {
    return 0;
  } else {
    for (let i=0; i<array.length; i++){
      sum+=array[i];
    }
    return sum/(array.length);
  }
};
