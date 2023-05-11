$(document).ready(function(){
    $("#error").hide();
    $("#formulario").submit(function(){
        var mensaje = "";
        if($("#nombre").val().trim().length == 0) {
            mensaje = "El campo de nombre no puede quedar en blanco";
        }
        if($("#apellido").val().trim().length == 0) {
            mensaje = "El campo de apellido no puede quedar en blanco";
        }
        if($("#email").val().trim().length == 0) {
            mensaje = "El campo del correo no puede quedar en blanco";
        }
        if($("#direccion").val().trim().length == 0) {
            mensaje = "El campo de la dirección no puede quedar en blanco";
        }
        if($("#contraseña").val().trim().length == 0) {
            mensaje = "El campo de la contraseña no puede quedar en blanco";
        }
        if($("#contraseña2").val().trim().length == 0) {
            mensaje = "El campo de reingresar contraseña no puede quedar en blanco";
        }
        // Evitamos que se envien los datos del formulario
        if(mensaje != "") {
            $("#error").html(mensaje);
            $("#error").show();
            event.preventDefault();
        }

    });
})