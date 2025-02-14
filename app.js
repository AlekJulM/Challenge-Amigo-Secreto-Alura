//nombres comunes
const nombresGenero = {
    //nombres masculinos
    'juan': 'm', 'pedro': 'm', 'carlos': 'm', 'jose': 'm', 'miguel': 'm', 'luis': 'm',
    'francisco': 'm', 'antonio': 'm', 'david': 'm', 'daniel': 'm', 'jorge': 'm',
    'joshua': 'm', 'alberto': 'm', 'diego': 'm', 'adrian': 'm', 'alejandro': 'm',
    'angel': 'm', 'benjamin': 'm', 'cesar': 'm', 'edgar': 'm', 'eduardo': 'm',
    'emmanuel': 'm', 'enrique': 'm', 'esteban': 'm', 'felipe': 'm', 'fernando': 'm',
    'gabriel': 'm', 'guillermo': 'm', 'gustavo': 'm', 'hector': 'm', 'hugo': 'm',
    'ignacio': 'm', 'ivan': 'm', 'javier': 'm', 'jesus': 'm', 'joaquin': 'm',
    'jonathan': 'm', 'kevin': 'm', 'leonardo': 'm', 'lucas': 'm', 'manuel': 'm',
    'marco': 'm', 'mario': 'm', 'martin': 'm', 'mateo': 'm', 'nicolas': 'm',
    'oscar': 'm', 'pablo': 'm', 'patricio': 'm', 'raul': 'm', 'ricardo': 'm',
    'roberto': 'm', 'rodrigo': 'm', 'samuel': 'm', 'santiago': 'm', 'sebastian': 'm',
    'sergio': 'm', 'victor': 'm', 'vincent': 'm', 'william': 'm', 'bryan': 'm',
    'noah': 'm', 'liam': 'm', 'ethan': 'm', 'alexander': 'm', 'james': 'm',
    
    // nombres femeninos
    'maria': 'f', 'ana': 'f', 'sofia': 'f', 'laura': 'f', 'carmen': 'f', 'patricia': 'f',
    'isabel': 'f', 'marta': 'f', 'lucia': 'f', 'andrea': 'f', 'paula': 'f',
    'belen': 'f', 'adriana': 'f', 'alba': 'f', 'alejandra': 'f', 'alicia': 'f',
    'beatriz': 'f', 'blanca': 'f', 'camila': 'f', 'carolina': 'f', 'catalina': 'f',
    'cecilia': 'f', 'clara': 'f', 'claudia': 'f', 'cristina': 'f', 'daniela': 'f',
    'diana': 'f', 'elena': 'f', 'elisa': 'f', 'elizabeth': 'f', 'emma': 'f',
    'esther': 'f', 'eva': 'f', 'fernanda': 'f', 'gabriela': 'f', 'gloria': 'f',
    'irene': 'f', 'julia': 'f', 'karla': 'f', 'leticia': 'f', 'liliana': 'f',
    'lorena': 'f', 'lourdes': 'f', 'luisa': 'f', 'magdalena': 'f', 'mariana': 'f',
    'maribel': 'f', 'marlene': 'f', 'mercedes': 'f', 'monica': 'f', 'natalia': 'f',
    'nicole': 'f', 'olga': 'f', 'paola': 'f', 'pilar': 'f', 'raquel': 'f',
    'rebeca': 'f', 'rocio': 'f', 'rosa': 'f', 'rosario': 'f', 'sandra': 'f',
    'sara': 'f', 'silvia': 'f', 'sonia': 'f', 'susana': 'f', 'teresa': 'f',
    'valeria': 'f', 'vanessa': 'f', 'veronica': 'f', 'victoria': 'f', 'virginia': 'f',
    'viviana': 'f', 'ximena': 'f', 'yolanda': 'f', 'zoe': 'f', 'ruth': 'f',
    'genesis': 'f', 'valentina': 'f', 'isabella': 'f', 'jazmin': 'f', 'michelle': 'f',
    'rachel': 'f', 'ingrid': 'f', 'helen': 'f', 'april': 'f', 'ariadna': 'f'
};

let amigos = [];

function detectarGenero(nombre) {
    const primerNombre = nombre.toLowerCase().split(' ')[0];
    
  
    if (nombresGenero[primerNombre]) {
        return nombresGenero[primerNombre];
    }
    

    if (primerNombre.endsWith('a') && 
        !primerNombre.endsWith('ca') && // Exceptions like Luca
        !primerNombre.endsWith('ra') && // Exceptions like Ezra
        !primerNombre.endsWith('ia')) { // Some exceptions end in 'ia'
        return 'f';
    }
    
  
    return 'm';
}

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (!nombre || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        return;
    }

    let nombreFinal = nombre;
    if (amigos.includes(nombre)) {
        const confirmar = confirm(`El nombre "${nombre}" ya existe en la lista. ¿Desea agregarlo con un número?`);
        if (!confirmar) {
            inputAmigo.value = "";
            return;
        }
        let count = 1;
        while (amigos.includes(nombreFinal)) {
            nombreFinal = `${nombre} ${count++}`;
        }
    }

    amigos.push(nombreFinal);
    inputAmigo.value = "";
    actualizarLista();
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        const emoji = detectarGenero(amigo) === 'f' ? '👩🏻' : '👨🏻';
        
        const nombreSpan = document.createElement("span");
        nombreSpan.textContent = `${emoji} ${amigo}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "×";
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => eliminarAmigo(index);
        deleteButton.title = "Eliminar";
        
        li.appendChild(nombreSpan);
        li.appendChild(deleteButton);
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía, por favor añade nombres.");
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}

function resetearSorteo() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}

document.getElementById("amigo").addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        agregarAmigo();
    }
});
