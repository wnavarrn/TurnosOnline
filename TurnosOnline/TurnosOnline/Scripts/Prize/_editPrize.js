$(function () {

     var form = "#frmPrizeEdit";
    //Por las dudas siempre oculto la info de los cheques, luego verifico si la muestro o no
    $('.cheque').css("display", "none");

    //Ahora verifico que hago con estos campos cuando carga la pagina
    if(parseInt($("#PayCheckAmmount").val()) > 0)
    {
        $('.cheque').css("display", "block");
    }

   
    //Seteo el valor en el radioButton
    RadionButtonSelectedValueSet('radio', $('#PlayType').val());

    $('#OperationDay').mask('Dd/Mm/AaYy', {
        placeholder: "dd/mm/aaaa",
        translation: {
            'D': {
                pattern: /[0-3]/
            },
            'd': {
                pattern: /[0-9]/
            },
            'M': {
                pattern: /[0-1]/
            },
            'm': {
                pattern: /[0-9]/
            },
            'A': {
                pattern: /[2-2]/
            },
            'a': {
                pattern: /[0-0]/
            },
            'Y': {
                pattern: /[1-9]/
            },
            'y': {
                pattern: /[0-9]/
            }
        }
    });

    $('#PaymentDay').mask('Dd/Mm/AaYy', {
        placeholder: "dd/mm/aaaa",
        translation: {
            'D': {
                pattern: /[0-3]/
            },
            'd': {
                pattern: /[0-9]/
            },
            'M': {
                pattern: /[0-1]/
            },
            'm': {
                pattern: /[0-9]/
            },
            'A': {
                pattern: /[2-2]/
            },
            'a': {
                pattern: /[0-0]/
            },
            'Y': {
                pattern: /[1-9]/
            },
            'y': {
                pattern: /[0-9]/
            }
        }
    });

    $("#Ammount").focusout(function () {

        var valor = numeroALetras($("#Ammount").val(), {
            plural: 'PESOS',
            singular: 'PESO',
            centPlural: 'CENTAVOS',
            centSingular: 'CENTAVO'
        });

        $("#StringAmmount").val(valor);



    });

    $("#Cash").focusout(function () {
        //siempre limpio el monto en cheques
        $("#PayCheckAmmount").val(0);
        //calcular porcentaje
        var porcentajeCash = calcularPorcentajeEfectivo($("#Ammount").val(), $("#Cash").val());
        if (porcentajeCash < 100) {
            //Si es menor a 100
            //Hago el calculo de la diferencia
            var diferenciaEnCheque = calcularEnCheque($("#Cash").val(), porcentajeCash);
            $("#PayCheckAmmount").val(diferenciaEnCheque);
            //habilito y muestro la info de los cheques 
            $('.cheque').css("display", "block");
        }

    });
    

    //$('#PlayType').combobox();

    //$('#Concept').combobox();
  

    $('#btnSavePrize').click(function () {
      
        SavePrize(form);
    });


    $('#btnClosePrize').click(function () {

        $('#modalEditPrize').modal('hide');
    });

    //$("[name='my-checkbox']").bootstrapSwitch();


    //$('input[type=radio][name=radio]').change(function () {

    //alert("valor " + this.value);
    //    //if (this.value == 'allot') {
    //    //    alert("Allot Thai Gayo Bhai");
    //    //}
    //    //else if (this.value == 'transfer') {
    //    //    alert("Transfer Thai Gayo");
    //    //}
    //});

    //$('#PlayType input[type=radio]').change(function () {
    //    alert("holaaaa");
    //    alert($(this).val())

    //})

    $('input[type=radio]').change(function () {

        switch (this.value) {
            case 'Ruleta':
                $('.divTypePlayOtros').css("display", "none");
                $('.divTypePlay').css("display", "block");
                $('#Concept').val("Cambio de valores");
                //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
                break;
            case 'Slot':
                $('.divTypePlayOtros').css("display", "none");
                $('.divTypePlay').css("display", "block");
                $('#Concept').val("Premio");
                //Sentencias ejecutadas cuando el resultado de expresion coincide con valor2
                break;
            case 'Bingo':
                $('.divTypePlayOtros').css("display", "none");
                $('.divTypePlay').css("display", "block");
                $('#Concept').val("Premio");
                //Sentencias ejecutadas cuando el resultado de expresion coincide con valorN
                break;
            case 'Otros':
                //Sentencias ejecutadas cuando el resultado de expresion coincide con valorN
                $('.divTypePlayOtros').css("display", "block");
                $('.divTypePlay').css("display", "none");
                break;
        }
    });

});

function SavePrize(form) {

    $('#PlayType').val($('input[name=radio]:checked').val());

    $.ajax({
        type: "POST",
        url: $('#urlSavePrize').val(),
        dataType: "text json",
        data: $(form).serializeArray(),
        cache: false,
        success: function (result) {

            if (result.Success == false) {

                window.location = "#anerrorPrize";
                $("#errorPrize").css("font-weight", "bold");
                $("#errorPrize").css("color", "Red");
                $("#errorPrize").css("display", "block");
                $('#bodyerrorPrize').html(result.Message);
            }
            else {

                var prizeid = result.IdEntidad;

                bootbox.confirm({
                    size: "medium",
                    //parametrizar el mensaje
                    message: "Registro guardado correctamente.</br> Seguimos con el ingreso de documentacion para finalizar el proceso ",
                    buttons: {
                        confirm: {
                            label: 'Continuar',
                            className: 'btn-success'
                        },
                    },
                    callback: function () {
                        //alert("tiene que ir ala nueva vista");
                        //parametruizar las urls
                        window.location.href = "../Operation/ConfirmDDJJ?prizeid=" + prizeid;
                         
                        return false;
                    }
                })
            }
            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            window.location = "#anerror";
            $("#errorsearch").css("font-weight", "bold");
            $("#errorsearch").css("color", "Red");
            $("#errorsearch").css("display", "block");
            $('#bodyerrorsearch').html("ErrorAjax: urlSavePrize");
            return false;
        }

    });
}

function RadionButtonSelectedValueSet(name, SelectdValue) {
    $('input[name="' + name + '"][value="' + SelectdValue + '"]').prop('checked', true);
}

/******** FUNCIONES DE PORCENTAJE ********/
function calcularPorcentajeEfectivo(monto, efectivo) {

    var paso1 = parseInt(efectivo) * 100; 
    var porcentaje = Math.round(paso1 / parseInt(monto));
    return porcentaje;
}

function calcularEnCheque(efectivo,porcentajeEfectivo) {

    porcentajeDiferencia = 100 - parseInt(porcentajeEfectivo);

    var paso1 = Math.round(efectivo * porcentajeDiferencia);
    var montoEnCheque = Math.round(paso1 / parseInt(porcentajeEfectivo));
    return montoEnCheque;
}
