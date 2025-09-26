const ativadorToast = document.getElementById('btn-checar-emails')
    const mensagem = document.getElementById('mensagem-alerta')

    if(ativadorToast){
        ativadorToast.addEventListener('click', function(){
            const toast = new bootstrap.Toast(mensagem)
            toast.show()    
        })
    }


    document.addEventListener("DOMContentLoaded", function () {
        var toastEl = document.getElementById('mensagem-alerta');
        var toast = new bootstrap.Toast(toastEl);
        toast.show(); // força exibir ao carregar
    });