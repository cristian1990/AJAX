/*===========================================
       Buscar dato en un objeto de JSON
===========================================*/
var resultado = document.getElementById("info");

function ajax_get_json(usuarioIngresado) {

    var xmlhttp;

    //Verificamos el tipo de navegador
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); //Navegador moderno
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //Navegadores viejos
    }

    //Analizamos la cantidad de caracteres ingresados
    if (usuarioIngresado.length === 0) { //si no se ingreso nada
        resultado.innerHTML = ""; //No se ve ningun mensaje en pantalla
    }
    else {
        //Ejecutamos la peticion de AJAX
        //onreadystatechange = Se encarga de procesar la respuesta enviada por el servidor
        xmlhttp.onreadystatechange = function () {
            //Si la peticion fue finalizada y exitosa
            //readyState = El readyState propiedad se mantiene el estado de la XMLHttpRequest. puede tener valor del 0 al 4
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

                var datos = JSON.parse(xmlhttp.responseText); //Convertimos el string recibido en JSON

                var x = encontrarPersona(datos, usuarioIngresado); //Llamo a la funcion, retorna true o false
                var mensaje = (x === true) ? "<span class = 'encontrado'>Si fue encontrado</spam>" : 
                                             "<span class = 'no-encontrado'>No fue encontrado</spam>"
                resultado.innerHTML = mensaje;
            }
        }

    }

    //Finalizamos la peticion
    //open("tipoDeMetodo","DondeProvieneInformacion", trueOfalse)
    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

function encontrarPersona(objetoJSON, usuario){

    var arreglo = [];

    for(var i in objetoJSON){
        var persona = objetoJSON[i]; //Guardamos todos los array JSON en la variable "persona"

        arreglo.push(persona.nombre); //Agregamos todos los nombres al array "arreglo"
    }
    //Si el indice del nombre ingresadop es mayor que -1 es porque existe.
    return arreglo.indexOf(usuario) > -1; 
}