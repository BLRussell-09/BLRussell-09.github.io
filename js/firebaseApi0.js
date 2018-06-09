const getProjects = () =>
{
  return new Promise((resolve, reject) =>
  {
    const allProjects = [];
    $.ajax({
      method: 'GET',
      url:`${firebaseConfig.databaseURL}/projects/projects.json`,
    })
    .done((allProjectsObject) =>
    {
      if (allProjectsObject !== null)
      {
        Object.keys(allProjectsObject).forEach(fbKey =>
        {
          allProjectsObject[fbKey].id = fbKey;
          allProjects.push(allProjectsObject[fbKey]);
        });
      }
      resolve(allProjects);
    })
    .fail((err) =>
    {
      reject(err);
    });
  });
};
