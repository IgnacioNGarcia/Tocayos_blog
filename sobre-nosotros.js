let intervalId;
let indice = 0;
const texto = "¡Hola a todos y bienvenidos a nuestro blog!<br><br>Somos dos apasionados compañeros de la Facultad de Tecnología Nacional, en la Tecnicatura Superior en Sistemas Informáticos. Nuestros nombres son Ignacio Nicolás García e Ignacio Daniel García, y sí, somos Tocayos. Esta peculiaridad es la razón principal de la existencia de este blog, pero hay mucho más que queremos compartir contigo.<br><br>En este espacio, nuestra misión es mantenerte al tanto de nuestras emocionantes aventuras en el mundo universitario y, más específicamente, en nuestro viaje como programadores. Aquí encontrarás una ventana a nuestras vidas, donde compartiremos consejos, historias y experiencias relacionadas con la tecnología, la programación y la vida universitaria.<br><br>La universidad puede ser un lugar desafiante, y el mundo de la programación a menudo se presenta como un laberinto de conceptos y desafíos. Pero, a través de este blog, queremos ser tu compañía en este viaje. Aunque cada uno de nosotros está en casa, frente a su computadora, queremos recordarte que no estás solo. Juntos, exploraremos el fascinante mundo de la tecnología y la programación.<br><br>En nuestras publicaciones, compartiremos consejos útiles para sobresalir en tus estudios y desarrollarte como programador. También te contaremos nuestras historias personales, destacando los desafíos que enfrentamos y las soluciones creativas que encontramos en el camino.<br><br>Nos emociona la idea de construir una comunidad de compañeros programadores, donde podamos aprender juntos, compartir experiencias y crecer como profesionales de la tecnología. Tus comentarios y sugerencias son siempre bienvenidos, y esperamos que te unas a nosotros en esta emocionante aventura.<br><br>Así que, si eres estudiante de tecnología, entusiasta de la programación o simplemente alguien que busca aprender y conectarse, ¡este blog es para ti! ¡Gracias por ser parte de nuestra comunidad y esperamos que disfrutes de tu tiempo en nuestro blog!<br><br>¡Conéctate, aprende y crece con nosotros en Tocayos's Blog!";

function de_a_un_caracter(texto) {
    const letra = document.getElementById("conocenos");

    if (indice < texto.length) {
        if (texto[indice] === "<" && texto.substring(indice, indice + 4) === "<br>") {
            letra.innerHTML += "<br>";
            indice += 4; // Saltar <br> completo
        } else {
            letra.innerHTML += texto[indice];
            indice++;
        }
    } else {
        clearInterval(intervalId);
    }
}

function escribir() {
    intervalId = setInterval(function() {
        de_a_un_caracter(texto);
    }, 20);
}
