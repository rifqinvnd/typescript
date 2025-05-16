let age: number = 32;
let course: string = 'Type Script';
let anything;

let numbers: number[] = [1_000, 2_000];

numbers.forEach(n => n.toFixed);

let user: [number, string, boolean] = [1, 'Me', true];
// user.push(3); // Should be error

const enum Size { Small = 1, Medium = 2, Large = 3 };

let mySize: Size = Size.Medium;

function calculateTax(income: number, taxYear: number = 2001): number {
    // Either define default in the variable or in function parameters
    if ((taxYear || 2001) < 2000) 
        return income * 1.2;
    
    return income * 1.1;
}

// calculateTax(10_000, 2022);

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};

// console.log(employee);

// employee.id = 2; // error

function kgToLbs(weight: number | string): number {
    console.log(typeof weight);

    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }

}

// kgToLbs(10);
// kgToLbs('10kg');

// let weight: number & string;

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

// console.log(typeof textBox);
// console.log(textBox);

// Literal
type Quantity = 50 | 100;
let quantity: Quantity;

// null
function greet(name: string | null | undefined ) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
};

// greet(null);

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null: {birthday: new Date() };
}

let customer = getCustomer(1);

// Optional property access operator
// console.log(customer?.birthday?.getFullYear());

// Optional element access operator
let customers: number[] = [];

// console.log(customers?.[0])

// Optional call
let log: any = null;

// console.log(log?.('a'));

class Point {
    // 2 ways of defining constructor:
    // 1. initializing like this
    // private x?: number;
    // private y?: number;

    // 2. initializing in constructor function using private/public
    constructor (private _x?: number, private y?: number) {
        // this.x = x;
        // this.y = y;
    }

    public draw() {
        console.log(this._x, this.y);
    }

    public get x(): number | undefined {
        return this._x;
    }

    public set x(value: number) {
        if (value < 0) {
            console.log("Cannot less than 0");
            this._x = 0;
        } else
            this._x = value;

    }

}

let point = new Point(1, 2);
let x = point.x;

console.log(x); 

point.x = 2;

console.log(point.x)
