/*===========================================
       Encontrar numero menor JSON
===========================================*/
var resultado = document.getElementById("info");
var resultado2 = document.getElementById("info2");

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
                       
            var datos = JSON.parse(xmlhttp.responseText); //La informacion recibida la convertimos a JSON
            var edadMenor = encontrarEdadMenor(datos); //llamamos a la funcion
            resultado.innerHTML += "La edad menor es: " + edadMenor;
        }
    }
    //Finalizamos la peticion
    //open("tipoDeMetodo","DondeProvieneInformacion", trueOfalse)
    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

function encontrarEdadMenor(objetoJSON){
    
    var arreglo = [];

    for(var i in objetoJSON){
        var persona = objetoJSON[i]; //Almacenamos todos los objetos jason en la variable "persona"
        arreglo.push(persona.edad); //Agregamos al arreglo todas las edades
    }

    //----------------- FORMA 1 PARA OBTENER LA EDAD MENOR ------------------ 
    /*
    var edadMenor = arreglo[0]; //Asumimos que la primer edad del arreglo es la menor
    for(var j = 0; j < arreglo.length; j++){
        if(arreglo[j] < edadMenor){ //Si las edades dentro del arreglo es menor a la "edadMenor"
            edadMenor = arreglo[j]; //Si algun elemento del arreglo es menor que la "edadMenor" la almacenamos en edadMenor
        }
    }*/

    //----------------- FORMA 2 PARA OBTENER LA EDAD MENOR ------------------ 
    var edadMenor = Math.min.apply(null, arreglo); //Si queremos calcular la edad Mayor cambiamos "min" por "max"
    return edadMenor;
} 