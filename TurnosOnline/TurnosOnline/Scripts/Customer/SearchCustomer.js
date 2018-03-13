$(document).ready(function () {
    alert("traigo imagenes");
    traerImagenes();

    $('#btnSearchCustomer').click(function () {
        var nrodoc = $('#txtDni').val();
        //SearchCustomer('27215698', 'M');
        //SearchCustomer('34137129', 'M');
        //SearchCustomer('37995721', 'M');
        //SearchCustomer('19041896', 'F');
        //    19041896
        //window.location.href = "../Customer/GetPrizesCustomer?dni=" + nrodoc;
        //window.location.href = "../Customer/GetPhoto";
       // GetFoto();
        return false;
    });

    $('#btnDetails').click(function () {
        //var nrodoc = $('#txtDni').val();
        //SearchCustomer('27215698', 'M');
        //SearchCustomer('34137129', 'M');
        //SearchCustomer('37995721', 'M');
        //SearchCustomer('19041896', 'F');
        //    19041896
        //window.location.href = "../Customer/GetPrizesCustomer?dni=" + nrodoc;
        //window.location.href = "../Customer/GetPhoto";
        getDetails();
        return false;
    });

    $('#btnAttach').click(function () {

        localStorage.clear();
        //Valido que haya seleccionado algun tipo
        var dllTipo = $('#dllTipo option:selected').val();

        alert(dllTipo);

       var image = document.getElementById("canvas").toDataURL("image/png");
       image = image.replace('data:image/png;base64,', '');

       $("#imageData").val(image);

        //Subo la imagen al localstorage

        //nombre por default img_dni_tipo
       //var dni = "34137129";
       //var tipo = "dni";
       //localStorage.setItem("IdCustomer", "Algo");
       //localStorage.setItem("IdPrize", "idprize");
        //localStorage.setItem("dni", image);
       //var tipo = dllTipo;
       //var Object = { tipo : image }
       alert("imgg " + image);
       var img = new Imagen(dllTipo, image);

       //var Object = { dllTipo: image }
       //alert(img);
       var imagenes = localStorage.getItem("Imagenes");
        //Controlo que no sea vacio para convertir a JSON
       var imagenesJSON = imagenes == null ? [] : JSON.parse(imagenes)

       //alert(JSON.parse(Object));

       imagenesJSON.push(img);
       localStorage.setItem("Imagenes", JSON.stringify(imagenesJSON));

       traerImagenes();
        //var fotoUpload = "img_"+dni+"_"+dllTipo;

       //var testObject = { 'dni': image };

        // Put the object into storage
       //localStorage.setItem('imagenes', JSON.stringify(testObject));

        // Retrieve the object from storage
       //var retrievedObject = localStorage.getItem('testObject');

       //console.log('retrievedObject: ', JSON.parse(retrievedObject));

        //Armo la vista de las imagenes adjuntadas
        //Obtengo todos los localstorage del los tipos

       //var dataImage = localStorage.getItem('dni');
       //bannerImg = document.getElementById('dni');
       //bannerImg.src = "data:image/png;base64," + dataImage;

       //$("#dni").val(localStorage.getItem("img_" + dni + "_undefined"));
       //$("#otro").val(localStorage.getItem("img_" + dni + "_pep"));
       //$("#pep").val(localStorage.getItem("img_" + dni + "_otros"));
       //$("#ticket").val(localStorage.getItem("img_" + dni + "_ticket"));
       
       //GetFoto();


        //SearchCustomer('27215698', 'M');
        //SearchCustomer('34137129', 'M');
        //SearchCustomer('37995721', 'M');
        //SearchCustomer('19041896', 'F');
        //    19041896
        //window.location.href = "../Customer/GetPrizesCustomer?dni=" + nrodoc;
        //window.location.href = "../Customer/GetPhoto";
        //GetFoto();
        return false;
    });
    

});

function Imagen(tipo, imagen) {
    this.tipo = tipo;
    this.imagen = imagen;
}

function traerImagenes() {

    alert("holassssaa");

    var imagenes = localStorage.getItem("Imagenes");
    //Controlo que no sea vacio para convertir a JSON
    var imagenesJSON = imagenes == null ? [] : JSON.parse(imagenes)

    alert("cant " + imagenesJSON.length);

    $("#myTable").html("");

    var tabla = " <table id=\"Tbl\" class=\"table\"><thead><tr><th class=\"id\">ID</th><th class=\"nombre\">NOMBRE</th></thead><tbody>";
    for (var i = 0; i < imagenesJSON.length; i++) {

        //agarro la imgen y dinamicamente la mepo en una image
        var imgaux = "";
        tabla +=
            " <tr><td class=\"tipo\">" + imagenesJSON[i].tipo + "</td>\n<td class=\"foto\"><img id=" + imagenesJSON[i].tipo + " src='"+"\\" + imagenesJSON[i].imagen + "' alt=\"\" border=3 height=50 width=50></img></td><td><input id='btnModificar' class='btn btn-primary' type='button' value='M' onclick='Traer(\" " + imagenesJSON[i].tipo + " \");'/>\n<input id='btnEliminar' class='btn btn-danger' type='button' value='E' onclick='Eliminar(\" " + imagenesJSON[i].tipo + " \");'/></td>\n</tr>";
        //imgaux = imagenesJSON[i].imagen;
        //alert("uuuu " + imgaux);
        //alert(imagenesJSON[i].tipo);
        //var dataImage = imgaux;

        //image = image.replace('data:image/png;base64,', '');

        //$("#imageData").val(image);

        //bImg = document.getElementById(+"'" + imagenesJSON[i].tipo + "'");
        //bImg.src = "data:image/png;base64," + imgaux;
        //    document.getElementById("'"+ imagenesJSON[i].tipo + "'").src = imagenesJSON[i].imagen;
        //}
        tabla += "</tbody></table>";
        alert("valor de tabla" + tabla);
        $("#myTable").html(tabla);



    }


    //function getDetails() {

    //    $.ajax({
    //        type: "GET",
    //        url: $('#urlGetDetails').val(),
    //        data: {},
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

    //                $('#modalCustomer').modal({
    //                    show: true,
    //                    keyboard: false,
    //                    backdrop: 'static',
    //                });
    //                $("#modalCustomer-content").html(result.Html);
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

    //}

    //Veo que manda al server
    //function GetFoto() {

    //    $.ajax({
    //        type: "POST",
    //        url: $('#urlSavePhoto').val(),
    //        data: { imageData: $("#imageData").val() },
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
    //                alert("algoooo");
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

    //}

}