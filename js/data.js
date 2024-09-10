// Espera a que todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la referencia al elemento <span> donde se mostrará el dato
    let localdata = document.getElementById("data");
    
    // Obtiene el dato guardado en el localStorage con la clave "getdata"
    let getdata = localStorage.getItem("getdata");

    // Si hay un dato guardado en el localStorage, lo muestra en el <span>
    if (getdata) {
        localdata.textContent = getdata;
    }
});