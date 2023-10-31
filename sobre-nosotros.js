let intervalId;
let indice = 0;
const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor nulla. Proin posuere bibendum mauris, sed aliquam massa euismod eu. Praesent ante risus, scelerisque ut suscipit ac, finibus non enim. Donec tincidunt at est vel ultricies. Nullam sodales felis et tempor congue. Maecenas ut mauris luctus, faucibus risus sit amet, ultrices sem. Nulla facilisi. Vivamus non nisl a tortor fringilla blandit vel et leo. Nulla id ante urna. Sed non tempor diam, ut sollicitudin justo. Donec vulputate venenatis nisl. Mauris euismod pellentesque luctus. Etiam auctor fermentum sapien et sagittis. Fusce elementum fermentum arcu.<br>Ut non tincidunt magna. Duis accumsan arcu vel purus accumsan, vel pulvinar turpis lacinia. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sit amet viverra est. Vestibulum porttitor congue ex, lobortis ornare ex venenatis vitae. Sed non urna metus. Integer quis viverra orci. Curabitur eget placerat odio. Sed sollicitudin magna metus, nec vestibulum odio sollicitudin a. Etiam ullamcorper neque quis commodo dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas scelerisque lectus sit amet arcu sagittis, eget tempor metus malesuada. Mauris nunc magna, ullamcorper et malesuada vitae, porta eget leo. In hac habitasse platea dictumst. <br>Praesent faucibus massa eu diam mollis pulvinar. Pellentesque vitae rutrum magna, ac mattis nisl. In quis turpis diam. Sed in tortor non ante dictum sollicitudin ac non justo. Phasellus iaculis tempor risus, sit amet fermentum turpis. Donec eu leo in sem faucibus tempus. Ut quis elit auctor, lobortis massa a, vehicula nunc.";

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
    }, 25);
}
