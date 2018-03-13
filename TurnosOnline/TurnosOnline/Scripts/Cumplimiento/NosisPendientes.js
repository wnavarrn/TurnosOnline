$(document).ready(function () {

    alert("HOLAAA");

    var table
    //---------------------------------------------
    // Inicializo datatable
    //---------------------------------------------
    GetNosisPendientes();

});


//---------------------------------------------
//################ FUNCIONES ##################
//---------------------------------------------

function GetNosisPendientes() {

    table = $('#dtNosisPendientes').DataTable({
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
            "url": '../Cumplimiento/NosisPendientesDatatable',
            "dataSrc": ""
        },
        "order": [[0, "desc"]],
        "columns": [
              { "data": "IdRegistro", "visible": false },
              { "data": "DatoIngresado" },
              { "data": "GeneroIngresado" },
              { "data": "FechaCarga", "type": 'date-uk' },
              { "data": "Verficado" },
              { "data": "TipoRegistro" },
              { "data": "FechaVerificacion", "type": 'date-uk' },
              { "data": "IdCustomerVinculado"},
              {
                  bSortable: false, "data": "IdRegistro", "sWidth": "5%", "mRender": function (data, type, row) {
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

  
}
