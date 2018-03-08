// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
});

$('#btnModalRegister').click(function () {
    alert("abri");
    $("#modalRegister").modal({
        "backdrop": "static",
        "keyboard": true,
        "show": true
    });
});
//modalRegister