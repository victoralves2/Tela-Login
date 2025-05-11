function verificar(){
    const user = document.querySelector('#user');
    const senha = document.querySelector('#senha');
    const erro = document.querySelector('#erro');

    if(user.value.trim() == '' || senha.value.trim() == ''){
        erro.style.display = 'block';
        setTimeout(() => {
            erro.style.display = 'none';
        }, 5000);
    }else{
        erro.textContent = 'Login Valido';
        erro.style.color = 'green';
        erro.style.display = 'block';
    }
}