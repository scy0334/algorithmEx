const generateNumber = function (max) {
    return Math.floor(Math.random() * max);
  };
  
const makeArr = function (num) {
    const result = [];
    for (let i = 0; i < num; i++) {
      result.push(generateNumber(num));
    }
    return result;
  };

  const arraySwap = (i, j, array) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  const sortArray = (array) => {
    for(let i = 0; i < array.length; i++) {
        let minValue = array[i],
            minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (minValue > array[j]) {
                minValue = array[j];
                minIndex = j;
            } 
        }
        arraySwap(i, minIndex, array);
    }
    return array;
  }

  const init = () => {
      const testArray = makeArr(100);
      return sortArray(testArray);
  }

  init();