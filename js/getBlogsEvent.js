const date1 = new Date();

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

const saveBlogsEvent = () =>
{
  $(document).on('click', '#saveBlog', (e) =>
  {
    console.log('I work');
    const blogToAdd =
    {
      title: $('#blogTitle').val(),
      date: date1.toDateString(),
      post: $('#blogPost').val(),
    };
    saveBlogs(blogToAdd)
    .then(() =>
    {
      $('#blogTitle').val('')
      $('#blogPost').val('');
      $('#startHere').html('');
      getBlogsEvnt();
    })
    .catch((err) =>
    {
      console.error('Error in saving the blog', err);
    });
  });
};

const deleteBlogsEvent = () =>
{
  $(document).on('click', '.deleteBlog', (e) =>
  {
    const blogToDeleteId = $(e.target).closest('.blogCard').data('firebaseId');
    console.log(blogToDeleteId);
    deleteBlogs(blogToDeleteId)
    .then(() =>
    {
      $('#startHere').html('');
      getBlogsEvnt();
    })
    .catch((err) =>
    {
      console.error(err);
    });
  });
};