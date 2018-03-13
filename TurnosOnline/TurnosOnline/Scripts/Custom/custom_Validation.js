!(function ($) {

    "use strict";

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var ClassName = {
        DANGER: 'has-danger',
        SUCCESS: 'has-success',
        VALUE_MISSING: 'value-missing'
    };

    var Properties = {
        DISABLED: 'disabled'
    };

    var Selector = {
        VALIDATE: '.validate',
        FORM_GROUP: '.form-group',
        ALL_INPUTS: 'input, select, textarea',
        INPUT: 'input',
        SELECT: 'select',
        TEXTAREA: 'textarea'
    };

    var Event = {
        CHANGE_BLUR: 'change.bs.validate ' + 'blur.bs.validate'
    };


    /**
     * ------------------------------------------------------------------------
     * Methods
     * ------------------------------------------------------------------------
     */

    // jQuery
    jQuery.fn.formIsValid = function () {
       
        var form = $(this[0]);
        var formGroups = $(Selector.FORM_GROUP, form);
        var formErrors = [];

        formGroups.each(function () {
            var inputs = $(Selector.ALL_INPUTS, $(this));
            formErrors.push(_validate_input(inputs));
        })

        return $.inArray(0, formErrors) === -1;
    };


    // private

    var _validate_input = function (input) {
        var retVal = 1;
        var formGroup = input.closest(Selector.FORM_GROUP);
        var inputValidity = input[0].validity;

        // skip over inputs that are disabled
        if (input.prop(Properties.DISABLED)) {

        } else if (inputValidity.valid) {
            formGroup.removeClass(ClassName.DANGER);

            // only style inputs that have a value
            // this prevents empty non-required inputs from getting styled
            if (input.val()) {
                formGroup.addClass(ClassName.SUCCESS);
            }
        } else {
            retVal = 0
            formGroup.removeClass(ClassName.SUCCESS).addClass(ClassName.DANGER);

            // check if a required field is empty
            // value-missing will overwrite .form-control-feedback with 'Required'
            if (inputValidity.valueMissing) {
                formGroup.addClass(ClassName.VALUE_MISSING);
            } else {
                formGroup.removeClass(ClassName.VALUE_MISSING);
            }
        }

        return retVal;
    };


    /**
     * ------------------------------------------------------------------------
     * Events
     * ------------------------------------------------------------------------
     */

    $(document)
      .on(Event.CHANGE_BLUR, Selector.VALIDATE, function (e) {
          var input = $(e.target);
          var tag = input[0].tagName.toLowerCase();

          switch (tag) {
              case Selector.INPUT:
              case Selector.SELECT:
              case Selector.TEXTAREA:
                  _validate_input(input);
                  break;
          };
      });

})(jQuery);


//$("#btnRegister").on("click", function () {
//    if ($("#signUpForm").formIsValid()) {
//        alert("Form submit")
//    } else {
//        console.log("Form has errors")
//    }
//});