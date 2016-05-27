var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function calcBonus(individual){
  console.log(individual[0]);
}

for (var i = 0; i < employees.length; i++) {
  calcBonus(employees[i]);
}
