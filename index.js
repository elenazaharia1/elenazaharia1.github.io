var skillsEl = document.getElementById("skills-list");

var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 4 },
  { name: "JS", endorcements: 4 },
  { name: "Drive", endorcements: 2 },
];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML +=
    "<li>" + skills[i].name + " - " + skills[i].endorcements + "</li>";
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

//initMenu functie
function initMenu() {
  console.warn("init menu");

  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        displayPage(id);
      }
    });
}

displayPage("home");
initMenu();
