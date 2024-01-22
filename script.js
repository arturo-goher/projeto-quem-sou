function toggleMode() {
  const html = document.body;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto do Abner Arturo usando óculos escuros e camisa social preta, com o fundo branco"
    )

  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto do Abner Arturo usando óculos de grau transparente e camisa social preta, com o fundo branco')
  }
}


