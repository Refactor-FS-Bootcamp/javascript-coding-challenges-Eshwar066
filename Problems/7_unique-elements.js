function ElementsofArr1(arr1, arr2) {
  const result = [];

 arr1.forEach(element => {
      if(!arr2.includes(element)){
        result.push(element);
      }
 });

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3,4,5,6];
const Result = ElementsofArr1(arr1, arr2);
console.log(Result); 