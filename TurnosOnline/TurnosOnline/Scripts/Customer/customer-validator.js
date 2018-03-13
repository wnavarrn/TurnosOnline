

$(document).ready(function () {
    $('#frmCustomerOperation').validate({
        errorClass: 'text-danger', // You can change the animation class for a different entrance animation - check animations page  
        errorElement: 'div',
        errorPlacement: function (error, e) {
            e.parents('.form-group > div').append(error);
        },
        highlight: function (e) {

            $(e).closest('.form-group').removeClass('has-success text-danger').addClass('text-danger');
            $(e).closest('.help-block').remove();
        },
        success: function (e) {
            e.closest('.form-group').removeClass('has-successtext-danger');
            e.closest('.help-block').remove();
        },
        rules: {
            'FirstName': {
                required: true,
            },
            'LastName': {
                required: true,
            },
            'BirthdayToString': {
                required: true,
            },
            'Gender': {
                required: true,
                //email: true
            },
            //'Password': {
            //    required: true,
            //    minlength: 6
            //},

            //'ConfirmPassword': {
            //    required: true,
            //    equalTo: '#Password'
            //}
        },
        messages: {
            'FirstName': 'Campo requerido',
            'LastName': {
                required: 'Campo requerido',
            },
            'BirthdayToString': 'Campo requerido',
            'Gender': 'Seleccione una opción',
           
           

            //'ConfirmPassword': {
            //    required: 'Please provide a password',
            //    minlength: 'Your password must be at least 6 characters long',
            //    equalTo: 'Please enter the same password as above'
            //}
        }
    });
});