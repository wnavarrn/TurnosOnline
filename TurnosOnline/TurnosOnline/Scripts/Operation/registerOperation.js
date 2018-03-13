$(document).ready(function () {


    $("#cardRegister").css("center-block")
   
    /*LOGICA PARA VERIFICAR LA UBICACIÓN (inicio)*/

    /*Verifico si hay algo en el LocalStorage*/
    var roomValue = localStorage.getItem("RoomName");

    if (roomValue == null || roomValue == "undefined" || roomValue == "") {

        $("#myModalRoom").modal({
            "backdrop": "static",
            "keyboard": true,
            "show": true                    
        });
    }

    $('#confirmRoom').click(function () {
        //Valido que hay elegido
        var idroom = $('#ddlRooms option:selected').val();

        if (idroom == "" || idroom == null) {

            alert("Debe indicar su ubicación");         
            $("#msgSelectRoom").css("display", "none");
            return false;

        } else {

             var textRooom = $('#ddlRooms option:selected').text();

            localStorage.setItem("RoomId", idroom);

            console.log("textRooom " + textRooom);

            localStorage.setItem("RoomName", textRooom);

            //Actualizo el loyout
            document.getElementById("ubication").innerHTML = textRooom;

            $("#msgWithOutUbication").css("display", "none");
            $("#msgWithUbication").css("display", "block");

            $("#myModalRoom").modal('hide');
            return false;
        }
  
    });

    /*LOGICA PARA VERIFICAR LA UBICACIÓN (fin)*/

    /*LOGICA PARA INGRESAR LOS DATOS (inicio)*/

    //Siempre el foco en el dni
    $('#txtDniLector').focus();

    /*Textbox NRO DE DOCUMENTO*/
    $("#txtDniLector").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion('#txtDniLector');
    });

    /*Radio GENERO*/
    $('input[type=radio][name=radio]').change(function () {
        //Limpio la validacion
        $('input[name="radio"]').removeClass("is-invalid");
        $('input[name="radio"]').css("display", "none");
        $('#rdGeneroMsgError').css("display", "none");
    });

    //Enter o se escanea con el lector
    $('#txtDniLector').keydown(function (e) {

        if (e.keyCode == 13) {
    
            //$("#MsgEnter").css("display","none");

            var currentdni = $('#txtDniLector').val().trim();

            //Valido que el campo tenga valor
            if (RegisterValidate()) {

                var dni = parseInt(currentdni);

                if (currentdni.length > 30) {

                    $("#MsgGenero").css("display", "none");
                    $(".divGenero").css("display", "none");

                    if (currentdni.indexOf('"') == 0) {

                        currentsexo = currentdni.substr(nth_ocurrence(currentdni, '"', 8) + 1);
                        currentsexo = currentsexo.substr(0, currentsexo.indexOf('"'));

                        currentdni = currentdni.substr(1, currentdni.indexOf(' ') - 1);

                    } else {

                        currentsexo = currentdni.substr(nth_ocurrence(currentdni, '"', 3) + 1);
                        currentsexo = currentsexo.substr(0, currentsexo.indexOf('"'));

                        currentdni = currentdni.substr(nth_ocurrence(currentdni, '"', 4) + 1);
                        currentdni = currentdni.substr(0, currentdni.indexOf('"'));
                    }

                    //Verifico la cantidad de caracteres de los campos
                    if (currentdni != null && currentsexo != null) {
                        //Envio los datos al servidor
                        GetConfirmPerson(currentdni, currentsexo);

                        return false;
                    }
                } else {
                    
                    $("#MsgGenero").css("display", "block");
                    $(".divGenero").css("display", "block");
                }

            } else {
                //$("#MsgEnter").css("display", "none");
                $("#MsgGenero").css("display", "none");
                $(".divGenero").css("display", "none");
                return false;
            }
        }
    });
    //Boton buscar
    $('#btnRegisterCustomer').click(function () {
        
        //Valido el textbox
        fieldValidacion("#txtDniLector");
        //valido el radiobutton
        if (radioValidation())
        {
            //Envio los datos al servidor
            GetConfirmPerson($('#txtDniLector').val().trim(), $('input[name=radio]:checked').val());
        }    
        return false;
    });

    /*LOGICA PARA INGRESAR LOS DATOS (fin)*/
});

//Envio los datos al servidor
//Traigo el popUp con los datos de la persona para confirmar
function GetConfirmPerson(dni, sexo) {

    var request = $.ajax({
        type: "GET",
        url: $('#urlGetConfirmCustomer').val(),
        data: { dni: dni, sexo: sexo }
    });
    request.done(function (result) {

        if (result.Success){

        $("#PreviewDataPerson").html(result.Html);
        $("#myModal").modal({
            "backdrop": "static",
            "keyboard": true,
            "show": true
        });
        } else {

            //voy directamente ala vista de carga de datos. es decir PASO 3
        }
    });
    request.fail(function (jqXHR, textStatus) {

        window.location = "#anerror";
        $("#error").css("font-weight", "bold");
        $("#error").css("color", "Red");
        $("#error").css("display", "block");
        $('#bodyerror').html(result.Message);
    });


}

//Funcion que validad en campo texto
function fieldValidacion(field) {
    if ($(field).val().trim() == "" || $(field).val().trim() == null) {
        $(field).addClass("is-invalid");
        $(field + "MsgError").css("display", "block");
        return false;
    }
    return true;
}

function cleanValidacion(field) {
    $(field).removeClass("is-invalid");
    $(field + "MsgError").css("display", "none");
}

function radioValidation() {

    var gender = $('input[name="radio"]').val();

    if ($("#rdGenero:checked").length == 0) {
        alert("valida");
        $('input[name="radio"]').addClass("is-invalid");
        $('#rdGeneroMsgError').css("display", "block");
        return false;
    }
    return true;
}

function RegisterValidate()
{
    return fieldValidacion("#txtDniLector");
}

/*VALIDACIONES (fin)*/