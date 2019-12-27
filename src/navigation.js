
// Hiding and showing divs with nav menu
document.getElementById("homeNav").addEventListener("click", homePage);
function homePage(){
  document.getElementById("start").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("sortingHat").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("slytherin").style.display = "none";
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("hufflepuff").style.display = "none";
};
document.getElementById("aboutNav").addEventListener("click", aboutPage);
function aboutPage(){
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("sortingHat").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("slytherin").style.display = "none";
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("hufflepuff").style.display = "none";
};
document.getElementById("sortingNav").addEventListener("click", sortingPage);
document.getElementById("startButton").addEventListener("click", sortingPage);
document.getElementById("startButton2").addEventListener("click", sortingPage)
function sortingPage(){
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("sortingHat").style.display = "block";
  document.getElementById("characters").style.display = "none";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("slytherin").style.display = "none";
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("hufflepuff").style.display = "none";
};
document.getElementById("characterNav").addEventListener("click", charactersPage);
function charactersPage(){
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("sortingHat").style.display = "none";
  document.getElementById("characters").style.display = "block";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("slytherin").style.display = "none";
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("hufflepuff").style.display = "none";
};
document.getElementById("gryffindorNav").addEventListener("click", gryffindorPage);
function gryffindorPage(){
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("sortingHat").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("gryffindor").style.display = "block";
  document.getElementById("slytherin").style.display = "none";
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("hufflepuff").style.display = "none";
};
document.getElementById("slytherinNav").addEventListener("click", slytherinPage);
function slytherinPage(){
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("sortingHat").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("slytherin").style.display = "block";
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("hufflepuff").style.display = "none";
};
document.getElementById("ravenclawNav").addEventListener("click", ravenclawPage);
function ravenclawPage(){
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("sortingHat").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("slytherin").style.display = "none";
  document.getElementById("ravenclaw").style.display = "block";
  document.getElementById("hufflepuff").style.display = "none";
};
document.getElementById("hufflepuffNav").addEventListener("click", hufflepuffPage);
function hufflepuffPage(){
  document.getElementById("start").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("sortingHat").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("slytherin").style.display = "none";
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("hufflepuff").style.display = "block";
};

//Sorting hat buttons
document.getElementById("gryffindorBtn").addEventListener("click", gryffindorPage);
document.getElementById("slytherinBtn").addEventListener("click", slytherinPage);
document.getElementById("ravenclawBtn").addEventListener("click", ravenclawPage);
document.getElementById("hufflepuffBtn").addEventListener("click", hufflepuffPage);