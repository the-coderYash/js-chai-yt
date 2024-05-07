let score = "goku"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);


//If we covert a number like "56" it gets easily converted into a number => 56

//But if we convert a value like "56xyz" it's not getting converted and it gives a value => Nan(Means - Not any Number) but the type of Nan is Number (It's a little bit confusing)