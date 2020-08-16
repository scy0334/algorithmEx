let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

const checkNum = 22;
const binarySearch = (arr, item) => {
    let low = 0,
        high = arr.length;
    let mid;
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === item) {
            return mid;
        } else if (arr[mid] > item) {
            high = mid - 1;
        } else if (item > arr[mid]) {
            low = mid + 1;
        } else {
            return `${item} is not in the array`
        }
    }
}

// 1~99
// 50 > checkNum
//1~49 25 > checkNum
//1~24 24 > checkNum
//     12 < checkNum
//     18 < checkNum
//     20 < checkNum
//     22 === checkNum
