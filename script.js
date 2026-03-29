let totalMensagens = 0;

function mostrarMensagem() {
  const mensagem = document.getElementById("mensagemInput").value;

  if (mensagem === "") {
    document.getElementById("msg").innerText = "Digite uma mensagem!";
    return;
  }

  totalMensagens++;

  const data = new Date();

  document.getElementById("msg").innerText =
    "Mensagem enviada: " + mensagem + " (" + data.toLocaleString() + ")";

  document.getElementById("contador").innerText =
    "Mensagens enviadas: " + totalMensagens;

  document.getElementById("mensagemInput").value = "";
}
