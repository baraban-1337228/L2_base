function findMissing(list) {  
  let len = list.length;
  let step = (list[len - 1] - list[0]) / len;

  for (let i = 0; i < len - 1; i++) {
    if (list[i + 1] - list[i] !== step) {
      return list[i] + step;
    }
  }
}
