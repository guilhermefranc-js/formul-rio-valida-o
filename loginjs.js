//VER SENHA AO CLICAR NO ICONE
document.addEventListener('DOMContentLoaded', () => {


    // Seleciona TODOS os ícones de olho da página
    const togglePasswordIcons = document.querySelectorAll('.ph-eye');

    // Para cada ícone de olho encontrado...
    togglePasswordIcons.forEach(icon => {

        // Adiciona um "ouvinte" que espera por um clique
        icon.addEventListener('click', () => {

            // Encontra o campo de input que é "irmão" do ícone
            const passwordInput = icon.previousElementSibling;

            // 1. Verifica o tipo do campo de senha
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('ph-eye');
                icon.classList.add('ph-eye-slash');

            } else {
                passwordInput.type = 'password';
                icon.classList.remove('ph-eye-slash');
                icon.classList.add('ph-eye');
            }
        });
    });
});


function fazerLogin() {

    const campos = {
        email: document.getElementById('email'), 
        senha: document.getElementById('password-input1')
    };
    let hasErrors = false;

    function showError(inputId, labelId, message) {
        const input = document.getElementById(inputId);
        const label = document.getElementById(labelId);
        
        if (!input) {
            console.error('Erro no JS: Elemento não encontrado: ' + inputId);
            return; 
        }
        const errorMessageContainer = input.closest('.campo-grupo1, .campo-grupo2');
        if (errorMessageContainer) {
            const errorMessage = errorMessageContainer.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.textContent = message;
                errorMessage.classList.add('active');
            }
        }
        if (input) input.classList.add('error');
        if (label) label.classList.add('error');
        hasErrors = true;
    }

    document.querySelectorAll('.box.error, p.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.textContent = '';
        msg.classList.remove('active');
    });

    
    //INÍCIO DAS VALIDAÇÕES
    if (campos.email.value === '') showError('email', 'Email-label', 'Este campo é obrigatório');
    if (campos.senha.value === '') showError('password-input1', 'Senha-label', 'Este campo é obrigatório');
    if (campos.email.value !== '' && !campos.email.value.includes('@')) {
        showError('email', 'Email-label', 'Por favor, insira um e-mail válido.');
    }

    // Senha curta
    if (campos.senha.value.length > 0 && campos.senha.value.length < 8) {
        showError('password-input1', 'Senha-label', 'A senha deve ter no mínimo 8 caracteres.');
    }

    //Se não houver erros, exibe a mensagem de sucesso
    if (!hasErrors) {
        alert('Login realizado com sucesso!');
    }
}