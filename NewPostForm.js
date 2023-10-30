Vue.component('new-post-form', {
  props: ['isAddingNewPost', 'newPost'],
  template: `
    <div class="nuevo.posteo.seccion text-center">
      <div v-if="isAddingNewPost">
        <h3>Nueva entrada</h3>
        <form @submit.prevent="addNewPost" class="nuevo.post.titulo">
          <label for="newPostTitle">Título:</label><br>
          <input type="text" id="newPostTitle" v-model="newPost.title" required /><br>
          <label for="newPostContent">Contenido:</label><br>
          <textarea id="newPostContent" v-model="newPost.content" required></textarea><br>
          <button @click="addNewPost" class="btn btn-secondary" type="submit">Publicar</button>
          <button @click="hideNewPostForm" class="btn btn-secondary" type="button">Cancelar</button>
        </form>
      </div>
    </div>
  `,
  methods: {
    addNewPost() {
      this.$emit('add-new-post');
    },
    hideNewPostForm() {
      this.$emit('hide-new-post-form');
    },
  },
});
