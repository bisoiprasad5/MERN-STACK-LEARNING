let student = {
        name: "karan",
        course: "fsd",
        status: "pass",
        fees: "300000"
    }
    // for in loop is usedfor iterartionover object
for (let key in student) {
    console.log(key + ":" + student[key])
}

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))