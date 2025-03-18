// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtener el campo de texto
    const nombre = input.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de texto
    input.value = "";

    // Actualizar la lista de nombres en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento <ul>
    listaAmigos.innerHTML = ""; // Limpiar la lista

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya al menos 2 amigos en la lista
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Mezclar el array de amigos de forma aleatoria
    const amigosMezclados = mezclarArray([...amigos]);

    // Crear parejas de amigos secretos
    const resultado = [];
    for (let i = 0; i < amigosMezclados.length; i++) {
        const amigo = amigosMezclados[i];
        const amigoSecreto = amigosMezclados[(i + 1) % amigosMezclados.length]; // El siguiente en la lista (o el primero si es el último)
        resultado.push(`${amigo} ➡️ ${amigoSecreto}`);
    }

    // Mostrar el resultado en el HTML
    mostrarResultado(resultado);
}

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
}

// Función para mostrar el resultado del sorteo en el HTML
function mostrarResultado(resultado) {
    const resultadoElement = document.getElementById("resultado"); // Obtener el elemento <ul>
    resultadoElement.innerHTML = ""; // Limpiar el contenido anterior

    // Recorrer el array de resultados y agregar cada uno a la lista
    resultado.forEach((pareja) => {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = pareja; // Asignar la pareja de amigos
        resultadoElement.appendChild(li); // Agregar el <li> a la lista
    });
}