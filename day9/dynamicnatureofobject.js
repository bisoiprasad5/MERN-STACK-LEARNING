let obj = {
    name: "student",
    course: "FSD",
    accountbalance: 1000,
    get balance() {
        console.log(this.accountbalance);
    },
    set updatebalance(value) {
        this.accountbalance = value;
    }
}
obj.updatebalance = 500
obj.balance
console.log(obj.student)
obj.name = "new name";
console.log(obj.name)