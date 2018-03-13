var blogs = [
  {
    id: "blog1",
    title: "Best First Day Ever!!!",
    date: "02/27/2018",
    post: "This week I practiced some css and worked on my personal site.<br>I started working on it in bootstrap and made the mistake of using bootstrap 4.0 with 3.3 syntax. Funny thing about that is, it doesnt work.
    <p> Also deciding how to style the page was difficult, as I am not very creative. Eventually I just decided to throw the elements on the page and make it look "not ugly"</p>
    <p>tldr: I learned how to make a branch in github, and confirmed my lack of creativity in website design.</p>"
  }
]

function domStringMaker(blogsHere){
  var output = '';
  for(i=0; i < animalArray.length; i++){
    if (animalArray[i].isFavorite){
      output = "<article class='isFavorite'><h1>" + animalArray[i].petName + "</h1>" + "<h3>" + animalArray[i].instructorName + "</h3>" + "<h3>" + animalArray[i].isFavorite + "</h3></article>"
      
    }
    else
    {
    output = "<article><h1>" + animalArray[i].petName + "</h1>" + "<h3>" + animalArray[i].instructorName + "</h3>" + "<h3>" + animalArray[i].isFavorite + "</h3></article>"
    }
    prinToDom(output, "petName2");
  }
}