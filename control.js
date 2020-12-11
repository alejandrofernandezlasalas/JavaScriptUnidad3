function validarVacio(){

    var usuario = document.getElementById("usuario").value;

    var clave = document.getElementById("clave").value;

    if(usuario == "" || clave == ""){
        alert("El usuario o la clave estan vacias");
    }

}

function validarArroba(){

    var usuario = document.getElementById("usuario").value;

    for(let letra of usuario){
        if(letra == "@")
            return;
    }
    
    alert("Falta el @ del usuario");

}

function validarInicio(){

    var boton = document.getElementById("boton");

    boton.addEventListener("click", validarVacio);
    boton.addEventListener("click",validarArroba);

}

validarInicio();