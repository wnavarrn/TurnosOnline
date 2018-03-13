$(document).ready(function () {

    var form = "#frmCustomerOperation";

    $('[data-toggle="tooltip"]').tooltip();

    $('#CivilStatus').combobox();

    /*NOMBRE*/
    $("#FirstName").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#FirstName");
    });
    $('#FirstName').blur(function () {
        /*valido*/
        fieldValidacion('#FirstName');
    });
    /*APELLIDO*/
    $("#LastName").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#LastName");
    });
    $('#LastName').blur(function () {
        /*valido*/
        fieldValidacion('#LastName');
    });
    /*FECHA NACIMIENTO*/
    $("#BirthdayToString").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#BirthdayToString");
    });
    $('#BirthdayToString').blur(function () {
        /*valido*/
        fieldValidacion('#BirthdayToString');
    });
    /*LUGAR DE NACIMIENTO*/
    $("#Birthplace").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#Birthplace");
    });
    $('#Birthplace').blur(function () {
        /*valido*/
        fieldValidacion('#Birthplace');
    });
    /*NACIONALIDAD*/
    //$("#CountryIdundefined").keypress(function () {
    //    /*limpio validaciones*/
    //    cleanValidacion("#CountryId");
    //});
    //$("#CountryIdundefined").focusout(function () {
    //    alert("sdfsdfsdf");
    //});
    //$('#CountryIdundefined').blur(function () {
    //     $(field + 'undefined').removeClass("is-invalid");
    //     $(field + "MsgError").css("display", "none");
    //});

    //$("#CountryIdundefined").keypress(function () {
    //    $(field + 'undefined').removeClass("is-invalid");
    //    $(field + "MsgError").css("display", "none");
    //});
    /*GENERO*/
    $("#Gender").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#Gender");
    });
    $('#Gender').blur(function () {
        /*valido*/
        selectValidacion('#Gender');
    });
    /*ESTADO CIVIL*/
    $("#CivilStatus").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#CivilStatus");
    });
    $('#Gender').blur(function () {
        /*valido*/
        selectValidacion('#CivilStatus');
    });
    /*TIPO DOCUMENTO*/
    $("#DocumentType").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#DocumentType");
    });
    $('#DocumentType').blur(function () {
        /*valido*/
        fieldValidacion('#DocumentType');
    });
    /*NRO DE DOCUMENTO*/
    $("#DocumentNumber").keypress(function () {
        /*limpio validaciones*/
        cleanValidacion("#DocumentNumber");
    });

    $('#DocumentNumber').blur(function () {
        /*valido*/
        fieldValidacion('#DocumentNumber');
    });

    /*INICIALIZAR CAMPOS*/
    $('#BirthdayToString').mask('Dd/Mm/AaYy', {
        placeholder: "dd/mm/aaaa",
        translation: {
            'D': {
                pattern: /[0-3]/
            },
            'd': {
                pattern: /[0-9]/
            },
            'M': {
                pattern: /[0-1]/
            },
            'm': {
                pattern: /[0-9]/
            },
            'A': {
                pattern: /[1-2]/
            },
            'a': {
                pattern: /[1-9]/
            },
            'Y': {
                pattern: /[1-9]/
            },
            'y': {
                pattern: /[0-9]/
            }
        }
    });

    //$('#CountryId').combobox();

    //$('#CountryDesc').autocomplete({

    //    search: function (event, ui) {

    //        $(this).data().term = null;
    //    },
    //    response: function (event, ui) {
    //    },
    //    source: function (request, response) {
    //        $.ajax({
    //            url: $("#urlAutoCompleteCountry").val(),
    //            type: "POST",
    //            dataType: "text json",
    //            data: { Prefix: request.term },
    //            success: function (data) {

    //                response($.map(data, function (item) {

    //                    return {
    //                        label: item.Descripcion,
    //                        value: item.Descripcion,
    //                    };
    //                }))
    //            }
    //        })
    //    },
    //    messages: {
    //        noResults: '',
    //        results: function (resultsCount) { }
    //    },
    //    minLength: 2,
    //    autoFocus: false,
    //    select: function (event, ui) {

    //        $('#CountryDesc').val(ui.item.Description);
    //    }
    //})
    $('#BirthPlaceId').combobox();

    $('#DocumentType').combobox();

    $('#NacionalityId').combobox();
    
    $('#CountryId').combobox();

    $('#StateId').combobox();
    
    $('#CivilStatus').combobox();

    $('#Gender').combobox();

    $('#BankAccount').combobox();
    
    $('#IsEmployee').combobox();

    $('#Activity').combobox();

    $('#ProfesionId').combobox();

    $("#DocumentNumber").keypress(function () {
        return onlyNumbers(event);
    });

    //$("#CUIT").keypress(function () {
    //    return onlyNumbers(event);
    //});

    $("#CUIT").keypress(function () {
        return onlyNumbers(event);
    });
    //$('#CUIT').setMask({ mask: '99-99999999-9' });

    $("#Number").keypress(function () {
        return onlyNumbers(event);
    });

    $("#ZipCode").keypress(function () {
        return onlyNumbers(event);
    });
    
    /*funciones CHANGE*/
    $('#NacionalityId').change(function () {

        var idNacionality = $('#NacionalityId option:selected').val();
        if (idNacionality == 0) {
            return false;
        }

        $.ajax({
            url: $('#urlGetStateByNacionality').val(),
            type: 'GET',
            data: { idNacionality: idNacionality },
            dataType: "text json",
            cache: false,
            async: true,
            success: function (result) {              
                if (result.Success) {                  
                    var ddl = $('#StateId');
                    ddl.empty();
                    var obj = result.stateList;
                    $.each(obj, function (value, text) {
                        ddl.append($('<option></option>').val(text.Id).html(text.Description))
                       .combobox();
                    });
                    $('#StateId').data('combobox').refresh();
                }
                return false;
            }
            , error: function (XMLHttpRequest, textStatus, errorThrown) {

                window.location = "#anerror";
                $("#error").css("font-weight", "bold");
                $("#error").css("color", "Red");
                $("#error").css("display", "block");
                $('#bodyerror').html("ErrorAjax: urlGetStateByNacionality");
                return false;
            }
        });
        return false;
    })
    
    /*------------------------------------------------*/
    /*------------------- BOTONES --------------------*/
    /*------------------------------------------------*/

    //Boton "Cancelar"
    //Previa confirmación vuelve a la pantalla de inicio
    $('#btnSalirCustomer').click(function () {
            bootbox.confirm({
                size: "medium",
                message: "¿Está seguro que desea cancelar la operación?",
                buttons: {
                    confirm: {
                        label: 'Aceptar',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'Cancelar',
                        className: 'btn-secondary'
                    }
                },
                callback: function (result) {
                    if (result) {
                        window.location.href = "../Customer/RegisterCustomer";
                    }
                }
            })
    });

    //Boton "Guardar"
    //Valida los datos por cliente y luego guardo los datos en el servidor y localStorage
    $('#btnGuardarCustomer').click(function () {

        //valido logica de estado Civil
        var valor = $('#CivilStatus').val();

        if (valor == "" || valor <= 0) {

            //$(field + 'undefined').addClass("is-invalid");
            $(field + "MsgError").css("display", "block");
            return false;
        }
        else

        {
            
            if ($('#CivilStatus').val() == 1) {

                ConyugeRequired();

            }

        }


        //Valido todos los campos
        if (clientValidation()) {
            //pregunto antes de confirmar
            bootbox.confirm({
                size: "medium",
                message: "¿Está seguro que guardar los datos del cliente(ver mensaje)?",
                buttons: {
                    confirm: {
                        label: 'Aceptar',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'Cancelar',
                        className: 'btn-secondary'
                    }
                },
                callback: function (result) {
                    if (result) {
                        SaveCustomer(form);
                    }
                }
            })
       

        } else {
            return false;
        }
    });

});

/*------------------------------------------------*/
/*------------------- Funciones --------------------*/
/*------------------------------------------------*/

//Guarda el Customer
function SaveCustomer(form)
{
    $.ajax({
        type: "POST",
        url: $('#urlSaveCustomerOperation').val(),
        dataType: "text json",
        data: $(form).serializeArray(),
        cache: false,
        success: function (result) {

            if (result.Success == false) {

                window.location = "#anerrorCustOp";
                $("#errorCustOp").css("font-weight", "bold");
                $("#errorCustOp").css("color", "Red");
                $("#errorCustOp").css("display", "block");
                $('#bodyerrorCustOp').html(result.Message);
            }
            else {
                //desabilito el paso 1
                $('a[href="#step1"]').addClass('disabled');

                //Pongo readonly todo el formulario;
                $('#frmCustomerOperation .form-control').attr('readonly', 'readonly');
                $('#CountryId').attr("disabled", true);
                $('#Gender').attr("disabled", true);
                $('#CivilStatus').attr("disabled", true);
                $('#DocumentType').combobox();
                $('#NacionalityId').attr("disabled", true);
                $('#StateId').attr("disabled", true);
                $('#CivilStatus').attr("disabled", true);
                $('#Gender').attr("disabled", true);
                $('#BankAccount').attr("disabled", true);
                $('#IsEmployee').attr("disabled", true);
                $('#Activity').attr("disabled", true);
                $('#btnGuardarCustomer').attr("disabled", true);
                $('#btnSalirCustomer').attr("disabled", true);

                //Una vez que guarda el Customer correctamente carga en siguiente solapa 
                //Cargo la parcial view del premio
                //Busco del localStorage la ubicacion
                var roomID = localStorage.getItem("RoomId");

                //Cargo la vista Prize
                GetNewPrize(result.IdEntidad, roomID);

                $('a[href="#step2"]').removeClass('disabled');
                $('a[href="#step2"]').tab('show');
            }
            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            window.location = "#anerror";
            $("#error").css("font-weight", "bold");
            $("#error").css("color", "Red");
            $("#error").css("display", "block");
            $('#bodyerror').html("ErrorAjax: urlSaveCustomer");
            return false;
        }

    });

}

//Valida todos los campos del formulario nuevamente
function clientValidation() {

    var resp = true;

    if (!selectValidacion("#CivilStatus")) {
        return false;
    }

    if (!fieldValidacion("#FirstName")) {
        return false;
    }
    if (!fieldValidacion("#LastName")) {
        return false;
    }
    if (!fieldValidacion("#BirthdayToString")) {
        return false;
    }
    if (!fieldValidacion("#Birthplace")) {
        return false;
    }
    if (!fieldValidacion("#DocumentNumber")) {
        return false;
    }
    if (!fieldValidacion("#CUIT")) {
        return false;
    }
    if (!selectValidacion("#CivilStatus")) {
        return false;
    }
    if (!fieldValidacion("#Street")) {
        return false;
    }
    if (!fieldValidacion("#Number")) {
        return false;
    }
    if (!fieldValidacion("#Floor")) {
        return false;
    }
    if (!fieldValidacion("#Department")) {
        return false;
    }
    if (!fieldValidacion("#ZipCode")) {
        return false;
    }
    if (!fieldValidacion("#ZipCode")) {
        return false;
    }
    if (!fieldValidacion("#City")) {
        return false;
    }
    if (!fieldValidacion("#StateId")) {
        return false;
    }
    //if (!fieldValidacion("#NacionalityId")) {
    //    return false;
    //}

   
    return resp;
}

//Trae la vista para el alta del Prize
function GetNewPrize(idcustomer, roomID) {

    $.ajax({
        type: "GET",
        url: $('#urlNewPrize').val(),
        data: { idcustomer: idcustomer, roomID: roomID },
        dataType: "text json",
        cache: false,
        success: function (result) {
            var res = result.Success;
            var message = result.Message;

            if (res == false) {
                window.location = "#anerror";
                $("#error").css("font-weight", "bold");
                $("#error").css("color", "Red");
                $("#error").css("display", "block");
                $('#bodyerror').html(result.Message);
            }
            else {             
                $("#Dataprize").html(result.Html);
            }
            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            window.location = "#anerror";
            $("#error").css("font-weight", "bold");
            $("#error").css("color", "Red");
            $("#error").css("display", "block");
            $('#bodyerror').html("Error en la solicitud ajax - urlGetCustomer");
            return false;
        }
    });

}

//Funcion que valida los textboxs
function fieldValidacion(field) {
    if ($(field).val() == "") {
        $(field+"MsgError").css("display", "block");
        return false;
    }
    return true;
}

//Funcion que valida los select
function selectValidacion(field) {

    //alert("valor de flield " + field);

    //alert("Estoy acaaa 4");

    //var valor = $('#CivilStatus').val();

    //alert(valor);

    //if (valor == "" || valor <= 0) {
    //    alert("se dio esto");
    //    //$(field + 'undefined').addClass("is-invalid");
    //    $(field + "MsgError").css("display", "block");
    //    return false;
    //}
    return true;
}

//Funcion que limpia los campos a validar
function cleanValidacion(field)
{
    $(field).removeClass("is-invalid");
    $(field + "MsgError").css("display", "none");
}

/*------------------------------------------------*/
/*------------------- Logica de Negocio --------------------*/
/*------------------------------------------------*/

//Si el estado civil es Casado los campos de Conyuge son obligatorios



//Valido que los campos del Conyuge 
function ConyugeRequiered()
{

}

//colapse conyuge

$('#collapseConyuge').click(function () {
    alert("aca deberia bajar");
});