


# Sorteo de Amigos
![juego](https://github.com/user-attachments/assets/5d87751b-80c3-4080-8f0d-e2d8a94d0b7e)
<br>
Este proyecto es un pequeño ejercicio diseñado para practicar habilidades en lógica de programación. Permite a los usuarios agregar nombres a una lista de amigos, visualizar dicha lista y realizar un sorteo aleatorio para seleccionar un amigo.

## :hammer:Funcionalidades

- `Agregar Amigo:`: Permite añadir nombres a la lista de amigos.
- `Mostrar Amigos:`: Actualiza dinámicamente la lista de amigos en la interfaz.
- `Sortear Amigo:`: Escoge aleatoriamente un nombre de la lista de amigos y lo muestra como el amigo sorteado. 


## ⏯️Uso 

Para utilizar la aplicación:
1. Ingresa el nombre de un amigo en el campo de texto y presiona el botón "Agregar Amigo".
2. La lista de amigos se actualiza automáticamente.
3. Para realizar un sorteo, haz clic en el botón "Sortear Amigo". Se mostrará el nombre del amigo seleccionado aleatoriamente.

## Código de Implementación

Este proyecto utiliza HTML y JavaScript para crear una interfaz simple y funcional. A continuación, se muestra un fragmento del código principal:

```javascript
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, puedes abrir un issue o enviar un pull request.

## Autor

[<img src="https://avatars.githubusercontent.com/u/196575484?v=4" width=115><br><sub>Jonathan Puerta</sub>](https://github.com/JonathanPuertaG)

