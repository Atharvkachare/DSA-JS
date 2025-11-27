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




# 🔎 Binary Search in JavaScript

Binary Search is that classic old-school algorithm your CS professors worship — fast, elegant, and efficient.
Instead of scanning every element like Linear Search, it divides the array like a warrior slicing through chaos.

This repo contains a clean JavaScript implementation of Binary Search with example test cases and a quick breakdown of the time complexity.

---

## 📌 Code

```javascript
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
```

---

## 🧪 Example Usage

```javascript
console.log(binarySearch([1,2,3,4,5], 1));  // Best Case: O(1)
console.log(binarySearch([1,2,3,4,5,6,7], 4)); // Average Case: O(log n)
console.log(binarySearch([1,2,3,4,5,6], 6)); // Worst Case: O(log n)
```

---

## ⏱️ Time Complexity

| Case        | Complexity |
| ----------- | ---------- |
| **Best**    | O(1)       |
| **Average** | O(log n)   |
| **Worst**   | O(log n)   |

Binary Search is insanely fast because the search space cuts in half every step.
But remember — **the array must be sorted**.

---

## 🧠 How It Works

1. Start with the entire list
2. Find the middle element
3. Compare it with the target
4. If the middle is bigger → search left
5. If smaller → search right
6. Repeat until the element is found or the list collapses

---

## 🎯 When to Use Binary Search

* Array is **sorted** (this is mandatory)
* You want fast search performance
* Dataset is large and you want better than O(n)

---

## 📎 Author

**Atharvkachare** — building DSA muscle in JavaScript to prepare for big tech interviews.



