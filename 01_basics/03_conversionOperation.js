let score = "yash"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);


//If we covert a number like "56" it gets easily converted into a number => 56

//But if we convert a value like "56xyz" it's not getting converted and it gives a value => Nan(Means - Not any Number) but the type of Nan is Number (It's a little bit confusing)

//if we convert - 
// true => 1;
// false => 0;

let isLoggedIn = "yash"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true
// 0 => false
//"" => false
// "yash" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);