function fetchGitHubData(username, userId) {
    // Concatenar el número de usuario con el ID
    const nombreId = `Nombre${userId}`;
    const usuarioId = `Usuario${userId}`;
    const bioId = `Bio${userId}`;
    const profileImageId = `profileImage${userId}`;
  
    // Fetch y muestra la información del perfil de GitHub
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById(nombreId).textContent = data.name;
        document.getElementById(usuarioId).textContent = data.login;
        document.getElementById(bioId).textContent = data.bio;
  
        const profileImage = document.getElementById(profileImageId);
        profileImage.src = data.avatar_url;
        profileImage.alt = `GitHub Profile Picture - ${data.login}`;
      })
      .catch(error => console.error('Error:', error));
  
    // Fetch y muestra la información de los repositorios
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repositories => {
        repositories.forEach(repository => {
          const repositoryName = repository.name;
          const repositoryDescription = repository.description;
          const repositoryOwner = repository.owner.login;
          const repoId = `repositoriesContainer${userId}`;
          fetch(`https://api.github.com/repos/${username}/${repositoryName}/commits`)
            .then(response => response.json())
            .then(commits => {
              const commitCount = commits.length;
  
              const repositoryInfo = document.createElement('div');
              repositoryInfo.innerHTML = `
                <h3>${repositoryName}</h3>
                <p>Descripción: ${repositoryDescription}</p>
                <p>Propietario: ${repositoryOwner}</p>
                <p>Commits: ${commitCount}</p>
              `;
  
              document.getElementById(repoId).appendChild(repositoryInfo);
            })
            .catch(error => console.error('Error:', error));
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Llama a la función con el nombre de usuario deseado
  fetchGitHubData('ignacioDanGarcia',1);
  fetchGitHubData('ignacioNGarcia',2);

    /*

fetch('https://api.github.com/users/ignacioNGarcia')
        .then(response => response.json())
        .then(data => {
            document.getElementById('Nombre2').textContent = data.name;
            document.getElementById('Usuario2').textContent = data.login;
            document.getElementById('Bio2').textContent = data.bio;

            const profileImage = document.getElementById('profileImage2');
            profileImage.src = data.avatar_url;
            profileImage.alt = `GitHub Profile Picture - ${data.login}`;
        })
        .catch(error => console.error('Error:', error));*/