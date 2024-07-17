
let num1 = 7;
let num2 = 13;

console.log(num1 + num2);


let a = '12';
console.log(Number(a));


let k = Math.floor(Math.random() * 100);
if (k % 2 === 0) {
    console.log(k + ' juft son');
} else {
    console.log(k+ ' toq son');
}


let q = prompt('Soz kiriting:');
if (q.toLowerCase() === 'mars') {
    console.log('Mars');
} else {
    console.log('Mars It school');
}


let p = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];
let s = [];

for (let i = 0; i < p.length; i++) {
    if (p[i].length > 5) {
        s.push(p[i]);
    }
}

console.log(s);


for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + ' juft son');
    } else {
        console.log(i + ' toq son');
    }
}
