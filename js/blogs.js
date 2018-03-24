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
  },
  {
    id: "blog3",
    title: "Projects",
    date: " 3.13.18",
    post: "This week we started to work on projects with our groups. Here we got to start having fun, creating new things. We workd on a translator that would return your words to you in either Elvish, Klingon, or Dothraki. I had trouble with mine, returning a new line for every word translated. As it turns out, I needed an internal counter to make it work. I'm starting to more easily put the pieces together from what I've learned so far and use it to solve the problem. This related in a way to a problem that we previously worked on with arrays, the beggars issue. Now if only I were any good at styling the translator would look nice and work well."
  },
  {
    id: "blog4",
    title: "Travel-Diary",
    date: " 3.24.18",
    post: "This week we worked on the travel diary, and to be honest it's the first project that I've managed to finish in one sitting. Getting the cards to print on the page, was pretty simple, as well as adding a text box to the card. However I had a little trouble printing the new cards out. I treated the problem like spaghetti, throwing every possible solution to the wall to see what stuck. eventually I got the cards to print but no text box, and had to follow the error codes down the rabbit hole. Now my cards print appropriatly and I've started working on a delete button that doesn't work."
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