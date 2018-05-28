/*===========================================
    Cómo leer Array JSON usando AJAX
===========================================*/
var resultado = document.getElementById("info");

function ajax_get_json() {

    var xmlhttp;

    //Verificamos el tipo de navegador
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); //Navegador moderno
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //Navegadores viejos
    }

    //Ejecutamos la peticion de AJAX
    //onreadystatechange = Se encarga de procesar la respuesta enviada por el servidor
    xmlhttp.onreadystatechange = function () {
        //Si la peticion fue finalizada y exitosa
        //readyState = El readyState propiedad se mantiene el estado de la XMLHttpRequest. puede tener valor del 0 al 4
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            //entonces obtenemos la informacion, la convertimos a JSON, almacenamos y la mostramos en la pantalla
            var datos = JSON.parse(xmlhttp.responseText); //Almacenamos todo en la variable datos
            
            //Si div "info" esta vacio mostramos toda la informacion, si no no
            if(resultado.innerHTML === ""){
                for(var i in datos){
                    resultado.innerHTML += datos[i].nombre + " " + datos[i].apellido + " tiene " + datos[i].edad + "<hr>";
                }
            }
        }
    }

    //Finalizamos la peticion
    //open("tipoDeMetodo","DondeProvieneInformacion", trueOfalse)
    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();

}