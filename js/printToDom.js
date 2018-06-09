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

const domStringMaker = (blogsHere) => {
  var output = '';
  for(i=0; i < blogsHere.length; i++){
    output = "<div class='jumbotron'><h3>" + blogsHere[i].title + blogsHere[i].date + "</h3>" + "<article>" + blogsHere[i].post + "</article>" + "</div>"
    prinToDom(output, "startHere");
  }
}
