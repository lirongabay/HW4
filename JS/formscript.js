
const gradeM = document.getElementById("gradeMechina");
const gradeP = document.getElementById("gradePsycometric");

document.getElementById("psycometric").onclick = function () {
    gradeM.disabled = true;

  gradeP.disabled = false;
};


document.getElementById("mechina").onclick = function () {
    gradeP.disabled = true;

gradeM.disabled = false;
};

function validate() {
let ageInput = document.getElementById("age");
let bagrutInput = document.getElementById("gradeBagrut");
let resultMessage = document.getElementById("resultMessage");

 if (bagrutInput.value === "") {
    alert("You should enter a bagrut grade");
    bagrutInput.focus();
  }
  const ageValue = parseInt(ageInput.value);
  if (!Number.isNaN(ageValue) && ageValue > 30) {
    document.getElementById("resultMessage").innerHTML = "You are eligible for admission to any faculty you choose";
    document.getElementById("resultMessage").classList.add("green");
  }
}
