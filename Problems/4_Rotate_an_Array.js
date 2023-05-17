function LeftByOne(array) {
    const rotatedarr = array.slice(1);
    rotatedarr.push(array[0]);
    return rotatedarr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const rotatedarr = LeftByOne(arr);
  console.log(rotatedarr);