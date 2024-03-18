function procesarTexto(accion) {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let textoCifrado;

  if (texto.length != 0) {
    switch (accion) {
      case "encriptar":
        textoCifrado = texto
          .replace(/e/gi, "enter")
          .replace(/i/gi, "imes")
          .replace(/a/gi, "ai")
          .replace(/o/gi, "ober")
          .replace(/u/gi, "ufat");
        muñeco.src = "./img/candado.webp";
        tituloMensaje.textContent = "Texto encriptado con éxito";
        break;
      case "desencriptar":
        textoCifrado = texto
          .replace(/enter/gi, "e")
          .replace(/imes/gi, "i")
          .replace(/ai/gi, "a")
          .replace(/ober/gi, "o")
          .replace(/ufat/gi, "u");
        muñeco.src = "./img/desencriptado.gif";
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        break;
      default:
        break;
    }

    document.getElementById("texto").value = textoCifrado || texto;
    parrafo.textContent = "";
  } else {
    muñeco.src = "./img/no-text.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Error!", "Debes ingresar un texto", "./img/not-found.png");
  }
}

function encriptar() {
  procesarTexto("encriptar");
}

function desencriptar() {
  procesarTexto("desencriptar");
}
