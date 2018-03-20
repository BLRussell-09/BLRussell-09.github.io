var projects = [
  {
    id: "project1",
    title: "Project Puppy Power",
    imageUrl: "../img/dog.jpg",
    description: "my first project",
    githubUrl: "https://github.com/BLRussell-09/BLRussell-09.github.io/blob/master/pages/projects.html"
  },
  {
    id: "project2",
    title: "Project Kitty Cabin",
    imageUrl: "../img/cat.jpg",
    description: "my second project",
    githubUrl: "https://github.com/BLRussell-09/BLRussell-09.github.io/blob/master/pages/projects.html"
  },
  {
    id: "project3",
    title: "Project Kitty Cabin",
    imageUrl: "../img/cat2.jpg",
    description: "my third project",
    githubUrl: "https://github.com/BLRussell-09/BLRussell-09.github.io/blob/master/pages/projects.html"
  },
  {
    id: "project4",
    title: "Project Pig Pen",
    imageUrl: "../img/piggie.jpg",
    description: "my final project",
    githubUrl: "https://github.com/BLRussell-09/BLRussell-09.github.io/blob/master/pages/projects.html"
  },
]

function prinToDom(stringToPrint,divId){
  var divElement = document.getElementById(divId)
  divElement.innerHTML += stringToPrint;
}

function createProjectCards(projectsHere){
  var output = '';
  for(i=0; i < projectsHere.length; i++){
    output = "<div class='jumbotron'>" + "<span><img class='puppy' src='" + projectsHere[i].imageUrl + "'></span>" + "<h3>" + projectsHere[i].title + "</h3>" + "<article>" + projectsHere[i].description + "</br><a href='" + projectsHere[i].githubUrl + "'>You can find the project here." + "</a></article></div>"
    prinToDom(output, "startHere");
  }
}

createProjectCards(projects)