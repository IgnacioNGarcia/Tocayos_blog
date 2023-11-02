let interval;

new Vue({
  el: "#app",
  data: {
    pageTitle: "Tocayo's Blog",
    subtitle: "Entradas anteriores",
    posts: [],
    showToast: false,
    toastMessage: "",

    isAddingNewPost: false, // Controla la visibilidad del formulario
    newPost: {
      // Datos del formulario para una nueva entrada
      title: "",
      content: "",
      date: "",
    },
  },
  created() {
    // Cargar datos de las entradas estáticas
    this.loadStaticPosts();
  },
  methods: {
    CurrentDate() {
      const today = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return today.toLocaleDateString(undefined, options);
    },

    loadStaticPosts() {
      // Simula la carga de datos estáticos
      this.posts = [
        //Acá podría ir el realtime database.post. Averiguar firebase.
        {
          id: 1,
          title: "Aventuras de dos Ignacios: Navegando en las aguas de Vue.js",
          content:
            "La fecha era el 23 de octubre de 2023, y como cualquier otro lunes, nos encontrábamos en nuestra clase de programación. Pero este día era diferente, nuestro profesor nos había lanzado un desafío: debíamos elegir uno de los temas de desarrollo web de una lista que incluía conceptos tan misteriosos como 'Promises', 'Async Await', 'PhaserJS', 'ThreeJs' 'Progress Web Apps', 'Desarrollo Mobile Híbrido', 'Frameworks Web' y 'APIs web avanzadas'. Cada uno de estos temas parecía un mundo nuevo por explorar, y teníamos que sumergirnos en uno de ellos y crear un proyecto. ¡El estrés estaba en su punto máximo! <br> <br> Pero aquí es donde comienza nuestra historia. Mi compañero, Ignacio Daniel García, y yo, Ignacio Nicolás García, éramos dos Ignacios decididos a tomar este desafío de frente. Decidimos unir fuerzas y aventurarnos en el emocionante mundo de Vue.js. Para ambos, era la primera vez trabajando con esta tecnología, y esto añadió un nivel extra de emoción al proyecto. Después de todo, ¿qué es la programación sin un poco de desafío? <br> Trabajar en un proyecto conjunto con un compañero de clase que compartía mi nombre fue un desafío en sí mismo. La confusión era constante: ¿cuál Ignacio dijo qué? Pero también fue una oportunidad para fortalecer nuestras habilidades de comunicación y colaboración, algo esencial en el mundo del desarrollo de software. <br><br>Nuestra historia no termina aquí. A medida que seguimos explorando el mundo del desarrollo web, estamos ansiosos por enfrentar nuevos desafíos y aprender nuevas tecnologías. Así que, si te encuentras en una situación similar, recuerda que cada desafío es una oportunidad de aprendizaje, y cada nueva tecnología es una puerta a un mundo por explorar. ¡Nunca dejes de aventurarte en el vasto universo de la programación!",
          date: "23 de octubre de 2023",
          isFullContent: false,
        },
        {
          id: 2,
          title: "De la Inspiración a la Innovación: Nuestro Viaje con Vue.js",
          content:
            "Era un jueves soleado del 26 de octubre de 2023 cuando Ignacio Daniel y yo, Ignacio Nicolás, nos encontramos frente a una hoja en blanco, un mundo de posibilidades y un montón de preguntas. ¿Por dónde empezar? Habíamos decidido aventurarnos en el emocionante mundo de Vue.js, pero no teníamos un rumbo fijo. Era el punto de partida de un viaje que cambiaría nuestra perspectiva sobre el desarrollo web. <br><br>En nuestra mesa de trabajo, comenzamos a hacer un poco de brainstorming. Las ideas fluían como un río desbordado. Algunas eran tan tentadoras como crear una página de seguimiento de la cotización del dólar, un tema vital en nuestro país, Argentina. Otras ideas incluían la creación de un clon de Twitter. Sin embargo, rápidamente descartamos esta última idea, ya que no queríamos caer en la trampa de copiar características de otros proyectos existentes. Queríamos hacer algo único, algo que llevara nuestra creatividad al límite. <br><br>Mientras nuestras mentes seguían dando vueltas, acordamos que, antes de tomar una decisión, debíamos fortalecer nuestros cimientos en Vue.js. Sabíamos que para crear algo innovador, debíamos comprender a fondo las capacidades y potencialidades de esta tecnología. Con una amplia sonrisa y una pizca de incertidumbre, nos sumergimos en los fundamentos de Vue.js.<br><br>Nuestro viaje recién comenzaba, y aunque el destino final seguía siendo un misterio, lo que teníamos era pasión, determinación y un deseo inquebrantable de explorar y aprender. Cada día era un nuevo descubrimiento, y cada línea de código escrita nos acercaba un poco más a nuestro objetivo.<br><br>Nuestra historia con Vue.js no solo se trata de desarrollo web, se trata de crecimiento personal y colaboración. Aprendimos que en el mundo del desarrollo, la inspiración puede venir de cualquier lugar y que las ideas más brillantes a menudo nacen de la innovación y la dedicación.<br><br>Mientras compartimos nuestro viaje contigo, te invitamos a unirte a nosotros en la exploración de lo desconocido. Si te encuentras en una situación similar, recuerda que la inspiración está en todas partes, y la innovación está al alcance de tu mano. ¡Nunca dejes de soñar en grande y aventurarte en el vasto universo del desarrollo web!                    ",
          date: "26 de octubre de 2023",
          isFullContent: false,
        },
        {
          id: 3,
          title:
            "Del Aprendizaje a la Creación: La Historia Tras Tocayo's blog",
          content:
            "Era un tranquilo domingo 29 de octubre de 2023, y después de horas de sumergirnos en tutoriales de Vue.js en YouTube, llegó el momento de decir '¡Basta!' a la observación pasiva. Sabíamos que para aprender de verdad, teníamos que ensuciarnos las manos y enfrentar los desafíos de frente. Armados con determinación y entusiasmo, decidimos emprender un viaje de aprendizaje y creación. <br><br>Nuestro primer objetivo era comenzar con algo simple pero elegante: un blog. No hay nada más icónico en el mundo de Internet que un buen blog. Imaginamos un espacio estético y pulido, donde compartiríamos nuestra aventura como dos tocayos adentrándonos en el emocionante mundo de Vue.js.<br><br>Poco a poco, fuimos construyendo las bases de nuestro blog. Aprendimos a crear componentes de Vue, a gestionar el estado de la aplicación y a conectar los datos. Cada línea de código escrita era un pequeño triunfo, y estábamos ansiosos por añadir nuevas funcionalidades y mejorar los estilos. Queríamos que nuestro blog fuera más que un simple proyecto escolar; aspirábamos a convertirlo en una experiencia atractiva y única.<br><br>A medida que avanzábamos en el desarrollo del blog, nos dimos cuenta de que este proyecto tenía un potencial inmenso. ¿Por qué no llevarlo al siguiente nivel y presentarlo como nuestro proyecto para la clase? Esta idea nos emocionó, y pronto acordamos que este blog que estás leyendo, querido lector, sería nuestra carta de presentación.<br><br>Este blog, que nació de la curiosidad y el deseo de aprender, se convirtió en un testimonio de nuestra determinación y creatividad. Cada característica, cada diseño, y cada palabra escrita representa un paso en nuestro viaje de desarrollo. Esperamos que este proyecto no solo sea una representación de nuestro esfuerzo, sino también una fuente de inspiración para otros que deseen aventurarse en el mundo del desarrollo web.<br><br>A medida que compartimos esta historia contigo, querido lector, te invitamos a unirte a nosotros en nuestra exploración de Vue.js y en la creación de proyectos que reflejen tu pasión y tu deseo de aprender. Como hemos aprendido en este viaje, el aprendizaje y la creación van de la mano, y no hay límites para lo que puedes lograr cuando te atreves a innovar. ¡Aquí está nuestro blog, una prueba de que con determinación y creatividad, cualquier desafío puede convertirse en una historia de éxito!",
          date: "29 de octubre de 2023",
          isFullContent: false,
        },
        {
          id: 4,
          title:
          "FIRE QUE?  Aprendiendo Firebase en una Semana",
          content:
            "El día era el lunes 30 de octubre, a una semana de la entrega del trabajo final. Nuestro profesor preguntó al inicio de la clase a todos los grupos cómo iban los trabajos, y ante el silencio, presentamos la idea de Tocayo's blog.<br><br>Luego estuvimos trabajando unas horas los dos Ignacios en una sala hasta que decidimos llamar al profe para conversar acerca del el proyecto. Le mostramos un poco nuestra idea y que estábamos utilizando y cayó una sugerencia de su parte, un nuevo desafío que afrontar en poco tiempo y sin conocimientos previos, algo llamado... Firebase.<br><br>La idea es aprender a crear una base de datos con Firebase, una nueva tecnología de la que no tenemos ni idea y traer los datos de nuestros queridos posteos desde allí.<br><br>En este nuevo capítulo de nuestra aventura de desarrollo, te llevaremos a través de nuestro viaje para aprender y dominar Firebase en tan solo una semana. Descubre cómo enfrentamos este emocionante desafío, superando obstáculos y aprendiendo de la experiencia. Mantente atento, porque FIRE QUE? promete ser un relato lleno de sorpresas, desafíos y, por supuesto, ¡mucho aprendizaje!<br><br>¿Estás listo para unirte a nosotros en este emocionante viaje de descubrimiento? Acompáñanos en FIRE QUE? mientras exploramos el mundo de Firebase, dejando atrás la incertidumbre y abrazando la oportunidad de aprender y crear.<br><br>¡FIRE QUE? - Aprendiendo Firebase en una Semana, es solo el comienzo de una emocionante aventura!",
          date: "30 de octubre de 2023",
          isFullContent: false,
        },
        // Agrega más entradas aquí
      ];
      this.posts.reverse();
    },
    showNewPostForm() {
      this.isAddingNewPost = true;
    },
    handlePostDeleted() {
      console.log("llegamos al handler");
      this.mostrarToast(`Post eliminado exitosamente`);
    },
    handleEmptyComment() {
      this.mostrarToast(`No se permite el texto vacio!`);
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
        this.posts.reverse();
        this.posts.push({
          id: this.posts.length + 1, // Puedes ajustar la generación de IDs
          title: this.newPost.title,
          content: this.newPost.content,
          date: this.CurrentDate(),
          isFullContent: false,
        });
        this.posts.reverse();

        // Restablecer el formulario y ocultar
        this.hideNewPostForm();
        this.mostrarToast("Post creado exitosamente");
        console.log(this.toastMessage);
      }
    },
  },
});
