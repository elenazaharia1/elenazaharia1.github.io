var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function displayHome() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function displaySkills() {
  console.warn("trebuie sa afisam skills page");

  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
}

function displayLanguages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "block";
}

function displayProjects() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

displayHome();
