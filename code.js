// Create your function here
// Log your output to the console.

//num % 2 ==0 even
//num % 2 ==1 odd

//snapCrackle(12) should display the string
//Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12,
//CHRIS + BREAKROOM #2
//RANDY DEMO

function snapCrackle(b) {
  let c = " ";
  for (let i = 1; i <= b; i++) {
    if (i % 2 == 1 && i % 5 == 0) {
      c += "snapcrackle, " + i;
    } else if (i % 5 == 0) {
      c += "crackle, " + i;
    } else if (i % 2 == 1) {
      c += "snap, " + i;
    } else {
      c += " ,";
    }
  }
  console.log(c);
}
snapCrackle(15);
