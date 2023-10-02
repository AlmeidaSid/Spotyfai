$(document).ready(function(){
    $('#entrar').click(function(){
        let senha = $('#senha').val();
        let email = $('#email').val();
        if(email == '' && senha == ''){
            alert('Preenchimento Obrigatorio!');
        }       
    });
});