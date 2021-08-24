// Mostrar un propmt en la pagina principal de
// las clases para capturar el nombre y mostrarlo
// posteriormente en el inicio

// Hacer en el futuro un prompt como contraseña
// para tener seguridad

// Guardar en una cookie el nombre para no preguntar siempre con el prompt



var hello = prompt("Hola, ingresa tu nombre: ")
if (hello == null) {
    console.log("No hay usuario")
    hello = "estudiante";
} else if (hello == "") {
    console.log("Indefinido")
    hello = "estudiante"

} else {
    console.log(hello)

}

user.innerHTML += `Bienvenido ${hello}`;

// Esto se puede aplicar al inicio de la pagina de clases




const clases = [
    {nombre: `<button class="button__class" onclick="location.href='https://www.facebook.com'">Georgrafia</button>`, Horario: "HOLA"},
    {nombre: `<button class="button__class" onclick="location.href='https://www.facebook.com'">Historia</button>`, Horario: "HOLA"},
    {nombre: `<button class="button__class" onclick="location.href='https://www.facebook.com'">Matematicas</button>`, Horario: "HOLA"},
    {nombre: `<button class="button__class" onclick="location.href='https://www.facebook.com'">Español</button>`, Horario: 4000},
    {nombre: `<button class="button__class" onclick="location.href='https://www.facebook.com'">Ingles</button>`, Horario: 4000},
    {nombre: `<button class="button__class" onclick="location.href='https://www.facebook.com'">Quimica</button>`, Horario: 4000}
]

const form = document.querySelector("#form");
// const button = document.querySelector("#button");
const results = document.querySelector("#results");

const filter = ()=> {
    // console.log(form.value)
    results.innerHTML = "";

    const text = form.value.toLowerCase();
    for(let clase of clases){
        let name = clase.nombre.toLowerCase();
        if(name.indexOf(text) !== -1){
            results.innerHTML += `
            <li class="lista">${clase.nombre} Horario: ${clase.Horario}</li> 
            `
        }
    }
    
    if(results.innerHTML === ""){
        results.innerHTML += `
            <h4 class="noEncontrado">Clase no encontrada ...</h4>
            `
    }
}


// button.addEventListener("click", filter)
document.querySelector('#form').addEventListener('keypress', function (check) {
    if (check.key === 'Enter') {
      filter()
    }
});
form.addEventListener("keyup", filter)

// Elegir si el buscador tendrá botón para buscar