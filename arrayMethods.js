

// 1.concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log('concat:', combined); 

// 2. every
const isPositive = arr1.every(num => num > 0);
console.log('every:', isPositive); 

// 3. fill
const filled = arr1.fill(0, 1, 3);
console.log('fill:', filled); 

// 4. find
const found = arr2.find(num => num > 4);
console.log('find:', found); 

// 5. findIndex
const foundIndex = arr2.findIndex(num => num > 4);
console.log('findIndex:', foundIndex); 

// 6. flat
const nestedArr = [1, [2, [3, 4]], 5];
console.log('flat:', nestedArr.flat(2)); 
// 7. includes
console.log('includes:', arr2.includes(4)); 

// 8. indexOf
console.log('indexOf:', arr2.indexOf(4)); 

// 9. join
console.log('join:', arr1.join('-')); 

// 10. lastIndexOf
const repeatedArr = [1, 2, 3, 2];
console.log('lastIndexOf:', repeatedArr.lastIndexOf(2)); 

// 11. pop
console.log('pop:', repeatedArr.pop(), repeatedArr); 

// 12. push
console.log('push:', repeatedArr.push(5), repeatedArr); 

// 13. reverse
console.log('reverse:', repeatedArr.reverse()); 

// 14. shift
console.log('shift:', repeatedArr.shift(), repeatedArr); 

// 15. unshift
console.log('unshift:', repeatedArr.unshift(7), repeatedArr); 

// 16. slice
console.log('slice:', repeatedArr.slice(1, 3)); 

// 17. some
console.log('some:', repeatedArr.some(num => num > 6)); 

// 18. sort
console.log('sort:', repeatedArr.sort((a, b) => b - a)); 

// 19. splice
console.log('splice:', repeatedArr.splice(1, 2), repeatedArr); 

// 20. toString
console.log('toString:', repeatedArr.toString()); 

// 21. filter
const evenNumbers = repeatedArr.filter(num => num % 2 === 0);
console.log('filter:', evenNumbers); 

// 22. reduce
const sum = repeatedArr.reduce((total, num) => total + num, 0);
console.log('reduce:', sum); 

// 23. map
const doubled = repeatedArr.map(num => num * 2);
console.log('map:', doubled); 

// 24. forEach
console.log('forEach:');
doubled.forEach(num => console.log(num)); 