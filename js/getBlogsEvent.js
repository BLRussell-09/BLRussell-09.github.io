const getBlogsEvnt = () =>
{
  getBlogs()
  .then((results) =>
  {
    console.log(results);
    domStringMaker(results);
  })
  .catch((err) =>
  {
    console.error('Error in Get All Blogs', err);
  });
};
