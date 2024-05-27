// if statement 

// if (condition) { }   // condition :  true => run ; false => skip
// comparision operator: <, >, <=, >=, ==, !=, ===, !== ;            // ' = ' (assignment opt)

const temp = 45;
if (temp <= 45) {
    console.log("Temperature may be equal or less than 45 degree");
} else {
    console.log("Temperature is greater than 45 degree")
}

const balance = 1000;
if( balance > 500) console.log("High balance");              // dont preffer; we can use this like: console.log("High balance"), console.log("Low balance");

  const userLoggedIn = true;
  const userDebitCard = true;
  const loggedInFromGoogle = false;
  const loggedInFromEmail = true;

  if(loggedInFromGoogle || loggedInFromEmail){
    console.log("You are logged in.")
  }else{
    console.log("login first.")
  }

  if(userLoggedIn && userDebitCard){
    console.log("Eligible to buy this course.")
  }else{
    console.log("Not eligible.")
  }




