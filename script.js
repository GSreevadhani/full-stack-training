function add(a, b){
    return a + b;
}

const mul = (a,b) => {
    return a * b;
}

console.log(add(2, 3)); 
console.log(mul(2, 3)); 

const obj = {
    name: "john",
    age: 30,
    message: function() {
        let name = obj.name;
        return `Hello ${name}`
    }
};
console.log(obj.name);
console.log(obj.message());

const numbers = [1, 2, 3, 4, 5];
const mappednum = numbers.map((num) => num * 2);
console.log(mappednum);

const modtwonum = numbers.filter((num) => num%2==0);
console.log(modtwonum);

const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
]
const prices = products.reduce((acc, n) => acc+n.price, 0);
console.log(prices);

const user = {name: "Alice", age: 25, city: "New York"};
const {name, age, city} = user;
console.log(age); 

//spread operator ...
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [9, 10];
const copy = [...arr1,6,7,8,...arr2];
console.log(copy); 

//destructuring
const [first, second, third, ...spread] = numbers;
console.log(spread);

function arguments(...args){
    return args;
}
console.log(arguments(1, 2, 3, 4, 5));

function call(name, callback){
    callback();
    return `${name} from outside callback`;
}
console.log(call('function',() => {console.log('callback function')}));

async function fetchUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchUsers();