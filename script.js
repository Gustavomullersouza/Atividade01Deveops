function mostrarMensagem() {
  const mensagem = document.getElementById("mensagemInput").value;

  if (mensagem === "") {
    document.getElementById("msg").innerText = "Digite uma mensagem!";
    return;
  }

  document.getElementById("msg").innerText = "Mensagem enviada: " + mensagem;
}
