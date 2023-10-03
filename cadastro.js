console.log(window.bootbox)



let email = document.querySelector(".email")
let senha = document.querySelector(".senha")
let name = document.querySelector(".name")
let dia = document.querySelector(".dia")
let btn_enter = document.querySelector("#btn_enviar")

function validar() {
    if (email.value == "") {
        let a = document.querySelector(".a")
        bootbox.alert("o campo emeil é obrigatorio")
        return
    }
    if (senha.value == "") {
        bootbox.alert("O campo senha é obrigatorio")
        return
    }
    if (name.value == "") {
        bootbox.alert("o campo nome é obrigatorio")
        bootbox.alert('Your message here…');
        return
    }
    if (dia.value == "") {
        bootbox.alert('Your message here…');
        return
    }
}





