var dzoptions = {
    url:"/",
    autoQueue: false
};
var myDropzone = new Dropzone("div#file-upload", dzoptions);    

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    if (sessionStorage.getItem('usuario') != null){
        document.getElementById("correo").value = sessionStorage.getItem('usuario');
    }

    document.getElementById("guardarCambios").addEventListener("click", function(){
        localStorage.setItem("file-upload", document.getElementById("file-upload").value);
        localStorage.setItem("nombres", document.getElementById("nombres").value);
        localStorage.setItem("apellidos", document.getElementById("apellidos").value);
        localStorage.setItem("telefono", document.getElementById("telefono").value);
        localStorage.setItem("edad", document.getElementById("edad").value);
     });
     
    if (localStorage.getItem('nombres') != null){
        document.getElementById("file-upload").value = localStorage.getItem('file-upload');
        document.getElementById("nombres").value = localStorage.getItem('nombres');
        document.getElementById("apellidos").value = localStorage.getItem('apellidos');
        document.getElementById("telefono").value = localStorage.getItem('telefono');
        document.getElementById("edad").value = localStorage.getItem('edad');
    }
});

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
