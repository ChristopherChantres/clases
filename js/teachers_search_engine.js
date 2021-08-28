const clases = [
    {nombre: "SERGIO DE JESUS CHAVARRIA FONSECA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=sergio.chavarria0178%40academicos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "JOSE SALVADOR TRUJILLO GUERRERO", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=jose.tguerrero%40academicos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "JOSE MIGUEL ZEPEDA BECERRA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=jose.zbecerra%40academicos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "MIGUEL ANGEL ESPINOSA PALACIOS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=miguel.espinosa%40academicos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "JOSE MANUEL CAZARES PENA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=jose.cazares4144%40academicos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "LAURA LUZ RAMIREZ TORRES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=laura.rtorres%40academicos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "SUSANA ROCIO ORTEGA ARIAS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=susana.ortega5587%40academicos.udg.mx&authuser=0'">Enviarle correo</button>`}
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
             
            `
        }
    }
    
    if(results.innerHTML === ""){
        results.innerHTML += `
            <h4 class="teacher_notfound">Profesor no encontrado ...</h4>
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