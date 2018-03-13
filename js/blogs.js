var blogs = [
  {
    id: "blog1",
    title: "Start",
    date: "02/27/2018",
    post: "This week I practiced some css and worked on my personal site. I started working on it in bootstrap and made the mistake of using bootstrap 4.0 with 3.3 syntax. Funny thing about that is, it doesnt work. Also deciding how to style the page was difficult, as I am not very creative. Eventually I just decided to throw the elements on the page and make it look 'not ugly' tldr: I learned how to make a branch in github, and confirmed my lack of creativity in website design."
  }
]

function domStringMaker(blogsHere){
  var output = '';
  for(i=0; i < blogsHere.length; i++){
    output = "<div class='jumbotron'><h3>" + blogsHere[i].title + "</h3>" + "<article>" + blogsHere[i].post + "</article>" + "</div>"
    prinToDom(output, "startHere");
  }
}