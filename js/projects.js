const prinToDom = (stringToPrint,divId) =>
{
  var divElement = document.getElementById(divId)
  divElement.innerHTML += stringToPrint;
}

const createProjectCards =(projectsHere) =>
{
  var output = '';
  for(i=0; i < projectsHere.length; i++){
    output = "<div class='jumbotron'>" + "<span><img class='puppy' src='" + projectsHere[i].imageUrl + "'></span>" + "<h3>" + projectsHere[i].title + "</h3>" + "<article>" + projectsHere[i].description + "</br><a href='" + projectsHere[i].githubUrl + "'>You can find the project here." + "</a></article></div>"
    prinToDom(output, "startHere");
  }
}



// XHR 

function iLoad(){
  const data = JSON.parse(this.responseText);
  createProjectCards(data.projects);
}

function iFail(){
  console.log("I made a mistake");
}

function startApp(){
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", iLoad);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "/json/projects.json");
  myRequest.send();
}

startApp();