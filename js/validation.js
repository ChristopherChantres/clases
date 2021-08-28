// Estilizar las alertas para el acceso denegado y para el acceso concedido
// Realizar una animacion despues de tiempo de espera de 10 segundos
// con esto:
        // setTimeout( function() { window.location.href = "https://professor-falken.com"; }, 5000 );
        
validation();

function validation() {
    var password = "alumnoa24";
    var check = prompt("Ingresa la contraseña: ");
    if (password == check) {
        run()
    } else if (check == null) {
        window.location.href = "index.html";
    } else {
        validation();
    }
}

function run() {

    function borrar(id) {
        var elem = document.getElementById(id); return elem.parentNode.removeChild(elem);
    }

    // funcion del alert de exito
    function msj(titulo, contenido, idioma) {
        var padre = document.createElement('div');
        padre.id = 'modal';
        document.body.appendChild(padre);
        var bc = idioma ? idioma : 'Aceptar';
        var ModalData = document.getElementById("modal");
        var boton = "";
        ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>'+titulo+'</h3><span id="mc">'+contenido+'</span><div id="buttons"><a id="mclose" href="#">'+bc+'</a>'+boton+'</div></div></div>';
        document.querySelector(".modal").style.height = document.getElementById("mc").offsetHeight+100 + 'px';
        document.getElementById('mclose').onclick=function(){ borrar('modal'); };
        document.getElementById('modal-back').onclick=function(){ borrar('modal'); }
    }
    //probando la función, creando una alerta
    msj('Acceso concedido', 'La contraseña ha sido <b>correcta :)</b>', 'Cerrar');
}