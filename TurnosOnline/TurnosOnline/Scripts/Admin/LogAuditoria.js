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

    table = $('#dtLogAuditoria').DataTable({
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
            "url": '../Admin/LogAuditoriaDataTable',
            "dataSrc": ""
        },
        "order": [[0, "desc"]],
        "columns": [
              { "data": "Id", "visible": false },
              { "data": "Usuario" },
              { "data": "Registro" },
              { "data": "IdRegistro" },
              { "data": "Accion" },
              { "data": "Fecha" }         
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

