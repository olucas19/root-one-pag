const paragrafoExpandir = document.getElementById("paragrafo-expandir");
const conteudoExpansao = document.getElementById("conteudo-expansao");

let expandido = false;

paragrafoExpandir.addEventListener("click", () => {
  if (!expandido) {
    conteudoExpansao.style.maxHeight = "1000px"; // Altura máxima para exibir o conteúdo
    expandido = true;
  } else {
    conteudoExpansao.style.maxHeight = "0"; // Oculta o conteúdo novamente
    expandido = false;
  }
});
