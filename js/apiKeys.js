let firebaseConfig = {};

const setConfig = (fbConfig) =>
{
  firebaseConfig = fbConfig;
};

const apiKeys = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax('../json/apiKeys.json')
    .done((data) =>
    {
      resolve(data.apiKeys);
    })
    .fail((err) =>
    {
      reject(err);
    });
  });
};

const retrieveApiKeys = () =>
{
  apiKeys().then((result) =>
  {
    setConfig(result.firebase);
    firebase.initializeApp(result.firebase);
    getProjectsEvent();
  }).catch((err) =>
  {
    console.error(err);
  });
};
