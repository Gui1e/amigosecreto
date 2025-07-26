// Declaramos la lista de amigos
let listaAmigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigosUl = document.getElementById('listaAmigos');
const resultadoUl = document.getElementById('resultado');

// Añadir Enter en el input para ingreso más eficiente
inputAmigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validación más robusta
    if (!nombre || !/^[A-Za-z\s]+$/.test(nombre)) {
        mostrarMensajeError('Por favor, ingresa un nombre válido sin caracteres especiales.');
        return;
    }

    // Verificar si el amigo ya existe
    if (listaAmigos.includes(nombre)) {
        mostrarMensajeError('Este amigo ya está en la lista.');
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombre);

    // Crear y agregar el elemento a la lista
    crearElementoLista(nombre, listaAmigosUl);

    // Limpiar el campo de entrada
    inputAmigo.value = '';
    ocultarMensajeError();
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        mostrarMensajeError('No hay amigos en la lista para sortear.');
        return;
    }

    // Seleccionar un índice aleatorio
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indice];

    // Mostrar el resultado
    resultadoUl.innerHTML = ''; // Limpiar resultados anteriores
    crearElementoLista(`El amigo secreto es: ${amigoSorteado}`, resultadoUl);
    ocultarMensajeError();
}

// Función auxiliar para crear elementos de lista
function crearElementoLista(texto, ul) {
    const li = document.createElement('li');
    li.textContent = texto;
    li.setAttribute('role', 'listitem');
    ul.appendChild(li);
}

// Función auxiliar para mostrar mensajes de error
function mostrarMensajeError(mensaje) {
    let mensajeError = listaAmigosUl.nextElementSibling;
    if (!mensajeError || !mensajeError.classList.contains('error-message')) {
        mensajeError = document.createElement('p');
        mensajeError.classList.add('error-message');
        listaAmigosUl.parentNode.insertBefore(mensajeError, listaAmigosUl.nextSibling);
    }
    mensajeError.textContent = mensaje;
}

// Función auxiliar para ocultar mensajes de error
function ocultarMensajeError() {
    const mensajeError = listaAmigosUl.nextElementSibling;
    if (mensajeError && mensajeError.classList.contains('error-message')) {
        mensajeError.remove();
    }
}
