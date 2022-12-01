
let y = [34, "hello", true, 2, "test"];

function newArr(array) {

    let n = array.length - 1;

    for(let i = 0; i <= n/2; i++) {
        let z = array[i];
        array[i] = array[n - i];
        array[n - i] = z;
    }
    return array;
}

let x = newArr(y); // ["test", 2, true, "hello", 34];
console.log(x);





let x = [34, "Hello"];

function newArray(array, str) {
        let arr = [];
        for(let i = 0; i < array.length; i++) {
            arr = [str, ...array]
        }
        return arr;
    }
    
    let y = newArray(x, "test");  // ['test', 34, 'Hello'];
    console.log(y);




let x = [0, null, "hello", "", 56, "test", undefined];

let y = x.filter((val) => {
    return val;
})

console.log(y);  // ['hello', 56, 'test'];





let x = [0, null, "hello", "", 56, "test", undefined, "John", 94];

function fil(arr) {
    let filteredArr = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++ ) {
        if(!!arr[i]) {
            filteredArr[j] = arr[i];
            j++;
        }
    }
    return filteredArr;
}

let y = fil(x);
console.log(y); // ['hello', 56, 'test', 'John', 94];
