$(document).ready(function () {

    $('#btnOk').click(function () {
        
        $.LoadingOverlay("show");

        var dni = $('#txtParcialDni').val().trim();
        var sexo = $('#GenderToString').val();
        var cuit = $('#txtParcialCuit').val().trim();
        var name = $('#txtParcialName').val().trim();
        var lastName = $('#txtParcialLastName').val().trim();

        $("#myModal").modal('hide');

        sendconfirmCustomer(dni, sexo, cuit, name, lastName);
      
    });

    //TODO: repasar y probar que es lo que hace
    $('#btnNotCorrespond').click(function () {
        //Obligo a poner un comentario de porque no es la persona.
        if (fieldValidacion('#Observaciones')) {

            $('#PersonNotFound').value() = $('#Observaciones').value();

            $('#txtDniLector').val(0);
            $('input[name=radio]:checked').val(false);
            //Genero el formulario de carga vacio
            //window.location.href = "../Operation/WorkflowOperation?dni=" + $('#txtDniLector').val().trim() + "&sexo=" + $('input[name=radio]:checked').val();
            window.location.href = "../Operation/WorkflowOperation?dni=" + $('#txtParcialDni').val().trim() + "&sexo=" + $('input[name=radio]:checked').val() + "&ciut=" + $('#txtParcialCuit').val().trim() + "&name=" + $('#txtParcialName').val().trim() + "&lastName=" + $('#txtParcialLastName').val().trim();
        }

    });

    $('#btnRestart').click(function () {
        window.location.href = "../Operation/RegisterOperation";
    });

});

//PONER EN UN COMMON
function fieldValidacion(field) {
    if ($(field).val() == "") {
        $(field + "MsgError").css("display", "block");
        return false;
    }
    return true;
}

//Voy ala vista principal de carga de datos - Comienza el 3er PASO desde el server
function sendconfirmCustomer(dni, sexo, cuit, name, lastName) {
    window.location.href = "../Operation/WorkflowOperation?dni=" + dni + "&sexo=" + sexo + "&cuit=" + cuit + "&name=" + name + "&lastName=" + lastName;
    return false;
   
}


