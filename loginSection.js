Vue.component('login-section', {
    props: {
        isAdmin:Boolean // Pasamos el arreglo de publicaciones como propiedad        
      },
    data() {
        return {
            modalVisible: false,
            input:""        
        };
    },
    methods: {
        showModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
            this.input = '';
        },
        checkNotEmpty(texto){
            if(texto == ''){
                throw new Error("Texto vacio");
            }
        },
        
        emitLoginData(){
            this.$emit('login',this.input);
            this.closeModal()
        }
    },
    template: `
    <div>
    <button @click="showModal" class="btn btn-secondary">Entrar como admin</button>

    <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': modalVisible }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Iniciar sesión</h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" class="form-control" v-model="input" id="password">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
            <button type="button" class="btn btn-secondary" @click="emitLoginData">Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
});