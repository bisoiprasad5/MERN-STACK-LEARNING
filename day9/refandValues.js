let fridge = {
        colddrink: "1L",
        snack: "chips"
    }
    // reference type: obj,arrays
    // shallow copy
let refrigeretor = fridge;
refrigeretor.colddrink = "0.5L"
console.log(fridge)

// value type: primitive
let money = 1000;
let copymoney = money;
copymoney = 500
console.log(money)