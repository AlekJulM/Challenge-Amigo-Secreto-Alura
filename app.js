let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  let nombre = inputAmigo.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    return;
  }

  amigos.push(nombre);

  inputAmigo.value = "";

  actualizarLista();
}


function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  
  listaAmigos.innerHTML = "";
  
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía, por favor añade nombres.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}


function resetearSorteo() {
 
  amigos = [];
  
  actualizarLista();
  
  document.getElementById("resultado").innerHTML = "";
}


const inputAmigo = document.getElementById("amigo");
inputAmigo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

