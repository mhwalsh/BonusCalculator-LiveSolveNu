
// [Name, emp num, sal, rating]
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

// calcBonus take an individual array and outputs new bonus array
function calcBonus(individual){
  //marshal vars
  var empName = individual[0];
  var empNumber = individual[1];
  var empSalary = Number(individual[2]);
  var empRating = individual[3];

  console.log('Processing ', empName);

  //in decimals
  var bonusPercentage = 0.0;
  //rating calc
  switch (empRating) {
    //assuming no negs
    case 0:
    case 1:
    case 2:
      bonusPercentage = 0.0;
      break;
    case 3:
      bonusPercentage = 0.04;
      break;
    case 4:
      bonusPercentage = 0.06;
      break;
    case 5:
      bonusPercentage = 0.10;
      break;
    default:
      console.log('Not a possible rating.');
      bonusPercentage = 0.0;
  }

  //employee number <= 4
  if (empNumber.length <= 4) {
    bonusPercentage += 0.05;
  }

  //salary greater than 65000
  if(empSalary > 65000){
    bonusPercentage -= 0.01;
  }

  //no bonus above 13%
  if(bonusPercentage > 0.13){
    bonusPercentage = 0.13;
  }

  // [name, percent, adjusted comp, bonus]
  var bonus = Math.round(empSalary * bonusPercentage);
  var adjustedComp = empSalary + bonus;

  var newEmpArr = [empName, bonusPercentage, adjustedComp, bonus];
  return newEmpArr;
}

for (var i = 0; i < employees.length; i++) {
  console.log(calcBonus(employees[i]));
}
