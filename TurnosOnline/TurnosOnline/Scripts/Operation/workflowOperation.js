$(function () {

    //$("[name='my-checkbox']").bootstrapSwitch();
    //$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function (event, state) {

    //    //Siempre limpio todos los campos

    //    if (state == true) {

    //        $("#SeccionLector").css("display", "block");
    //        $("#SeccionManual").css("display", "none");
    //        $('#txtDniLector').focus();
    //        //Muestro para cargar con el lector
    //    } else {
    //        $("#SeccionLector").css("display", "none");
    //        $("#SeccionManual").css("display", "block");
    //    }

    //});


    //Ni bien carga la pagina busca a el cliente
    var dni = $("#hd_dni").val();
    var sexo = $("#hd_sexo").val();
    var name = $("#hd_name").val();
    var lastName = $("#hd_lastName").val();
    var cuit = $("#hd_cuit").val();

    

    //Deberia poner los demas tab en disabled
    //$("ul.nav li").removeClass('active').addClass('disabledTab');
    $('a[href="#step2"]').addClass('disabled');
    //$('a[href="#step3"]').addClass('disabled');
    //$('a[href="#step4"]').addClass('disabled');


    //Cargo los datos del cliente
    GetCustomerOperation(dni, sexo, cuit, name, lastName);

    //Eventos de los tabs
    $('.next').click(function () {

        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('a[href="#' + nextId + '"]').tab('show');
        return false;
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //update progress
        var step = $(e.target).data('step');
        var percent = (parseInt(step) / 4) * 100;

        $('.progress-bar').css({ width: percent + '%' });
        $('.progress-bar').text("Paso " + step + " de 4");

        //e.relatedTarget // previous tab
    })


    //generateView

    //$('#generateView').click(function () {

    //    alert("aca gfenero la vista previa");

    //    var dni = '34137129';


    //    $.ajax({
    //        type: "GET",
    //        url: $('#urlGetPreviewView').val(),
    //        data: { dni: dni },
    //        dataType: "text json",
    //        cache: false,
    //        success: function (result) {

    //            var res = result.Success;
    //            var message = result.Message;

    //            alert("vuelve " + result.Successs);

    //            if (res == false) {

    //                window.location = "#anerror";
    //                $("#error").css("font-weight", "bold");
    //                $("#error").css("color", "Red");
    //                $("#error").css("display", "block");
    //                $('#bodyerror').html(result.Message);
    //            }
    //            else {

    //                $("#Dataprize").html(result.Html);

    //            }
    //            return false;
    //        },
    //        error: function (XMLHttpRequest, textStatus, errorThrown) {
    //            window.location = "#anerror";
    //            $("#error").css("font-weight", "bold");
    //            $("#error").css("color", "Red");
    //            $("#error").css("display", "block");
    //            $('#bodyerror').html("Error en la solicitud ajax - urlGetCustomer");
    //            return false;
    //        }
    //    });

    //});
});

function GetCustomerOperation(dni, sexo, cuit, name, lastName) {

    $.ajax({
        type: "GET",
        url: $('#urlGetWorkflowOperation').val(),
        data: { dni: dni, sexo: sexo, cuit: cuit, name: name, lastName: lastName },
        dataType: "text json",
        cache: false,
        success: function (result) {

            var res = result.Success;
            var message = result.Message;

            if (result.Success) {
                $("#DataCustomer").html(result.Html);
               
            }
            else {
                 //window.location = "#anerror";
                //$("#error").css("font-weight", "bold");
                //$("#error").css("color", "Red");
                //$("#error").css("display", "block");
                //$('#bodyerror').html(result.Message);
                alert("qwqeqweqweq ERROR");
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