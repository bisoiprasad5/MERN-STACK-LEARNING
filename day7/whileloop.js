//run the codewhencondition istrueandn keep runninguntil condition became falselet
// you are given an number num,tell me how many times u can divide it by .
let num = 25;
let count = 0;
while (num % 5 == 0) {
    count++;
    num = num / 5;
}
console.log(count)