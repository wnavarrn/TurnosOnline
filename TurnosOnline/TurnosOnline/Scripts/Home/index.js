// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");


$('#linkRegister').click(function () {
    
    $("#modalRegister").modal({
        "backdrop": "static",
        "keyboard": true,
        "show": true
    });
});

});
//modalRegister