// Investigating

const accountId = 6644;
let accountEmail = "goku@mytrumail.com";
var accountPassword = "12345678";
accountCity = "Jaipur";

// accountId = 2  //Not Allowed / Error coz const can't change

accountEmail = "yash@gmail.com"; // no Error because let Value can be change/update

accountPassword = "664485"; // no Error because var can be also updated or changed

let noValue; // if variable have no value than it will be undefined


/*so if both var and let change its value than why we are using both ????
because in early days js have no control on scopes(Scopes-{}) or was  unaware of it,  if someone try to change 
something that use var as keyword than change occur everywhere in the file with 
          (var with same name e.g var a = 3, var a = 6 now new value of a is 6 )
                    to solve this problem js introduced let 

Prefer not to use var
because of issue in block scope and functional scope


Note :-  Never ever use var, use let (- _|_ -)


because of issue in block scope and functional scope
and also var add it's value to the window object(feature that provide by browser to js )
due to which user Date expose 
let didn't add its value to window object
*/


accountCity = "Bihar"; // No Error because it also use var/let, if no keyword is used


// console.log(accountCity)
// we can use other method to print data like console.table([all variables name])
console.table([accountId, accountEmail, accountPassword, accountCity, novalue]); //This will print data in Tabular Form
