// Declaramos la lista de amigos 
let listaAmigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigosUl = document.getElementById('listaAmigos');
const resultadoUl = document.getElementById('resultado');

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombre);

    // Crear y agregar el elemento a la lista
    const li = document.createElement('li');
    li.textContent = nombre;
    li.setAttribute('role', 'listitem');
    listaAmigosUl.appendChild(li);

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Seleccionar un índice aleatorio
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indice];

    // Mostrar el resultado
    resultadoUl.innerHTML = ''; // Limpiar resultados anteriores
    const liResultado = document.createElement('li');
    liResultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultadoUl.appendChild(liResultado);
}