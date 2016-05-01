function *a() {
	yield 1;
	yield 2;
	yield 3;
}

let [first, ...rest] = a();
console.log(first, rest);
