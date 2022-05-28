//Validación de formulario

/*Selecciono los elementos de mi formulario */
const nombre = document.querySelector("#nombre"); 
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto"); 
const areaTexto = document.querySelector("#text-area"); 
const formulario = document.querySelector("#form"); 

const parrafo = document.querySelector(".form__warnings")


//Funcion de validacion de cada campo. 
const validacion = (e)=>{
    
    let mensaje = "";
    let warnings = false; 

    //validacion nombre
    if(nombre.value === ""){
        mensaje += "Ingrese su nombre <br>"; 
        warnings = true;
        e.preventDefault(); //Evita el comportamiento por defecto del boton submit. 
    }else if(nombre.value.length< 4){
        mensaje += "Ingrese un nombre válido<br>" 
        warnings = true;
    }
    
    //valicacion email
    if(email.value === ""){
        mensaje +="Ingrese su email <br> "
        warnings = true; 
        e.preventDefault(); 
        //se podria validar con expresiones regulares. Proximamente. 
    }

    //validacion asunto
    if(asunto.value === ""){
        mensaje +="Ingrese el asunto <br> "
        warnings = true; 
        e.preventDefault(); 
    }else if (asunto.value.length < 3){
        mensaje +="Ingrese un asunto válido <br> "
        warnings = true; 
        e.preventDefault();
    }
    //validacion text-area
    if(areaTexto.value === "" || areaTexto.value.length < 5){
        mensaje +="Ingrese su mensaje <br> "
        warnings = true; 
        e.preventDefault();
    }
    
    //Si se cumple alguna de las condiciones anteriores mostrará en el parrafo los mensajes de error y no se enviará el formulario. De lo contrario se enviarán los datos, pues el usuario completo los datos. 
    if(warnings){
        parrafo.innerHTML = mensaje;
        e.preventDefault(); 
    }else{
        parrafo.innerHTML = "Enviado"
        parrafo.style.background= "var(--verde)";
    }
}

//Escucho si se activa el evento submit del formulario. Si el mismo se activa se ejecutará la función validacion. 
formulario.addEventListener("submit", validacion); 