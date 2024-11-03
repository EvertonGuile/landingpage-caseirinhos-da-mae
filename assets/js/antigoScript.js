document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão pelo ID
    var mobileBtn = document.getElementById('mobile_btn');

    // Adiciona o evento de clique ao botão
    mobileBtn.addEventListener('click', function() {
        // Seleciona o menu pelo ID
        var mobileMenu = document.getElementById('mobile_menu');
        
        // Alterna a classe 'active'
        mobileMenu.classList.toggle('active');
    });
});



// FUNÇÃO ACIMA, MAS USANDO JQUERY
/*
    $(document).ready(function() {
        $('#mobile_btn').on('click', function () {
            $('#mobile_menu').toggleClass('active')
        })
    })
*/


// TESTES PARA EXCLUIR U USAR MAIS TARDE ...
// document.getElementById("mobile_btn").addEventListener("click", function() {
//     if (document.getElementById("mobile_btn-default").style.display != "none") {
//         document.getElementById("mobile_btn-default").style.display = "none";
//     } else {
//         document.getElementById("mobile_btn-default").style.display = "flex";
//     }
// })