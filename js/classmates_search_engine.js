// ------------------ motor de busqueda --------------------

// poner los correos de los estudiantes
const clases = [
    {nombre: "JOSE ARIEL ANAYA ESPINOZA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=jose.anaya5952%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ADRIANA MICHELLE ANGEL ALONSO", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=adriana.angel1487%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ALEXA GABRIELA BRAVO ROSALES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=alexa.bravo1478%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "LUIS FERNANDO ALBERTO BRISTOL QUINTAS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=luis.bristol1480%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "DIEGO CARDENAS DIAZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=diego.cardenas1484%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "CHRISTOPHER EDER CHANTRES JUSTO", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=christopher.chantres2646%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "STEFANY GORETTY DE JESUS RODRIGUEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=stefany.dejesus1482%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "EDUARDO DEL RIO BANUELOS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=eduardo.delrio4999%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "NAOMI MONTSERRAT DIAZ GRAJALES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=naomi.diaz1482%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "SOPHIA ELIZABETH FLORES OLIVERA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=sophia.flores1481%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "VIOLETA YAMILET FLORES VELAZQUEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=violeta.flores1482%40alumnos.udg.mx&authuser=0">Enviarle correo</button>`},
    {nombre: "NAILEA CORAL GARCIA MENDEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=nailea.garcia1479%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ALLISON JOSSELIN GARIBALDI TORRES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=allison.garibaldi6109%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ROBERTO NAIM GOMEZ HERRERA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=roberto.gomez1478%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "MONIQUE HIROMI GONZALEZ SANCHEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=monique.gonzalez3292%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "CESAR GUTIERREZ AMADOR", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=cesar.gutierrez1479%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "DIEGO RAMSES HERNANDEZ CASTILLO", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=diego.hernandez5980%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "CHRISTIAN EDUARDO HERNANDEZ GOMEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=christian.hernandez5980%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "RUTH ANA HAYLIN JIMENEZ VILLA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=ruth.jimenez5967%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "JUAN CARLOS LOPEZ GARCIA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=juan.lopez1479%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "AXEL LOPEZ MARTINEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=axel.lopez1478%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "HANNIA GUADALUPE LOPEZ MEDINA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=hannia.lopez1487%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ASHBY MARTINEZ CABRALES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=ashby.martinez5992%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "CELESTE MARTINEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=celeste.martinez5945%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "MARTHA JULIA MAYO SILVA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=martha.mayo1480%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "MARIA PAULINA MELGAREJO GUILLEN", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=maria.melgarejo5950%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "NAOMI ODETTE MURILLO ALVAREZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=naomi.murillo1485%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ABRIL PAVIA RIOS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=abril.pavia1479%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ALEJANDRO PELAYO LOPEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=alejandro.pelayo1483%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "SHAILA CAMILA JOSOSQUI PENA RUELAS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=shaila.pena1488%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "STEPHANI DARIANA RAMIREZ HERNANDEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=stephani.ramirez0021%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "MIRIAM YOKEBED REYES SALDIVAR", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=miriam.reyes1481%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "CARLOS EDUARDO RUIZ PADILLA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=carlos.ruiz2630%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "SANDRA ELIZABETH SANCHEZ CANALES", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=sandra.sanchez1480%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "HASHLI ESTEPHANY SANCHEZ SANCHEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=hashli.sanchez1481%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ABRAHAM ALEJANDRO SANDOVAL LANGARICA", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=abraham.sandoval1482%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "RAFAEL TAPIA VILLEGAS", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=rafael.tapia1609%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "YENIFER TORRES HERNANDEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=yenifer.torres1481%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "KATIA NOHELY VIDRIO AVELAR", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=katia.vidrio0006%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "ZAYDA LINETH VILLAGRAN LOPEZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=zayda.villagran1485%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
    {nombre: "DIANA JUDITH ZARATE GUTIERREZ", Horario: `<button class="button__class" onclick="location.href='https://mail.google.com/mail/?view=cm&fs=1&to=diana.zarate1484%40alumnos.udg.mx&authuser=0'">Enviarle correo</button>`},
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
            <h4 class="classmate_notfound">Compañero no encontrado ...</h4>
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