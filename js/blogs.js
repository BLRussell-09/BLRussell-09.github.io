var blogs = [
  {
    id: "blog1",
    title: "Start",
    date: " 2.27.2018",
    post: "This week I practiced some css and worked on my personal site. I started working on it in bootstrap and made the mistake of using bootstrap 4.0 with 3.3 syntax. Funny thing about that is, it doesnt work. Also deciding how to style the page was difficult, as I am not very creative. Eventually I just decided to throw the elements on the page and make it look 'not ugly' tldr: I learned how to make a branch in github, and confirmed my lack of creativity in website design."
  },
  {
    id: "blog2",
    title: "Trouble With Arrays",
    date: " 3.6.18",
    post: "Last week I worked on some challenges involving arrays, and looping through them. It was tricky work, but I managed to find some very helpful array methods to make the tasks a bit easier. Notably the filter method and the map methods were extremely useful to me. I also managed to use the filter method to create an Array prototype called .diff(). The .dif() prototype finds the difference between two arrays, and I was able to use this to solve multiple problems."
  }
]
function prinToDom(stringToPrint,divId){
  var divElement = document.getElementById(divId)
  divElement.innerHTML += stringToPrint;
}

function domStringMaker(blogsHere){
  var output = '';
  for(i=0; i < blogsHere.length; i++){
    output = "<div class='jumbotron'><h3>" + blogsHere[i].title + blogsHere[i].date + "</h3>" + "<article>" + blogsHere[i].post + "</article>" + "</div>"
    prinToDom(output, "startHere");
  }
}

domStringMaker(blogs)