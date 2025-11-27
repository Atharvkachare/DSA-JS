function linearSearch(arr, target){
    for(let i in arr){
        if(arr[i] === target) return i
    }
    return -1;
}

console.log(linearSearch([1,2,3,4],1)) // Best CAse: O(1)
console.log(linearSearch([1,2,3,4],4))  // Worst Case: O(n)
console.log(linearSearch([1,2,3,4,5],3)) // Average Case: O(n/2)
console.log(linearSearch([1,2,3,4,5,6,7],7))
console.log(linearSearch([1,2,3,4],2))
console.log(linearSearch([1,2,3,4,5,6,7,8,9],6))