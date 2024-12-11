// Create your function here
// Log your output to the console.

//num % 2 ==0 even
//num % 2 ==1 odd

//snapCrackle(12) should display the string
//Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12,
//CHRIS + BREAKROOM #2
//RANDY DEMO
//Cesar

function snapCrackle(maxValue) {
  let c = ""
  for (let i = 1; i <= maxValue; i++) {
    if (i % 5 === 0 && i % 2 != 0) {
      c += "snapCrackle, "
    } else if (i % 5 === 0) {
      c += "Crackle, "
    } else if (i % 2 != 0) {
      c += "snap, "
    } else if (i % 2 === 0) {
      c += i + ", "
    }
  }
  return c
}
console.log(snapCrackle(12))
