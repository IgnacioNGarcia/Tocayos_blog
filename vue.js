import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
let interval;

new Vue({
  el: "#app",
  data: {
    pageTitle: "Tocayo's Blog",
    subtitle: "Entradas anteriores",
    posts: [],
    showToast: false,
    toastMessage: "",
    isAdmin: false,
    isAddingNewPost: false, // Controla la visibilidad del formulario
    newPost: {
      // Datos del formulario para una nueva entrada
      title: "",
      content: "",
      date: "",
    },
    pass: "tocayos", //Traeriamos la pass de la database para hacer el login.
    database: null,
  },
  created() {
    // Cargar datos de las entradas estáticas
    const firebaseConfig = {
      apiKey: "AIzaSyDBlyoNp3HPYQPIddyHGEXOcVEG224oMcE",
      authDomain: "tocayos-blog-bbdd.firebaseapp.com",
      projectId: "tocayos-blog-bbdd",
      storageBucket: "tocayos-blog-bbdd.appspot.com",
      messagingSenderId: "142534376172",
      appId: "1:142534376172:web:fa36e757a1e3a3add4c3c9",
      measurementId: "G-GPQ4HGLB0T",
      databaseURL: "https://tocayos-blog-bbdd-default-rtdb.firebaseio.com"
    };
    
    const app = initializeApp(firebaseConfig); 
    this.database = getDatabase(app);
    
    this.loadStaticPosts();
  },
  methods: {
    CurrentDate() {
      const today = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return today.toLocaleDateString(undefined, options);
    },
    loadStaticPosts() {
      // Crea una referencia a la ubicación de las publicaciones en la base de datos
      const postsRef = this.database.ref('publicaciones');
    
      postsRef.on('value', (snapshot) => {
        const posts = [];
        snapshot.forEach((postSnapshot) => {
          const post = postSnapshot.val();
          post.id = postSnapshot.key;
    
          // Agrega un arreglo de comentarios a la publicación
          post.comments = [];
    
          // Recorre los comentarios y agrégalos a la publicación
          if (post.comments) {
            Object.values(post.comments).forEach((comment) => {
              post.comments.push(comment);
            });
          }
    
          posts.push(post);
        });
    
        this.posts = posts.reverse();
      });
    },    
    
    showNewPostForm() {
      this.isAddingNewPost = true;
    },
    handlePostDeleted() {
      this.mostrarToast(`Post eliminado exitosamente`);
    },
    handleEmptyComment() {
      this.mostrarToast(`No se permite el texto vacio!`);
    },
    checkNotEmpty(texto){
      if(texto == ''){
          throw new Error("Texto vacio");
      }
    },
    handleLogin(input){
      try{
        this.checkNotEmpty(input);
      if(this.isAdmin){
        this.mostrarToast("Ya estás adentro.");
      }else{
      if(input === this.pass){
        this.isAdmin = true;
        this.mostrarToast("Accediste!!!!")

      }else{
        this.isAdmin = false;
        this.mostrarToast("Contraseña incorrecta :@")
      }
    }
    }catch (error){
      this.mostrarToast("No pusiste una contraseña");
    }
    },
    mostrarToast(mensaje) {
      clearInterval(interval);
      this.showToast = false; //Si hay un cebado metiendo posts o elimnando a las chapas primero lo cierro.
      this.toastMessage = mensaje;
      this.showToast = true; // Mostrar el toast al cambiar la propiedad
      interval = setTimeout(() => {
        this.showToast = false;
      }, 3000);
    },
    hideNewPostForm() {
      this.newPost.title = "";
      this.newPost.content = "";
      this.newPost.date = "";
      this.isAddingNewPost = false;
    },
    addNewPost() {
      if (this.newPost.title && this.newPost.content) {
        // Agregar la nueva entrada al arreglo de entradas
        const postsRef = this.database.ref('publicaciones');

        const newPostRef = postsRef.push();
        newPostRef.set({
            id: this.posts.length + 1, // Puedes ajustar la generación de IDs
            title: this.newPost.title,
            content: this.newPost.content,
            date: this.CurrentDate(),
            isFullContent: false,
            comments: []
        });
        this.posts.reverse();

        // Restablecer el formulario y ocultar
        this.hideNewPostForm();
        this.mostrarToast("Post creado exitosamente");
        console.log(this.toastMessage);
      }
    },
    deletePost(postId) {
      if (confirm("¿Estás seguro de que deseas eliminar esta publicación?")) {
        const postRef = this.database.ref('publicaciones').child(postId);
        postRef.remove()
          .then(() => {
            this.handlePostDeleted();
          })
          .catch((error) => {
            console.error("Error al eliminar la publicación:", error);
          });
      }
    },
  },
});
