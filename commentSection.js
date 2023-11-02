Vue.component('comment-section', {
    data() {
        return {
            modalVisible: false,
            nombre: "", // Agrega datos para los campos del formulario
            comentario: "",
            comentarios: []
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
        postComment(){
            const comment = {
                titular: this.nombre,
                comentario: this.comentario
            }
            console.log("Estamos por publicar un comentario");
            this.comentarios.push(comment);
            this.closeModal();
        }
    },
    template: `
        <div>
        <h3 class="display-8">Comentarios</h3>
        <div v-for="comentario in comentarios">
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
                    <div class="modal-content">
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
                                    <input type="text" class="form-control" id="nombre" placeholder="Ponga su nombre" v-model="nombre">
                                </div>
                                <div class="form-group">
                                    <label for="text">Expresá tu opinion</label>
                                    <input type="text" class="form-control" id="comentario" v-model="comentario" placeholder="Escriba su comentario acá">
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
/*
Agregar control de errores con los cometarios. La idea es usar la biblioteca de profanity de js para hacerlo y también tenemos que checkear que el nombre y el comentario no estén vacios.
Extra: Agregar un toast para los comentarios cuando se publican. 
*/