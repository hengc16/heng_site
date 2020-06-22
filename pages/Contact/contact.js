$(document).ready(function(){
    //name cant have number or less than 2 letter
    $('#form_firstname').on('input', function() {
        var input=$(this);
        var name_re =  /^[A-Za-z]+$/;
        var is_name=name_re.test(input.val()) && input.val().length >= 2;

        if(is_name){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    //last name cant have number or less than 2 letter
    $('#form_lastname').on('input', function() {
        var input=$(this);
        var name_re = /^[A-Za-z]+$/;
        var is_name=name_re.test(input.val())&& input.val().length >= 2;
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    // Email must be an email
    $('#form_email').on('input', function() {
        var input=$(this);
        var email_re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email=email_re.test(input.val());
        if(is_email){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    //contact number can only be number 
    $('#form_phoneNumber').on('input', function() {
        var input=$(this);
        var phone_re = /^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$/;
        var is_email=phone_re.test(input.val());
        if(is_email){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    // Message can't be blank
    $('#form_message').keyup(function(event) {
        var input=$(this);
        var message=$(this).val();
        if(message){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}	
    });
 
    $("#contact_submit button").click(function(event){
        var form_data=$("#form").serializeArray();
        var error_free=true;
        for (var input in form_data){
            var element=$("#form_"+form_data[input]['name']);
            var valid=element.hasClass("valid");
            var error_element=$("span", element.parent());
            if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
            else{error_element.removeClass("error_show").addClass("error");}
        }
        if (!error_free){
            event.preventDefault(); 
        }
        else{
            alert('No errors: Form will be submitted');
        }
    });
});