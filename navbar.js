Vue.component('page-navbar', {
    //props: ['isAddingNewPost', 'newPost'],
    template: `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">El blog</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="sobre-nosotros.html">Sobre nosotros</a>
              <a class="nav-link" href="github.html">Github</a>
              <a class="nav-link" href="linkedin.html">Linkedin</a>
            </div>
          </div>
        </div>
      </nav>
    `});
  