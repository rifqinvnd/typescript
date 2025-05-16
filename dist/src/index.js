"use strict";
let age = 32;
let course = 'Type Script';
let anything;
let numbers = [1000, 2000];
numbers.forEach(n => n.toFixed);
let user = [1, 'Me', true];
;
let mySize = 2;
function calculateTax(income, taxYear = 2001) {
    if ((taxYear || 2001) < 2000)
        return income * 1.2;
    return income * 1.1;
}
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    console.log(typeof weight);
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
let customers = [];
let log = null;
class Point {
    constructor(_x, y) {
        this._x = _x;
        this.y = y;
    }
    draw() {
        console.log(this._x, this.y);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0) {
            console.log("Cannot less than 0");
            this._x = 0;
        }
        else
            this._x = value;
    }
}
let point = new Point(1, 2);
let x = point.x;
console.log(x);
point.x = 2;
console.log(point.x);
//# sourceMappingURL=index.js.map