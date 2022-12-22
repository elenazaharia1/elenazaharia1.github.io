var skillsEl = document.getElementById("skills-list");

// var oldText = skillsEl.innerHTML;

// skillsEl.innerHTML = oldText + "<li>JS</li>";
// skillsEl.innerHTML += '<li class="favourite">HTML</li>';
// skillsEl.innerHTML += '<li class="favourite">CSS</li>';

var skills = ["HTML", "CSS", "JS", "Drive"];

// skillsEl.innerHTML += "<li>" + skills[0] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[1] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[2] + "</li>";

// var skillsHTML = "";

// skillsHTML += "<li>" + skills[0] + "</li>";
// skillsHTML += "<li>" + skills[1] + "</li>";
// skillsHTML += "<li>" + skills[2] + "</li>";

// skillsEl.innerHTML = skillsHTML;

var skillsHTML = "";
var i = 0;

// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;

for (var i = 0; i < skills.length; ) {
  skillsHTML += "<li>" + skills[i] + "</li>";
  i++;
}

skillsEl.innerHTML = skillsHTML;
