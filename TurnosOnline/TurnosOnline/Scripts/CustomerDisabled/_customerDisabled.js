$(document).ready(function () {

var form = "#frmCustomerDisabled";

$('#TipoDoc').combobox();

$('#Country').combobox();

/*------------------------------------------------*/
/*------------------- BOTONES --------------------*/
/*------------------------------------------------*/

$('#btnSalirCustomerDisabled').click(function () {

    if ($('#Id').val() > 0) {

        $('#modal').modal('hide');

    } else {

        bootbox.confirm({
            size: "small",
            message: "¿Está seguro que desea salir?",
            buttons: {
                confirm: {
                    label: 'Si',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-secondary'
                }
            },
            callback: function (result) {
                if (result) {
                    $('#modal').modal('hide');
                }
            }
        })
    }
});

$('#btnGuardarCustomerDisabled').click(function () {
    SaveCustomerDisabled(form);
});

});

/*------------------------------------------------*/
/*------------------- FUNCIONES ------------------*/
/*------------------------------------------------*/
function SaveCustomerDisabled(form) {

    $.ajax({
        type: "POST",
        url: $('#urlSaveCustomerDisabled').val(),
        dataType: "text json",
        data: $(form).serializeArray(),
        cache: false,
        success: function (responsemodel) {
            var response = responsemodel.response;

            if (response == false) {

                toastr.options.positionClass = 'toast-bottom-right';
                toastr.options.fadeOut = 2500;
                toastr.options.closeButton = true;
                toastr.error(message, "Error");

                //$.LoadingOverlay("hide");
                ///*Si es validacion de Fecha marco los Labels*/
                //if (typeerror == "L_Fecha") {
                //    $("#Valperiodo").text("* " + message);
                //}

            } else {

                table.ajax.reload();

                $('#modal').modal('hide');

                toastr.options.positionClass = 'toast-bottom-right';
                toastr.options.fadeOut = 2000;
                toastr.success(responsemodel.message, "Notificado UIF");
            }
        }
          , error: function (XMLHttpRequest, textStatus, errorThrown) {

              //$.LoadingOverlay("hide");
              $('#modal').modal('hide');
              window.location = "#anerror";
              $("#error").css("font-weight", "bold");
              $("#error").css("color", "Red");
              $("#error").css("display", "block");
              $('#bodyerror').html("ErrorAjax: urlSaveCustomerDisabled");
              return false;
          }
    });

}
