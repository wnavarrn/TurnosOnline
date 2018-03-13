$(function () {

    var nroDoc = $("#txtDni").val();

    $('#printViewDDJJ').click(function () {
        $('#divDDJJ').printThis();
    });

    $('#generateViewDDJJ').click(function () {

        //alert("entreeee");

        $.ajax({
            type: "GET",
            url: $('#UrlGetDDJJPrizeByDni').val(),
            data: { nroDoc: $("#txtDni").val() },
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

                    $("#myModalDDJJ").modal({
                        "backdrop": "static",
                        "keyboard": true,
                        "show": true
                    });
                    $("#divDDJJ").html(result.Html);
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

    });

   

});
