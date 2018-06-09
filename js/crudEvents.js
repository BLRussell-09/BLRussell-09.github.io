const getProjectsEvent = () =>
{
  getProjects()
  .then((results) =>
  {
    console.log(results);
    createProjectCards(results);
  })
  .catch((err) =>
  {
    console.error(err);
  });
};
