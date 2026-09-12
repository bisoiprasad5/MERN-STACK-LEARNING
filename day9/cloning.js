/*
let obj = {
    name: "student",
    age: 21,
    salary: "1.5L"
}

//shallow clonning
let copyObj = obj;
copyObj.name = "karan"; //impacted originalobject
console.log(obj)
*/

const lodash = require('lodash')
let obj1 = {
        name: "iphone",
        price: 1225,
        intro: function() {
            console.log(`${this.name}= ${this.price}`)
        },
        detail: {
            modell: "14",
            store: "banagalore"
        }
    }
    /*
    //spreadoperatororDestructuring
    let copyobj1 = {...obj1 };
    copyobj1.name = "samsung"
    console.log(obj1)
    console.log(copyobj1)
    copyobj1.intro()
    copyobj1.detail.model = 15; //it willimpact original obj
    console.log(obj1)*/

/*
//object assign:shalloow copy
let copyobj1 = Object.assign(obj1)
copyobj1.name = "samsung"
console.log(obj1)
*/


/*
//stringfy:function will be ignored
let copyobj1 = JSON.parse(JSON.stringify(obj1));
console.log(obj1)
copyibj1.name = "samsung"
copyobj1.detaill.model = 15
console.log(obj1)
console.log(copyobj1)
*/

let copyobj1 = lodash.cloneDeep(obj1);
copyobj1.name = "samsung"
copyobj1.detail.model = 15
console.log(copyobj1)
console.log(obj1)