const myArr = [1, 2, 3, 4, "Akash", 9]; // brackets ke andar...

const myHeroes = ["spiderman", "batman", "superman", "ironman", "thor"];

const buyList = ["milk", "bread", "eggs", "butter", "cheese"];

console.log(buyList[4]); // cheese

buyList.push("chocolate"); // add element at the end* of the array

console.log(buyList); // [ 'milk', 'bread', 'eggs', 'butter', 'cheese', 'chocolate' ]

const newArr = myArr.join();

console.log(myArr); // [ 1, 2, 3, 4, 'Akash', 9 ]
console.log(newArr); // 1,2,3,4,Akash,9


const myNewArr1 = myArr.slice(1, 4); // 1 se 4 tak ka slice lega (4 nahi lega)
console.log(myNewArr1); // [2, 3, 4]  

// splice() method original array ko change karega
const myNewArr2 = myArr.splice(1, 4); // 1 se 4 tak ka slice itna wo array mai se hata dega
console.log(myArr); // [ 1, 9 ]
console.log(myNewArr2); // [ 2, 3, 4, 'Akash' ]


/*

js arrays are resizable*
zero based index
arrays are mutable*

javascript array copy operations create shallow copies (original mai bhi change hoga...)  ...

shallow copy of an object is a copy whose properties share the same references (point to the same
underlying values) as those of the original object. In other words, a shallow copy is a new object that contains
references to the same values as the original object, rather than creating new copies of those values.

array mai prototype hota hai...

--- array methods ---

1. push() - add element at the end of the array
2. pop() - remove last element of the array

3. unshift() - add element at the beginning of the array -
 little bit slow because it has to shift all the elements
4. shift() - remove first element of the array

5. splice() - add or remove elements from the array
6. slice() - create a shallow copy of a portion of an array into a new array object

7. concat() - merge two or more arrays
8. join() - join all elements of an array into a string

9. indexOf() - find the index of an element in the array
10. lastIndexOf() - find the last index of an element in the array
11. includes() - check if an element is present in the array
12. find() - find the first element that satisfies a condition
13. findIndex() - find the index of the first element that satisfies a condition
14. filter() - create a new array with all elements that satisfy a condition
15. map() - create a new array with the results of calling a function on every element in the array
16. reduce() - apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
17. reduceRight() - apply a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
18. forEach() - execute a function for each element in the array
19. every() - check if all elements in the array satisfy a condition
20. some() - check if at least one element in the array satisfies a condition
21. sort() - sort the elements of the array
22. reverse() - reverse the order of the elements in the array
23. fill() - fill all elements of an array with a static value
24. copyWithin() - shallow copy part of an array to another location in the same array
25. flat() - create a new array with all sub-array elements concatenated into it recursively up to the specified depth
26. flatMap() - create a new array with the results of calling a function on every element in the array, and flatten the result into a new array
27. keys() - return a new Array Iterator object that contains the keys for each index in the array
28. values() - return a new Array Iterator object that contains the values for each index in the array
29. entries() - return a new Array Iterator object that contains the key/value pairs for each index in the array
30. from() - create a new array from an array-like or iterable object
31. isArray() - check if a value is an array
32. of() - create a new array with a variable number of arguments, regardless of number or type of the arguments
33. toString() - convert the array to a string
34. toLocaleString() - convert the array to a string, using locale-specific conventions
35. toLocaleUpperCase() - convert the array to a string, using locale-specific conventions and convert to uppercase
36. toLocaleLowerCase() - convert the array to a string, using locale-specific conventions and convert to lowercase

*/

