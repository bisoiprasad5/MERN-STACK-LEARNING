//function declaration,
function add(a, b) {
    console.log(a + b);
}


function mul(a, b) {
    return a * b;
}
add(4, 5);
add(10, 20);
let multi = mul(5, 8)
console.log(multi)


//functionexpression
const sub = function(a, b) {
    return a - b;
}
let subtract = sub(9, 4)
console.log(subtract)

//arrow functionnllet 
let div = (a, b) => a / b;
let divison = div(4, 2);
console.log(divison)


let fullname = function(fname, lname = "bisoi") {
    console.log(fname + lname)
}
fullname("bishnu", "prasad")
fullname("bishnu")


let intro = (name, course, age) => {
    // console.log("my name is" + name + "and i am doing" + course + "and i am " + age + " years old")
    console.log(`my name is ${name} and i am doing ${course},Iam ${age} year old`)
}
intro("Raja,", "UKPTS", 25)