console.log("Hello Winc Academy students");

// if else statements

const age = 19;

const isFemale = true;

const driverStatus = "bob";

const firstName = "Sarah";

const drinks_bill = 54;

const totalAmount = 65;

if (age >= 18) {
  console.log("You can enter");
} else if (age > 15) {
  console.log("You are 17 still too young");
} else {
  console.log("You are not over 18");
}

if (isFemale === true) {
  console.log("Because you are a female so you have a discount");
} else {
  console.log("You are not a female");
}

if (driverStatus == "bob") {
  console.log("You can drive back home safe");
} else {
  console.log("You are too drunk to drive");
}

if (age >= 18 && age <= 25) {
  console.log("You get a free beer!");
} else {
  console.log("You don't get a discount");
}

if (firstName === "Sarah" || firstName === "Bram") {
  console.log("Sarah, You get a free beer!");
} else {
  console.log("You don't get a discount");
}

if (totalAmount >= 100) {
  console.log("You get a free bottle of champagne");
} else if (totalAmount >= 50) {
  console.log("You get a free portion of nachos");
} else if (totalAmount >= 25) {
  console.log("You get free (veggie) bitterballen");
} else {
  console.log("Sorry, no discount for you");
}

/* if (totalAmount >= 25) {
  console.log("you get free (veggie) bitterballen");
} else if (totalAmount >= 50) {
  console.log("You get a free portion of nachos");
} else if (totalAmount >= 100) {
  console.log("You get a free bottle of champagne");
} else {
  console.log("Sorry, no discount for you");
}
 */
