const prinToDom = (stringToPrint,divId) => {
  var divElement = document.getElementById(divId)
  divElement.innerHTML += stringToPrint;
}

const domStringMaker = (blogsHere) => {
  var output = '';
  for(i=0; i < blogsHere.length; i++){
    output = "<div class='jumbotron'><h3>" + blogsHere[i].title + blogsHere[i].date + "</h3>" + "<article>" + blogsHere[i].post + "</article>" + "</div>"
    prinToDom(output, "startHere");
  }
}

// XHR 

function iLoad(){
  const data = JSON.parse(this.responseText);
  domStringMaker(data.blogs);
}

function iFail(){
  console.log("I made a mistake");
}

function startApp(){
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", iLoad);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "/json/blogs.json");
  myRequest.send();
}

startApp();