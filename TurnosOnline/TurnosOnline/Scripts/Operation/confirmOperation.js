$(document).ready(function () {

    var idPrize = $("#hd_prizeID").val();
    //var wrapper = document.getElementById("signature-pad");

    //var savePNGButton = wrapper.querySelector("[data-action=save-png]");

    //alert("valor del IDDDssss " + idPrize);

    getViewDDJJEdit(idPrize);

    var canvas = document.getElementById("signature");

    var signaturePad = new SignaturePad(canvas);

    $('#clear-signature').on('click', function () {
        signaturePad.clear();
    });

    $("#bt_upload").click(function () {


        //alert("holaaa");

        // document.getElementById('test').value='pepe';

        document.getElementById("test").innerHTML = "change in text or whatever";
        //var canvas = document.getElementById('signature');
        //var dataURL = canvas.toDataURL();

        //alert("canvas " + canvas);
        //alert("dataURL " + dataURL);

        //$.ajax({
        //    type: "POST",
        //    url: "canvas_ajax_upload_post.php",
        //    data: { img: dataURL }
        //}).done(function (msg) {
        //    alert(msg);
        //});
    });


    //$('#editCustomer').click(function () {

    //    //alert("entreeee");

    //    $.ajax({
    //        type: "GET",
    //        url: $('#UrlGetCustomer').val(),
    //        data: { nroDoc: $("#txtDni").val() },
    //        dataType: "text json",
    //        cache: false,
    //        success: function (result) {

    //            var res = result.Success;
    //            var message = result.Message;

    //            if (res == false) {
    //                window.location = "#anerror";
    //                $("#error").css("font-weight", "bold");
    //                $("#error").css("color", "Red");
    //                $("#error").css("display", "block");
    //                $('#bodyerror').html(result.Message);
    //            }
    //            else {

    //                $("#myModalDDJJ").modal({
    //                    "backdrop": "static",
    //                    "keyboard": true,
    //                    "show": true
    //                });
    //                $("#divDDJJ").html(result.Html);
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

    //$('#editPrize').click(function () {

    //    alert("entreeee editar rtttttttttttttt");

    //    //$.ajax({
    //    //    type: "GET",
    //    //    url: $('#urlGetEditPrize').val(),
    //    //    data: { prizeid: idPrize },
    //    //    dataType: "text json",
    //    //    cache: false,
    //    //    success: function (result) {

    //    //        var res = result.Success;
    //    //        var message = result.Message;

    //    //        if (res == false) {
    //    //            window.location = "#anerror";
    //    //            $("#error").css("font-weight", "bold");
    //    //            $("#error").css("color", "Red");
    //    //            $("#error").css("display", "block");
    //    //            $('#bodyerror').html(result.Message);
    //    //        }
    //    //        else {

    //    //            $("#modalEditPrize").modal({
    //    //                "backdrop": "static",
    //    //                "keyboard": true,
    //    //                "show": true
    //    //            });
    //    //            $("#divEditPrize").html(result.Html);
    //    //        }
    //    //        return false;
    //    //    },
    //    //    error: function (XMLHttpRequest, textStatus, errorThrown) {
    //    //        window.location = "#anerror";
    //    //        $("#error").css("font-weight", "bold");
    //    //        $("#error").css("color", "Red");
    //    //        $("#error").css("display", "block");
    //    //        $('#bodyerror').html("Error en la solicitud ajax - urlGetCustomer");
    //    //        return false;
    //    //    }
    //    //});

    //});

});

//savePNGButton.addEventListener("click", function (event) {

//    alert("estoyt armannn");
//    //if (signaturePad.isEmpty()) {
//    //    alert("Please provide a signature first.");
//    //} else {
//    //    var dataURL = signaturePad.toDataURL();
//    //    download(dataURL, "signature.png");
//    //}
//});

function getViewDDJJEdit(idPrize) {

    $.ajax({
        type: "GET",
        url: $('#UrlGetDDJJPrizeByIdPrizeEdit').val(),
        data: { idPrize: idPrize },
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
                $("#ViewDDJJ").html(result.Html);
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

