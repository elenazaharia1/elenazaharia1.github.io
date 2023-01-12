var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

// var pageIds = ["home", "skills", "languages", "projects"];

function hideAllPages() {
  // var pages = document.querySelectorAll(".page");
  // pages.forEach(function (page) {
  //   console.info("inside pages", page.id);
  // });
  // pageIds.forEach(function (page) {
  //   hide(pageIds);
  // });
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

displayPage("home");
