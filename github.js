async function fetchGitHubData(username, userId, token) {
    const nombreId = `Nombre${userId}`;
    const usuarioId = `Usuario${userId}`;
    const bioId = `Bio${userId}`;
    const profileImageId = `profileImage${userId}`;
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          'Authorization': `token ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error(`Failed to fetch user data for ${username}`);
      }
      const data = await response.json();
  
      document.getElementById(nombreId).textContent = data.name;
      document.getElementById(usuarioId).textContent = data.login;
      document.getElementById(bioId).textContent = data.bio;
  
      const profileImage = document.getElementById(profileImageId);
      profileImage.src = data.avatar_url;
      profileImage.alt = `GitHub Profile Picture - ${data.login}`;
    } catch (error) {
      console.error('Error:', error);
      return;
    }
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
          'Authorization': `token ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error(`Failed to fetch user repositories for ${username}`);
      }
      const repositories = await response.json();
  
      repositories.forEach(async (repository) => {
        const repositoryName = repository.name;
        const repositoryDescription = repository.description;
        const repositoryOwner = repository.owner.login;
        const repoId = `repositoriesContainer${userId}`;
  
        try {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${username}/${repositoryName}/commits`, {
              headers: {
                'Authorization': `token ${token}`
              }
            });
          if (commitsResponse.status !== 200) {
            throw new Error(`Failed to fetch commits for ${repositoryName}`);
          }
          const commits = await commitsResponse.json();
  
          const commitCount = commits.length;
  
          const repositoryInfo = document.createElement('div');
          repositoryInfo.innerHTML = `
            <h3>${repositoryName}</h3>
            <p>Descripción: ${repositoryDescription}</p>
            <p>Propietario: ${repositoryOwner}</p>
            <p>Commits: ${commitCount}</p>
          `;
  
          document.getElementById(repoId).appendChild(repositoryInfo);
        } catch (error) {
          console.error('Error:', error);
        }
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const users = [
    { username: 'ignacioDanGarcia', userId: 1 , token: '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'},
    { username: 'ignacioNGarcia', userId: 2 , token: ''},
  ];
  
  users.forEach((user) => {
    fetchGitHubData(user.username, user.userId, user.token);
  });
  