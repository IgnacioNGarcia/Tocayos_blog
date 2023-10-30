Vue.component('page-navbar', {
    //props: ['isAddingNewPost', 'newPost'],
    template: `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Mi blog</a>
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
              <a class="nav-link" href="#">Sobre mi</a>
              <a class="nav-link" href="#">Fotos</a>
              <a class="nav-link" href="#">Libros</a>
              <a class="nav-link" aria="true">Posters</a>
            </div>
          </div>
        </div>
      </nav>
    `});
  