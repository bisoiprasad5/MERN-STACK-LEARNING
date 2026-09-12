// theseworkson array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map:iterates all the valuyes
nums.map((val, indx, arr) => {
    return arr[indx] = val * 5;
})
console.log(nums)

//filter
let res = nums.filter((val, index, arr) => val % 2 == 0)
console.log(res)
let ex = [1, 2, 3, 4]
    //reduce
let sum = nums.reduce((acc, val) => acc + val)
console.log(sum)