function thankYouState() {
  // Hide Active State
  document.getElementById("activeState").style.display = "none";

  // Show Thank You State
  document.getElementById("thankYouState").style.display = "flex";

  // What is the score
  validate();
  score.innerText = `You selected ${theScore} out of 5`;
}

// Find the checked value
let theScore;
function validate() {
  if (document.getElementById("one").checked) {
    theScore = 1;
  } else if (document.getElementById("two").checked) {
    theScore = 2;
  } else if (document.getElementById("three").checked) {
    theScore = 3;
  } else if (document.getElementById("four").checked) {
    theScore = 4;
  } else if (document.getElementById("five").checked) {
    theScore = 5;
  } else {
    theScore = "none";
  }
}
