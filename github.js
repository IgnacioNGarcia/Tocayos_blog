fetch('https://api.github.com/users/ignacioDanGarcia')
        .then(response => response.json())
        .then(data => {
            document.getElementById('Nombre1').textContent = data.name;
            document.getElementById('Usuario1').textContent = data.login;
            document.getElementById('Bio1').textContent = data.bio;

            const profileImage = document.getElementById('profileImage1');
            profileImage.src = data.avatar_url;
            profileImage.alt = `GitHub Profile Picture - ${data.login}`;
        })
        .catch(error => console.error('Error:', error));

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
        .catch(error => console.error('Error:', error));