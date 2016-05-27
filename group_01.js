/**
  Prime - Nu Live Solve of the Group Bonus Challenge.
  5/27/16 - Millie Walsh
**/

//-- Data - Global State --//
// individual employee arrary formatted
// [name , number, salary, rating]
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

// -- Helper Funtions -- //

/**
  function calcBonus takes an individual array
  and outputs new array of bonus information.
**/
function calcBonus(individual){
  //marshal variables and give them useful names
  var empName = individual[0];
  var empNumber = individual[1];
  var empSalary = Number(individual[2]);
  var empRating = individual[3];

  console.log('Processing ', empName);

  var bonusPercentage; //in decimals

  //rating calculation
  switch (empRating) {
    //assuming rating from 0-5, no negatives
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

  //employee number <= 4, get additional 5%
  if (empNumber.length <= 4) {
    bonusPercentage += 0.05;
  }

  //salary > than 65000, get 1% less
  if(empSalary > 65000){
    bonusPercentage -= 0.01;
  }

  //no bonus can be above 13%
  if(bonusPercentage > 0.13){
    bonusPercentage = 0.13;
  }

  var bonus = Math.round(empSalary * bonusPercentage);
  var adjustedComp = empSalary + bonus;

  // build final array to be returned
  // [name, percent, adjusted comp, bonus]
  var newEmpArr = [empName, bonusPercentage.toLocaleString('percent', {style: 'percent'}), localeDollars(adjustedComp), localeDollars(bonus)];
  return newEmpArr;
}

/**
function localeDollars takes a number and converts
it to a USD representation as a string.
**/
function localeDollars(dollar){
  return dollar.toLocaleString('USD', {style: 'currency', currency: 'USD'});
}

// -- Main Execution -- //
for (var i = 0; i < employees.length; i++) {
  console.log(calcBonus(employees[i]));
}
