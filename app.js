// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Crear un array para almacenar los nombres  

function agregarAmigo() {  
    let amigo = document.getElementById('amigo').value; // Capturar el valor del campo de entrada  
   
    if (amigo.trim() === "") {  
        alert("Por favor, inserte un nombre."); // Validar la entrada  
    } else {   
        amigos.push(amigo); // Actualizar el array de amigos  
        console.log(amigos);  
        limpiarCaja();  
        mostrarAmigos();  
    }  
}  

function limpiarCaja() {  
    document.querySelector('#amigo').value = ''; // Limpiar el campo de entrada  
}  

//función para actualizar la lista de amigos
function mostrarAmigos() {  
    const lista = document.getElementById("listaAmigos");   // 1. Obtener el elemento de la lista  
    lista.innerHTML = "";  // 2. Limpiar la lista existente 
    for (let i = 0; i < amigos.length; i++) {  // 3. Iterar sobre el arreglo 
        const item = document.createElement('li');  // 4. Crear un nuevo elemento <li> 
        item.textContent = amigos[i];   
        lista.appendChild(item);  // Agregar elementos a la lista
    }  
}