// Espera a que todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la referencia al botón y al input por sus ID
    let buttonText = document.getElementById("buttonText");
    let inputText = document.getElementById("inputText");

    // Añade un evento 'click' al botón
    buttonText.addEventListener("click", function () {
        // Obtiene el valor del input
        let values = inputText.value;
        
        // Guarda el valor del input en el localStorage con la clave "getdata"
        localStorage.setItem("getdata", values);
        
        // Limpia el campo de input después de guardar el dato
        inputText.value = "";

        });
      
});