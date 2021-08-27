// ------------------ motor de busqueda --------------------

// poner los correos de los estudiantes
const clases = [
    {nombre: "JOSE ARIEL ANAYA ESPINOZA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=jose.anaya5952%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ADRIANA MICHELLE ANGEL ALONSO", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=adriana.angel1487%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ALEXA GABRIELA BRAVO ROSALES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=alexa.bravo1478%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "LUIS FERNANDO ALBERTO BRISTOL QUINTAS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=luis.bristol1480%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "DIEGO CARDENAS DIAZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=diego.cardenas1484%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "STEFANY GORETTY DE JESUS RODRIGUEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=stefany.dejesus1482%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "EDUARDO DEL RIO BANUELOS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=eduardo.delrio4999%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "NAOMI MONTSERRAT DIAZ GRAJALES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=naomi.diaz1482%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "SOPHIA ELIZABETH FLORES OLIVERA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=sophia.flores1481%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "VIOLETA YAMILET FLORES VELAZQUEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=violeta.flores1482%40alumnos.udg.mx&authuser=0">Enviarle correo</button>`},
    {nombre: "NAILEA CORAL GARCIA MENDEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=nailea.garcia1479%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ALLISON JOSSELIN GARIBALDI TORRES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=allison.garibaldi6109%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
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

            <section class="section">
                <table class="section__table">
                    <tr>
                    <td><strong>Compañero</strong></td>
                    <td><strong>Correo</strong></td>
                    </tr>
            
                    <tr>
                    <td>
                        ${clase.nombre}
                    </td>
                    <td>
                        ${clase.Horario}
                    </td>
                    </tr>
                </table>
            </section>
            `
        }
    }
    
    if(results.innerHTML === ""){
        results.innerHTML += `
            <h4 class="compa__noEncontrado">Compañero no encontrado ...</h4>
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