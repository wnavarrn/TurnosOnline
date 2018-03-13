$(function () {
    /*Obtengo el Id del Customer*/
    var idcustomer = $('#Id').val();
    var table;
    /*Cargo el datatable de premios*/
    GetPrizesCustomer(idcustomer);

    //---------------------------------------------
    // Botones
    //---------------------------------------------
    $('#btnNuevo').on({
        click: function (event) {
            event.preventDefault();
            GetPrize(idcustomer);
        }
    });

    $('#verDetalleCustomer').on({
        click: function (event) {
            event.preventDefault();
            //GetPrize(idcustomer);
            alert("Aca tengo que levantar la vista con el detalle del cliente");
        }
    });
    
  

});

function GetPrizesCustomer(idcustomer)
{
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
            //"url": '../CustomerDisabled/CustomerDisabledDataTable',
            "url": '../Prize/PrizesCustomerDataTable',
            "dataSrc": "",
            "data": {
                idcustomer: idcustomer,
            }
        },
        "order": [[0, "desc"]],
        "columns": [
              { "data": "Id", "visible": false },
              { "data": "NUP" },
              { "data": "Cash" },
              //{ "data": "TypeDoc" },
              //{ "data": "DNI" },
              //{ "data": "Cuit" },
              //{ "data": "User" },
              //{ "data": "CreationDate", "type": 'date-uk' },
              //{ "data": "Observaciones", "visible": false },
              //{
              //    "className": 'details-control',
              //    "orderable": false,
              //    "data": null,
              //    "defaultContent": ''
              //},
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

    //table = $('#dtPrizesCustomer').DataTable({
    //    dom: 'Bfrtip',
    //    //buttons: [
    //    //    {
    //    //        className: 'btn btn-outline-success btn-sm',
    //    //        extend: 'excelHtml5',
    //    //        text: '<span class="fa fa-file-excel-o" title="Exportar Excel">&nbsp;Excel</span>'
    //    //    }
    //    //],
    //    //"bDestroy": true,
    //    responsive: true,
    //    "ajax": {
    //        "url": "../Customer/PrizesCustomerDataTable",
    //        "dataSrc": "",
    //        "data": {
    //            idcustomer: idcustomer
    //        }
    //    },
    //    //"order": [[0, "desc"]],
    //    "columns": [
    //          { "data": "ID", "visible": false },
    //          { "data": "NUP" },
    //          { "data": "Monto" },
    //          { "data": "Fecha" },
    //          { "data": "Sala de Juego" },
    //          { "data": "Sala que pagó" },          
    //          {
    //            bSortable: false, "data": "ID", "sWidth": "5%", "mRender": function (data, type, row) {
    //                return '<span id= "btnUpdate-' + data + '" class="btnUpdate"><i class="fa fa-pencil"style="font-size: 20px;cursor:pointer"" title="Cargar"></i></span>'
    //                + '&nbsp &nbsp' +
    //                '<span id= "btnDelete-' + data + '" class="btnDelete"><i class="fa fa-trash-o"style="font-size: 20px;cursor:pointer" title="Eliminar"></i></span>'
    //            }
    //          }
    //    ],
    //    language: {
    //        "sZeroRecords": "No se encontraron registros", "search": "Buscar:", "info": "Mostrando página _PAGE_ de _PAGES_",
    //        paginate: { "previous": "Anterior", "next": "Siguiente" },
    //        buttons: {
    //            copyTitle: 'Copiado al portapapeles',
    //            copyKeys: 'Presione <i>Ctrl</i> + <i>C</i> para copiar la tabla al portapapeles. <br><br>Para cancelar, cliquea en este mensaje o presiona Esc.',
    //            copySuccess: {
    //                _: 'Copiadas %d filas',
    //                1: 'Copiada 1 fila'
    //            }
    //        }
    //    }
    //});

}

function GetPrize(idcustomer) {

    $.ajax({
        type: "GET",
        url: $('#urlGetPrize').val(),
        data: { idcustomer: idcustomer },
        dataType: "text json",
        cache: false,
        success: function (result) {

            var success = result.Success;

            if (success == false) {

                window.location = "#anerror";
                $("#error").css("font-weight", "bold");
                $("#error").css("color", "Red");
                $("#error").css("display", "block");
                $('#bodyerror').html(result.message);
            }
            else {
                $('#modalPrize').modal({
                    show: true,
                    keyboard: false,
                    backdrop: 'static',
                });
                $("#modal-content-prize").html(result.Html);
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

function GetDetailsCustomer(idcustomer) {

    $.ajax({
        type: "GET",
        url: $('#urlGetDetailsCustomer').val(),
        data: { idcustomer: idcustomer },
        dataType: "text json",
        cache: false,
        success: function (result) {

            var success = result.Success;

            if (success == false) {

                window.location = "#anerror";
                $("#error").css("font-weight", "bold");
                $("#error").css("color", "Red");
                $("#error").css("display", "block");
                $('#bodyerror').html(result.message);
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