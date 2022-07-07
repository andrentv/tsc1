const x: string = "Andre";

console.log(x);

//tuplas = tuple
let y: [number, string, string[]];

y = [1, "laptop", ["andre", "pedro"]];

console.log(y);

//object literals -> (prop: value)
const user: { name: string; age: number } = {
  name: "Pedro",
  age: 18,
};

console.log(user);
console.log(user.age);

//any
let a: any = 0;

a = "test";
a = true;
a = [];

// type    alias
type a = number | string;
const userId: a = 2;
const productId: a = "0001";
const typeId: a = 25;

// enum
enum Size {
  P = "Pequeno",
  M = "Medio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: Size.G,
};

console.log(camisa);
console.log(typeof a);

//Functions

function sum(a: number, b: number) {
  return a + b;
}

function greetings(name: String, greet?: string): void {
  console.log(`Olá ${greet} ${name}`);
  return;
}
greetings("Pedro");

function greeting(name: String, greet?: string): void {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  }
  console.log(`Olá ${name}`);
}

greeting("Jose");
greeting("Jose", "Sr");

function showArraysItems<T>(arr: T[]) {
	arr.forEach((item) => {
	console.log(`ITEM: ${item}`);
	});
}

const a1 = [1, 2, 3];
const a2 = ["a","b","c"];

showArraysItems(a1);
showArraysItems(a2);

class User {
 name
 role
 isApproved
 
 constructor(name: string, role: string, isApproved: boolean) {
 	this.name = name
 	this.role = role
 	this.isApproved = isApproved
 	}
 	
 	showUserName() {
 	console.log(`O nome do usuário é ${this.name}`);
 	}
 	
 	showUserRole(canShow: boolean): void {
 	if (canShow) {
 	console.log(`A função do ${this.name} é ${this.role}`);
 	return;
 	}
 	console.log(`Informação Restrita!`);
 	}
 }
 
 const zeca = new User("Zéca","Admin", true);
 
 console.log(zeca.name);

zeca.showUserName();

zeca.showUserRole(true);

interface IVehicle {
	brand: string;
	showBrand(): void;
}

class Car implements IVehicle {
	brand;
	wheels;
	
	constructor(brand: string, wheels: number) {
		this.brand = brand;
		this.wheels = wheels;
	}

	showBrand(): void {
		console.log(`A marca do carro é ${this.brand}`);
		}
}

const fusca = new Car("VW", 4);

fusca.showBrand();

class SuperCar extends Car {
	engine;
	
	constructor(brand: string, wheels: number, engine: number) {
	super(brand, wheels);
	this.engine = engine;
	}
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();



function BaseParameters() {
	return function <T extends {new (...arg: any[]): {} }>(constructor: T) {
		return class extends constructor {
			id = Math.random();
			createdAt = new Date();
		};
	};	
}

@BaseParameters()
class Person {
 name;
 
 constructor(name: string) {
 	this.name = name;
 	}
 }
 
 const sam = new Person("Sam");
 
 console.log(sam);



