//create
let arr = ["mohan", "karan", 1000, "raju"];
console.log(arr[2]);

//update
arr[0] = "raja"
console.log(arr)

//delete
delete arr[2]
console.log(arr)

//methods
console.log(arr.length)

let str = arr.join("*")
console.log(arr)
console.log(str)


//adding atr end
arr.push("hey")
console.log(arr)
    //deletion at end
let deli = arr.pop();
console.log(arr + "and deleted value" + deli)

//unshift : add at starting
arr.unshift("check")
console.log(arr)

//shift
let delv = arr.shift();
console.log(arr + "and deleted value " + delv)

//