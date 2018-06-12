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

const saveBlogs = (newBlog) =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax(
      {
        method: 'POST',
        url: `${firebaseConfig.databaseURL}/blogs/blogs.json`,
        data: JSON.stringify(newBlog),
      })
      .done((uniqueKey) =>
      {
        resolve(uniqueKey);
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};

const deleteBlogs = (blogId) =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax(
      {
        method: 'DELETE',
        url: `${firebaseConfig.databaseURL}/blogs/blogs/${blogId}.json`,
      })
      .done(() =>
      {
        resolve();
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};