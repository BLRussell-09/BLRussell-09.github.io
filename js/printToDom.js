const prinToDom = (stringToPrint,divId) =>
{
  var divElement = document.getElementById(divId)
  divElement.innerHTML += stringToPrint;
}

const createProjectCards =(projectsHere) =>
{
  var output = '';
  console.log(projectsHere);
  projectsHere.forEach(element =>
  {
    if (element.available == true)
    {
      output = "<div class='jumbotron'>" + "<span><img class='puppy' src='" + element.imageUrl + "'></span>" + "<h3>" + element.title + "</h3>" + "<article>" + element.description + "</br><a href='" + element.githubUrl + "'>You can find the source code here." + "</a></br><a href='" + element.url + "'>You can find the site here." + "</a></article></div>"
      prinToDom(output, "startHere");
    }
  });

  // for(i=0; i < projectsHere.length; i++){
  //   console.log(projectsHere[i])
  //   if (projectsHere[i].available = true)
  //   {
  //     output = "<div class='jumbotron'>" + "<span><img class='puppy' src='" + projectsHere[i].imageUrl + "'></span>" + "<h3>" + projectsHere[i].title + "</h3>" + "<article>" + projectsHere[i].description + "</br><a href='" + projectsHere[i].githubUrl + "'>You can find the project here." + "</a></article></div>"
  //     prinToDom(output, "startHere");
  //   }
  // }
}

const printMe = (domString) =>
{
  $('#startHere').prepend(domString);
}

const domStringMaker = (blogsHere) => {
  var output = '';
  for(i=0; i < blogsHere.length; i++){
    output = "<div class='jumbotron blogCard' data-firebase-id='" + blogsHere[i].id + "'><h3>" + blogsHere[i].title + "<p> </p>" + blogsHere[i].date + "</h3>" + "<article>" + blogsHere[i].post + "</article>" +"<button class='btn btn-danger deleteBlog'>" + 'Delete' + "</button>" + "</div>"
    printMe(output);
  }
}
