Vue.component('lista-de-posts', {
    props: {
      posts: Array, // Pasamos el arreglo de publicaciones como propiedad
      subtitle: String,
      isAdmin:Boolean, 
      database: Object
    },
    methods: {
      toggleFullContent(post) {
        post.isFullContent = !post.isFullContent;
      },
      emitDeletePost() {
        this.$emit('post-deleted');
      },
    
      deletePost(postId) {
        const index = this.posts.findIndex(post => post.id === postId);
        if (index !== -1) {
          this.posts.splice(index, 1);
        }
        const postRef = this.database.ref('publicaciones').child(postId);
        postRef.remove()
          .then(() => {
            this.emitDeletePost();
          })
          .catch((error) => {
            console.error("Error al eliminar la publicación:", error);
          });
      },handleEmptyComment() {
        this.$emit('empty-comment');
      },
    },
    template: `
      <div class="seccion.post text-center">
      <h2 class="display-5 text-center">{{ posts.length > 0 ? subtitle : 'No hay entradas' }}</h2>
        <div v-for="post in posts" :key="post.id">
          <div class="card posteos">
            <h5 class="card-header">{{ post.date }}</h5>
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <p class="card-text" v-html="post.isFullContent ? post.content : post.content.slice(0, 250) + (post.content.length > 250 ? '...' : '')"></p>
  
              <a v-if="post.content.length > 250" @click="toggleFullContent(post)" class="btn btn-secondary">{{ post.isFullContent ? 'Leer menos' : 'Leer más' }}</a>
              <button @click="deletePost(post.id); emitDeletePost()" class="btn btn-secondary" v-if="isAdmin">Eliminar</button>
              </div>
              <div class="card-footer text-body-secondary">
              <comment-section :post="post" :database="database" @empty-comment="handleEmptyComment"></comment-section>
              </div>
          </div>
        </div>
      </div>
    `,
    
  });
  