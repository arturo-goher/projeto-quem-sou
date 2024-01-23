function toggleMode() {
  const html = document.body
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Abner Arturo usando óculos escuros e camisa social preta, com o fundo branco"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Abner Arturo usando óculos de grau transparente e camisa social preta, com o fundo branco"
    )
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var textoClicavel = document.getElementById("textoClicavel")
  var audioFile = "./assets/eu mesmo.mp3"
  var contextoAudio = new (window.AudioContext || window.webkitAudioContext)()
  var buffer;

  // Função para carregar e iniciar o áudio
  function carregarEIniciarAudio() {
    buffer = contextoAudio.createBufferSource()

    fetch(audioFile)
      .then((response) => response.arrayBuffer())
      .then((data) => contextoAudio.decodeAudioData(data))
      .then((bufferData) => {
        buffer.buffer = bufferData
        buffer.connect(contextoAudio.destination)
        buffer.start(0)
      })
      .catch((error) => console.error("Erro ao carregar o áudio, tente 'Ctrl+F5', se não funcionar, troca esse navegador que ta ruim demais:", error))
  }

  // Adiciona um ouvinte de clique ao texto no footer
  textoClicavel.addEventListener("click", function () {
    // Se já estiver reproduzindo, pare e reinicie do início
    if (
      buffer &&
      (contextoAudio.state === "running" || contextoAudio.state === "suspended")
    ) {
      buffer.stop()
      buffer.disconnect()
    }

    // Inicia a reprodução
    carregarEIniciarAudio()
  })
})