Vue.component('comment-section', {
    props: {
        post: Object, // Pasamos el arreglo de publicaciones como propiedad   
        database: Object,
      },
    data() {
        return {
            modalVisible: false,
            comments: [],
            nombre: "", 
            comentario: "",
        };
    },
    methods: {
        showModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
            // Restablece los campos del formulario a un estado vacío
            this.nombre = "";
            this.comentario = "";
        },
        checkNotEmpty(texto){
            if(texto == ''){
                throw new Error("Texto vacio");
            }
        },
        emitEmptyComment() {
            this.$emit('empty-comment');
          },
          postComment() {
            try {
              this.checkNotEmpty(this.nombre);
              this.checkNotEmpty(this.comentario);
          
              const comment = {
                titular: this.nombre,
                comentario: this.comentario,
              };
          
              const postRef = this.database.ref('publicaciones').child(this.post.id);
              const commentsRef = postRef.child('comments');
          
              // Verifica si el nodo 'comments' ya existe
              commentsRef.once('value', (snapshot) => {
                if (!snapshot.exists()) {
                  // Si no existe, crea el nodo 'comments' y agrega el comentario
                  commentsRef.set([comment]); // Puedes almacenar los comentarios como un array si lo prefieres
                } else {
                  // Si ya existe, solo agrega el comentario al nodo existente
                  commentsRef.push().set(comment);
                }
          
                console.log('Post Comment Method Called');
                console.log('Post ID:', this.post.id);
                console.log('Comment:', comment);
                this.closeModal();
              });
            } catch (error) {
              console.log(error.message);
              this.emitEmptyComment();
            }
          },
          
        },
    template: `
        <div>
        <h3 class="display-8">Comentarios</h3>
        <div v-for="comentario in post.comments">
        <div class="card card-comentario mx-auto">

                <p class="titular-comentario">{{ comentario.titular }} </p>
                <div class="card-body">
                    <p class="comentario-post">{{comentario.comentario}} </p>
                </div>
            
      </div>
        </div>
            <button @click="showModal" class="btn btn-secondary">Comentar</button>

            <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': modalVisible }">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" id="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Comentario</h5>
                            <button type="button" class="close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="nombre">Tu nombre</label>
                                    <input type="text" class="form-control" placeholder="Ponga su nombre" v-model="nombre">
                                </div>
                                <div class="form-group">
                                    <label for="text">Expresá tu opinion</label>
                                    <input type="text" class="form-control" v-model="comentario" placeholder="Escriba su comentario acá">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
                            <button type="button" class="btn btn-secondary" @click="postComment">Postear!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});
