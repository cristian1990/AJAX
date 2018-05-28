/*===========================================
              XMLHttpRequest
El objeto XMLHttpRequest se puede utilizar para intercambiar datos con un servidor 
Web detrás de las escenas. Esto significa que es posible actualizar partes de una 
página web, sin necesidad de recargar la página entera.
===========================================*/

function ejecutarAJAX(){

    /*PARA VERIFICAR CON QUE TIPO DE NAVEGADOR TRABAJAMOS
    var peticionAJAX;
    if(window.XMLHttpRequest){ //Si trabajamos con navegadores modernos
        peticionAJAX = new XMLHttpRequest();
    }else{ // Si trabajamos con navegadores antiguos
        peticionAJAX = new ActiveXObject("Microsoft.XMLHTTP");
    }*/

    //----------------------------------------------------------

    //COMO SABEMOS QUE TRABAJAMOS CON UNO MODERNO
    //Creamos un objeto de XMLHttpRequest()
    var peticionAJAX = new XMLHttpRequest();

    //onreadystatechange = Se encarga de procesar la respuesta enviada por el servidor
    peticionAJAX.onreadystatechange = function(){

        /*readyState = El readyState propiedad se mantiene el estado de la XMLHttpRequest. puede tener valor del 0 al 4
            0 Peticion no ha sido inicializada
            1 Peticion ha sido establecida
            2 Peticion ha sido enviada
            3 Peticion esta siendo procesada
            4 Peticion ha sido finalizada
        */
        //Si la peticion ha sido finalizada y exitosa
        if(peticionAJAX.readyState == 4 && peticionAJAX.status == 200){ //(status == 200) estado de peticion exitosa
            
            //Entonces vemos el mensaje en la pantalla
            //responseText = obtiene los datos de respuesta como una cadena
            document.getElementById("info").innerHTML = peticionAJAX.responseText; 
        }
    }
    //Finalizamos la peticion
    //open("tipoDeMetodo","DireccionServidor", trueOfalse)
    peticionAJAX.open("GET", "texto.txt", true); //true = peticion asincrona, la pantalla no sera recargada
    peticionAJAX.send();
}