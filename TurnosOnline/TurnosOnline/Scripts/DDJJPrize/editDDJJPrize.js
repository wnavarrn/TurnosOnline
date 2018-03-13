    $(document).ready(function () {

        var idPrize = $("#hd_prizeID").val();

    $('#editPrize').click(function () {

        $.ajax({
            type: "GET",
            url: $('#urlEditPrize').val(),
            data: { prizeid: idPrize },
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

                    $("#modalEditPrize").modal({
                        "backdrop": "static",
                        "keyboard": true,
                        "show": true
                    });
                    $("#divEditPrize").html(result.Html);
                }
                return false;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                window.location = "#anerrorView";
                $("#errorView").css("font-weight", "bold");
                $("#errorView").css("color", "Red");
                $("#errorView").css("display", "block");
                $('#bodyerrorView').html("Error en la solicitud ajax - urlEditPrize");
                return false;
            }
        });

    });

    });