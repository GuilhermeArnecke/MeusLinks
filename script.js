function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a tag img
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Cara bonitão deitado com o celular na mão fazendo sinal de relax"
    )
  } else {
    //se não estiver light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de um gato laranja usando óculos escuros redondos, moletom com capuz e corrente de ouro em um fundo roxo."
    )
  }
}
