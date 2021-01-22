// Set Marriage Status
// single | married | head
let status = 'married'

// Set Income Amount
let income = 115000

// Set Amount of Children
let children = 4

// Initiate Amount of Money
let amount = 0

if (status === 'married') {
    if (income <= 150000) {
        amount = 1200 + 600 * children
    } else if (income > 150000 && income < 174000) {
        amount = Math.round(1200 - (income - 150000)/1000 * 50) + 600 * children
    } else {
        amount = 600 * children
    }
} else if (status === 'head') {
    if (income <= 112500) {
        amount = 600 + 600 * children
    } else if (income > 112500 && income < 124500) {
        amount = Math.round(600 - (income - 112500)/1000 * 50) + 600 * children
    } else {
        amount = 600 * children
    }
} else {
    if (income <= 75000) {
        amount = 600
    } else if (income > 75000 && income < 87000) {
        amount = Math.round(600 - (income - 75000)/1000 * 50)
    } else {
        amount = 0
    }
}

console.log(amount)