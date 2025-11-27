function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while (start <= end){
        let middle = Math.floor((start + end) / 2);

        if(arr[middle] < target){
            start = middle + 1;
        } else if(arr[middle] > target){
            end = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}


console.log(binarySearch([1,2,3,4,5], 1)) // Best Case:-O(1)
console.log(binarySearch([1,2,3,4,5,6,7], 4)) // Average Case:- O(lon(n))
console.log(binarySearch([1,2,3,4,5,6], 6)) // Worst Case:- O(log(n))   