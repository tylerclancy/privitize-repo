const axios = require('axios');

// Create a personal access token here: https://github.com/settings/tokens
const token = 'your_token';
const user = 'your_username'

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

axios
  .get('https://api.github.com/user/repos', { headers })
  .then((response) => {
    const repos = response.data;

    repos.forEach((repo) => {
      const repoName = repo.name;
      const url = `https://api.github.com/repos/${user}/${repoName}`;
      const data = {private: true};

      axios 
        .patch(url, data, { headers })
        .then(() => console.log(`${repoName} is now private.`))
        .catch((err) => console.log(err))
    });
  })
  .catch((err) => console.log(err))



