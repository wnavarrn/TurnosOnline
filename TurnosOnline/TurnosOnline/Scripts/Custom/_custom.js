function Debug(strVariable) {
    alert(strVariable);
}



//---------------------------------------------
// Admite solamente numericos
//---------------------------------------------
function onlyNumbers(e) {

    var charCode = e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 44 && charCode != 46) {
        return false;
    }
    else {
        if (charCode == 46)
            e.keyCode = 44;
    }
    return e.keyCode;
}

function StrongOnlyNumbers(e) {

    var charCode = e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return e.keyCode;
}

//---------------------------------------------
// Valida si los parámetros componen una fecha
//---------------------------------------------
function IsDate(iYear, iMonth, iDay) {
    iYear = parseInt(iYear);
    if (isNaN(iYear) || iYear < 1900 || iYear > 2100)
        return false;

    iMonth = parseInt(iMonth);
    if (isNaN(iMonth) || iMonth < 1 || iMonth > 12)
        return false;

    var iLastDay = GetDaysInMonth(iYear, iMonth);
    iDay = parseInt(iDay);
    return (iDay > 0 && iDay <= iLastDay && !isNaN(iDay))
}

//-----------------------------------
// Obtiene el numero de dias del mes
//-----------------------------------
function GetDaysInMonth(iYear, iMonth) {
    if (iMonth == 1 || iMonth == 3 || iMonth == 5 || iMonth == 7 ||
        iMonth == 8 || iMonth == 10 || iMonth == 12)
        return 31;
    else if (iMonth == 4 || iMonth == 6 || iMonth == 9 || iMonth == 11)
        return 30;
    else if (iMonth == 2)
        if (IsLeapYear(iYear))
            return 29;
        else
            return 28;
    return 0;
}
//--------------------------------
// Verifica si un año es bisiesto
//--------------------------------
function IsLeapYear(iYear) {
    if (iYear % 4 == 0 && iYear % 100 != 0 || iYear % 400 == 0)
        return true;
    else
        return false;
}


//--------------------------------
// Formateo parametros para validad fecha
//--------------------------------
function MakeValidateDate(date) {
    /*Preparo los parametros para la funcion IsDate*/
    date = date.split('/');
    var dd = date[0];
    var mm = date[1];
    var aa = date[2];
    return IsDate(aa, mm, dd);
}


/*Servía para Datepicker*/
// var str = $('#Periodo').html();
// var n = str.indexOf("-") + 1;
////obtengo la fecha hasta del lote.
// var s = str.substr(n, (str.length-n)-1).trim();

//--------------------------------
// Comparo dos fechas
//--------------------------------
function compareDate(dateTimeA, dateTimeB) {
    var momentA = moment(dateTimeA, "DD/MM/YYYY");
    var momentB = moment(dateTimeB, "DD/MM/YYYY");

    if (momentA > momentB) return 1;

    else if (momentA < momentB) return -1;

    else return 0;
}

//IndexOf en la cual se le puede indicar que número de aparición del char/string queremos
function nth_ocurrence(str, needle, nth) {
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == needle) {
            if (! --nth) {
                return i;
            }
        }
    }
    return false;
}
