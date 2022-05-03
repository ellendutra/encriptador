let criptografar_textarea = document.getElementById("criptografar_textarea");
let descriptografar_textarea = document.getElementById(
  "descriptografar_textarea"
);
let criptografar_botao = document.getElementById("criptografar_botao");
let descriptografar_botao = document.getElementById("descriptografar_botao");
let copiar_botao = document.getElementById("copiar_botao");

function criptografar() {
  let texto = criptografar_textarea.value.toLowerCase();
  let novoTexto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  descriptografar_textarea.value = novoTexto;
}

function descriptografar() {
  let texto = criptografar_textarea.value.toLowerCase();
  let novoTexto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  descriptografar_textarea.value = novoTexto;
}

function copiarTexto() {
  var resposta = descriptografar_textarea.value;
  navigator.clipboard.writeText(resposta);
}

criptografar_botao.onclick = criptografar;
descriptografar_botao.onclick = descriptografar;
copiar_botao.onclick = copiarTexto;
