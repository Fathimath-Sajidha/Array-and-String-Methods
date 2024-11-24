

// 1. concat
const str1 = "Hello";
const str2 = "World";
console.log('concat:', str1.concat(' ', str2)); 

// 2. includes
console.log('includes:', str1.includes("ell")); 

// 3. indexOf
console.log('indexOf:', str1.indexOf("e")); 

// 4. lastIndexOf
const repeatedStr = "abca";
console.log('lastIndexOf:', repeatedStr.lastIndexOf("a")); 

// 5. padEnd
console.log('padEnd:', str1.padEnd(10, '!')); 

// 6. padStart
console.log('padStart:', str1.padStart(10, '!')); 

// 7. repeat
console.log('repeat:', str1.repeat(3)); 

// 8. replace
console.log('replace:', repeatedStr.replace("a", "x")); 

// 9. search
console.log('search:', str1.search("e")); 

// 10. slice
console.log('slice:', str1.slice(1, 4)); 

// 11. split
const sentence = "Learn JavaScript";
console.log('split:', sentence.split(" ")); 

// 12. startsWith
console.log('startsWith:', str1.startsWith("He")); 

// 13. substr
console.log('substr:', str1.substr(1, 3)); 

// 14. substring
console.log('substring:', str1.substring(1, 4)); 

// 15. toLowerCase
console.log('toLowerCase:', str1.toLowerCase()); 

// 16. toUpperCase
console.log('toUpperCase:', str1.toUpperCase()); 

// 17. trim
const paddedStr = "  hello  ";
console.log('trim:', paddedStr.trim()); 

// 18. trimEnd (or trimRight)
console.log('trimEnd:', paddedStr.trimEnd()); 

// 19. trimStart (or trimLeft)
console.log('trimStart:', paddedStr.trimStart()); 

// 20. charAt
console.log('charAt:', str1.charAt(0)); 

// 21. charCodeAt
console.log('charCodeAt:', str1.charCodeAt(0)); 
