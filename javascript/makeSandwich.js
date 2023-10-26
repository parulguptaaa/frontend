let bread1=prompt("which bread would you like to have?");
let veggies1=prompt("what r your fav  veggies?");
let sauce1=prompt("which sauce would u like to hv?");
function makeSandwich(bread,veggies,sauce){
    let sandwich=bread+" bread "+veggies+" "+sauce+" sandwich";
    return sandwich;
}
let vegSandwich=makeSandwich(bread1,veggies1,sauce1);
console.log(vegSandwich);