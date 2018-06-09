const getBlogs = () =>
{
  return new Promise((resolve, reject) =>
  {
    const allBlogs = [];
    $.ajax({
      method: 'GET',
      url:`${firebaseConfig.databaseURL}/blogs/blogs.json`,
    })
    .done((allBlogsObject) =>
    {
      if (allBlogsObject !== null)
      {
        Object.keys(allBlogsObject).forEach(fbKey =>
        {
          allBlogsObject[fbKey].id = fbKey;
          allBlogs.push(allBlogsObject[fbKey]);
        });
      }
      resolve(allBlogs);
    })
    .fail((err) =>
    {
      reject(err);
    });
  });
};
