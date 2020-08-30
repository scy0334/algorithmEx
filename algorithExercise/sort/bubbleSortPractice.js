const body = document.body;
const container = document.querySelector('.container');
const createBtn = document.querySelector('#jsCreateArr');
const sortBtn = document.querySelector('#jsBubbleSort');
const mergeBtn = document.querySelector('#jsMergeSort');

const arr = [];

// Create RandomArr

function createRandomArr() {
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }
}

const createDiv = () => {
    let div = document.createElement('div');

    createRandomArr();
    
    div.textContent = `[${arr}]`;
    div.classList = 'randomArrays'

    container.append(div);
}

const handleRandomArr = () => {
    let remainingArr = container.querySelector('div');

    if(remainingArr){ 
        container.removeChild(remainingArr);
        arr.length = 0;
    }
    createDiv();
}

//Bubble Sort

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

const handleBubbleSort = () => {
    let div = container.querySelector('div')
    bubbleSort(arr);
    div.textContent = `[${arr}]`;
}

// MergeSort

const merge = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] > rightArr[rightIndex]) {
            result.push(rightArr[rightIndex]);
            rightIndex++
        } else {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        }
    }

    if (leftIndex !== leftArr.length) {
        result = result.concat(leftArr.slice(leftIndex));
    } else {
        result = result.concat(rightArr.slice(rightIndex));
    }

    return result;
}

const mergeSort = (array) => {
    const pivot = Math.floor(array.length / 2);
    const leftArr = array.slice(0, pivot);
    const rightArr = array.slice(pivot);

    if (array.length <= 1) {
        return array;
    }

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const handleMergeSort = (event) => {
    let div = container.querySelector('div')
    const result = mergeSort(arr);
    div.textContent = `[${result}]`;
}

//Selection Sort

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        } 
    }
    return smallestIndex;
}

const selectionSort = (arr) => {
    let newArr = [];
    const solidArr = [...arr]
    for (let i = 0; i < solidArr.length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr.splice(smallest, 1);
    }
    return newArr; 
}

const handleSelection

const init = () => {
    createBtn.addEventListener('click', handleRandomArr);
    sortBtn.addEventListener('click', handleBubbleSort);
    mergeBtn.addEventListener('click', handleMergeSort);
}

init();