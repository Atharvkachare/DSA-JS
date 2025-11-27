# 🔍 Linear Search in JavaScript

Linear Search is the most fundamental searching technique — the classic OG of algorithms.
It checks each element one by one until the target shows up.

This repository includes a simple and clean JavaScript implementation of the Linear Search algorithm along with example test cases and time complexity analysis.

---

## 📌 Code

```javascript
function linearSearch(arr, target){
    for(let i in arr){
        if(arr[i] === target) return i
    }
    return -1;
}
```

---

## 🧪 Example Usage

```javascript
console.log(linearSearch([1,2,3,4],1))  // Best Case: O(1)
console.log(linearSearch([1,2,3,4],4))  // Worst Case: O(n)
console.log(linearSearch([1,2,3,4,5],3)) // Average Case: O(n/2)
console.log(linearSearch([1,2,3,4,5,6,7],7))
console.log(linearSearch([1,2,3,4],2))
console.log(linearSearch([1,2,3,4,5,6,7,8,9],6))
```

---

## ⏱️ Time Complexity

| Case       | Complexity        |
| ---------- | ----------------- |
| Best Case  | **O(1)**          |
| Average    | **O(n/2) ≈ O(n)** |
| Worst Case | **O(n)**          |

---

## 🧠 How It Works

* Iterate over the array from index `0`
* Compare each element with the `target`
* Return index if found
* If not found, return `-1`

---

## 🎯 When to Use

* Array is **unsorted or sorted **
* Dataset is small or medium-sized
* You want the simplest search method

---

## 📎 Author

Atharvkachare — Building DSA skills in JavaScript for stronger fundamentals.
