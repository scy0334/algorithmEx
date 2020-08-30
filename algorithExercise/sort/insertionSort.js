[736, 22, 6, 416, 822, 962, 577, 229, 309, 92, 277, 32, 222, 312, 143, 474, 908, 689, 772, 564]

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j >= 0; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j, j - 1);
            } else {
                break;
            }
        }
    }
    return arr;
}