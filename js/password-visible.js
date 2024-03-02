$(document).ready(function(){
    $('.input-binder i').on('click',function(){
        $('input').toggleClass('active');
        if($('input').hasClass('active')){
            $(this).attr('class',"fa fa-eye-slash fa-lg password-visible")
            .prev('input').attr('type',"text");
        }else{
            $(this).attr('class',"fa fa-eye fa-lg password-visible")
            .prev('input').attr('type','password');
        }
    });
});
