// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputBox = document.getElementById("amigo");
const listContainer = document.getElementById("listaAmigos");
const Ganador = document.getElementById("resultado");
const lista = [];

function agregarAmigo(){
    if(inputBox.value === ''){
        alert("Debes ingresar el nombre de un amigo")
    }
    else{
        let li = document.createElement("li");
        let amigo = inputBox.value;
        li.innerHTML = amigo;
        lista.push(amigo);
        listContainer.appendChild(li);
        
    }
    inputBox.value = "";
    inputBox.focus();

}

inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function sortearAmigo(){
    while (Ganador.firstChild) {
        Ganador.removeChild(Ganador.firstChild);
    }
    const aleatorio = lista[Math.floor(Math.random() * lista.length)];
    let li = document.createElement("li");
    console.log(aleatorio);
    li.innerHTML = "el ganador es: " + aleatorio;
    
    Ganador.appendChild(li);
}