$(document).ready(function () {

     var table;

         $("#_TopTenHistoricoDatatable").css("display", "block");

         table = $('#dtTopTenHistorico').DataTable({
             dom: 'Bfrtip',
             "bDestroy": true,
             responsive: true,
             "ajax": {
                 "url": '../Reporte/ReporteTopTenHistorico',
                 "dataSrc": "",
                 "data": {
                 }
             },
             "order": [[4, "desc"]],
             "columns": [
                 { "data": "Apellido" },
                 { "data": "Nombre" },
                 { "data": "Tipo", },
                 { "data": "NroDoc", },
                 {
                     "data": "Monto",
                     "className": "dt-right",
                     "sWidth": "10%",
                     "mRender": function (data, type, row) {
                         return "$ " + data;
                     }
                 },

             ],
             //buttons: [
             //{
             //    extend: 'excel',
             //    exportOptions: { orthogonal: 'export' },
             //    text: '<i class="fa fa-file-excel-o fa-2x"></i>',
             //    titleAttr: 'Excel',
             //    title: 'Reporte_TopTenHistorico'
             //}
             //],
             buttons: [
               {
                   extend: 'excel',
                   text: 'Save current page',
                   exportOptions: {
                       modifier: {
                           page: 'current'
                       }
                   }
               }
             ],
             "paging": false,
             "ordering": false,
             "info": false,
             language: {
                 "sZeroRecords": "No se encontraron Registros", "search": "Buscar:", "info": "Mostrando página _PAGE_ de _PAGES_",
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
     
});
