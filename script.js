$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:15
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                email:true,
                Number:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }

        },
        messages:{
            fname:"Enter first name",
            minlength:"Enter atleast 4 characters"
            }
        })

        
    $("#inp").blur(function(){
        var text=$(this).val()
            if (text.length<4){
                //alert("Enter minimum character")
                $("#error").show()
            }else{
                $("#error").hide()
            }
                
       })




});
        