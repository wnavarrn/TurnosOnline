$(document).ready(function () {

    var table
    //---------------------------------------------
    // Inicializo datatable
    //---------------------------------------------
    GetDatatableCustomerDisabled();

    //---------------------------------------------
    // Botones
    //---------------------------------------------
    $('#btnNuevo').on({
        click: function (event) {
            event.preventDefault();
            var id = 0;
            GetCustomerDisabled(id);
        }
    });


    //---------------------------------------------
    // Botones Datatable
    //---------------------------------------------

    $("#frmCustomerDisabled").on
        ('click', '.btnUpdate', function (event) {
            event.preventDefault();

            key = $(this).attr("id");
            key = key.split('-');
            var id = key[1];
            GetCustomerDisabled(id);
        });

    $("#frmCustomerDisabled").on
       ('click', '.btnDelete', function (event) {
           event.preventDefault();
           key = $(this).attr("id");
           key = key.split('-');
           var id = key[1];

           bootbox.confirm({
               size: "medium",
               message: "¿Está seguro que desea eliminar el Registro?",
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
                       DeleteCustomerDisabled(id);
                   }
               }
           })
          
       });

});


//---------------------------------------------
//################ FUNCIONES ##################
//---------------------------------------------

function GetDatatableCustomerDisabled() {

    table = $('#dtCustomerDisabled').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                className: 'btn btn-outline-success btn-sm',
                extend: 'excelHtml5',
                text: '<span class="fa fa-file-excel-o" title="Exportar Excel">&nbsp;Excel</span>'
            }
        ],
        "bDestroy": true,
        responsive: true,
        "ajax": {
            "url": '../CustomerDisabled/CustomerDisabledDataTable',
            "dataSrc": ""
        },
        "order": [[0, "desc"]],
        "columns": [
              { "data": "ID", "visible": false },
              { "data": "Nombre" },
              { "data": "Country" },
              { "data": "TypeDoc" },
              { "data": "DNI" },
              { "data": "Cuit" },
              { "data": "User" },
              { "data": "CreationDate", "type": 'date-uk' },
              { "data": "Observaciones", "visible": false },
              {
                  "className": 'details-control',
                  "orderable": false,
                  "data": null,
                  "defaultContent": ''
              },
                {
                    bSortable: false, "data": "ID", "sWidth": "5%", "mRender": function (data, type, row) {
                        return '<span id= "btnUpdate-' + data + '" class="btnUpdate"><i class="fa fa-pencil"style="font-size: 20px;cursor:pointer"" title="Cargar"></i></span>'
                        + '&nbsp &nbsp' +
                        '<span id= "btnDelete-' + data + '" class="btnDelete"><i class="fa fa-trash-o"style="font-size: 20px;cursor:pointer" title="Eliminar"></i></span>'
                    }
                }
        ],
        language: {
            "sZeroRecords": "No se encontraron registros", "search": "Buscar:", "info": "Mostrando página _PAGE_ de _PAGES_",
            paginate: { "previous": "Anterior", "next": "Siguiente" },
            buttons: {
                copyTitle: 'Copiado al portapapeles',
                copyKeys: 'Presione <i>Ctrl</i> + <i>C</i> para copiar la tabla al portapapeles. <br><br>Para cancelar, cliquea en este mensaje o presiona Esc.',
                copySuccess: {
                    _: 'Copiadas %d filas',
                    1: 'Copiada 1 fila'
                }
            }
        }

    });

    $("#dtCustomerDisabled > .dt-buttons").appendTo("div.panel-heading");

     //Add event listener for opening and closing details
    $('#dtCustomerDisabled tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    function format(d) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="5" border="0" style="padding-left:50px;">' +
            '<tr>' +
                '<td>Observaciones:</td>' +
                '<td>' + d.Observaciones + '</td>' +
            '</tr>' +
        '</table>';
    }
}

function GetCustomerDisabled(id) {

    $.ajax({
        type: "GET",
        url: $('#urlGetCustomerDisabled').val(),
        data: { id: id },
        dataType: "text json",
        cache: false,
        success: function (result) {

            var success = result.Success;

            if (success == false) {

                window.location = "#anerror";
                $("#error").css("font-weight", "bold");
                $("#error").css("color", "Red");
                $("#error").css("display", "block");
                $('#bodyerror').html(result.Message);
            }
            else {
                $('#modal').modal({
                    show: true,
                    keyboard: false,
                    backdrop: 'static',
                });
                $("#modal-content").html(result.Html);
            }
            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            window.location = "#anerror";
            $("#error").css("font-weight", "bold");
            $("#error").css("color", "Red");
            $("#error").css("display", "block");
            $('#bodyerror').html("Error en la solicitud ajax - GetCustomerDisabled");
            return false;
        }
    });
}

function DeleteCustomerDisabled(id) {

    $.ajax({
        type: "POST",
        url: $('#urlDeleteCustomerDisabled').val(),
        data: { id: id },
        dataType: "text json",
        cache: false,
        success: function (responsemodel) {

            var response = responsemodel.response;
          
            if (response == true) {

                /*Muestro mensaje de confirmación*/
                toastr.options.positionClass = 'toast-bottom-right';
                toastr.options.fadeOut = 2000;
                toastr.success("Eliminado Correctamente", "Notificado IUF");

                table.ajax.reload();

            } else {
                /*Muestro un mensaje de Validación o Error*/
                toastr.options.positionClass = 'toast-bottom-right';
                toastr.options.fadeOut = 2000;
                toastr.options.closeButton = true;
                toastr.options.progressBar = true;
                toastr.error("No pudo eliminar el Registro", "Error");
            }

            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //$.LoadingOverlay("hide");
            window.location = "#anerror";
            $("#error").css("font-weight", "bold");
            $("#error").css("color", "Red");
            $("#error").css("display", "block");
            $('#bodyerror').html("Error en la solicitud ajax: urlDeleteCustomerDisabled");
            return false;
        }
    });
}