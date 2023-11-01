const array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
array[0] = 10;
console.log(array);
array.push(12);
console.log(array);
let summary = 0;
for(let i = 0; i < array.length; i++) {
    summary += array[i];
}
console.log(`${summary}`);
for (let i = 0; i < array.length; i ++) {
    console.log(array[i]);
}
const words = ['jazz', 'hiphop', 'rap', 'classic', 'piano'];
for (let i = 0; i < words.length; i ++) {
    if (words[i].length > 5) {
        console.log(words[i])
    }
}
const arrayMax = Math.max(...array);
console.log(arrayMax);
for (let i = 0; i < array.length; i ++) {
    if (array[i] % 2 == 0) {
        console.log(array[i])
    }
}