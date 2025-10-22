var inputNascimento = document.getElementById('Nascimento')

var idadeMinima = 15;

//Criar o objeto de data atual
const dataAtual = new Date();


// Calcular o Ano Máximo de Nascimento (Data de hoje - Idade Mínima)
var anoMaximo = dataAtual.getFullYear() - idadeMinima;
var mesAtual = dataAtual.getMonth() + 1 // getMonth() é base zero (0=Jan, 11=Dez), então soma 1
var diaAtual = dataAtual.getDate();



// 5. Formatar a data no padrão AAAA-MM-DD (necessário para o input type="date")
// Garantindo que mês e dia tenham sempre 2 dígitos (ex: 01 em vez de 1)
var mesFormatado = mesAtual < 10 ? '0' + mesAtual : mesAtual;
var diaFormatado = diaAtual < 10 ? '0' + diaAtual : diaAtual;

var dataMaxima = `${anoMaximo}-${mesFormatado}-${diaFormatado}`

// 6. Aplicar a data máxima ao atributo 'max' do input
inputNascimento.setAttribute('max', dataMaxima);

// 7. Definir uma data mínima fixa
inputNascimento.setAttribute('min', '1900-01-01')

console.log(`Data máxima de nascimento definido para ${dataMaxima}`)







   // ICON EYE , CLIQUE PARA VER A SENHA //

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona TODOS os ícones de olho da página
    const togglePasswordIcons = document.querySelectorAll('.ph-eye');

    // Para cada ícone de olho encontrado...
    togglePasswordIcons.forEach(icon => {

        // Adiciona um "ouvinte" que espera por um clique
        icon.addEventListener('click' , () => {
            // Encontra o campo de input que é "irmão" do ícone
            const passwordInput = icon.previousElementSibling;

            // 1. Verifica o tipo do campo de senha
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';

                icon.classList.remove('ph-eye')
                icon.classList.add('ph-eye-slash');
            } else {
                passwordInput.type = 'password';

                icon.classList.remove('ph-eye-slash')
                icon.classList.add('ph-eye');
            }
            });
        });
    });






//PRIMEIRA LETRA DO NOME E SOBRENOME SER SEMPRE EM MAIUSCULA
document.addEventListener('DOMContentLoaded' , () => {
const inputNome = document.getElementById('Nome');
const inputSobrenome = document.getElementById('Sobrenome');

// Função que capitaliza a primeira letra de uma string
function capitalizarprimeiraletra(string) {

    // Se a string estiver vazia ou nula, não faz nada
    if(!string) return string;

    // Pega a primeira letra, transforma em maiúscula, e junta com o resto da string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//O evento input alterá automaticamente para maiúsculo ao digitar
inputNome.addEventListener('input',() => {
    inputNome.value = capitalizarprimeiraletra(inputNome.value)

});

inputSobrenome.addEventListener('input',() => {
    inputSobrenome.value = capitalizarprimeiraletra(inputSobrenome.value);
})

});





//FUNÇÃO PARA O BOTÃO "CRIAR CONTA"
function criar() {

    const campos = {

        Nome: document.getElementById('Nome'),
        Sobrenome: document.getElementById('Sobrenome'),
        Nascimento: document.getElementById('Nascimento'),
        email: document.getElementById('email'), 
        senha: document.getElementById('password-input1'),
        confirmarSenha: document.getElementById('password-input2')
    }
    const genero = document.querySelector('input[name="sexo"]:checked');

    document.querySelectorAll('.box.error').forEach(input => input.classList.remove('error'));
    document.querySelectorAll('p.error').forEach(label => label.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(msg => {
    msg.textContent='';
    msg.classList.remove('active');
})

let hasErrors = false;



//FUNÇÃO PARA MOSTRAR OS ERROS DE FORMA ORGANIZADA
function showError(inputId, labelId, message) {
    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);
    const errorMessage = input.closest('.campo-grupo1 , .campo-grupo2').querySelector('.error-message')

    input.classList.add('error');
        if (label) label.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.classList.add('active');
        }
        hasErrors = true;
    }




   //FUNÇÃO AUXILIAR PARA MOSTRAR ERROS
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

    //INÍCIO DAS VALIDAÇÕES
    if (campos.Nome.value === '') showError('Nome', 'Nome-label', 'Este campo é obrigatório');
    if (campos.Sobrenome.value === '') showError('Sobrenome', 'Sobrenome-label', 'Este campo é obrigatório');
    if (campos.Nascimento.value === '') showError('Nascimento', 'Nascimento-label', 'Este campo é obrigatório');
    if (campos.email.value === '') showError('email', 'Email-label', 'Este campo é obrigatório');
    if (campos.senha.value === '') showError('password-input1', 'Senha1-label', 'Este campo é obrigatório');
    if (campos.confirmarSenha.value === '') showError('password-input2', 'Senha2-label', 'Este campo é obrigatório');


    // Validação de email válido
    if (campos.email.value !== '' && !campos.email.value.includes('@')) {
        showError('email', 'Email-label', 'Por favor, insira um e-mail válido.');
    }


    // Senha1 curta
    if (campos.senha.value.length > 0 && campos.senha.value.length < 8) {
        showError('password-input1', 'Senha1-label', 'A senha deve ter no mínimo 8 caracteres.');
    }


    // Senha2 curta
    if (campos.confirmarSenha.value.length > 0 && campos.confirmarSenha.value.length < 8) {
        showError('password-input2', 'Senha2-label', 'A senha deve ter no mínimo 8 caracteres.');
    }


    if (campos.senha.value && campos.confirmarSenha.value && campos.senha.value !== campos.confirmarSenha.value) {
        // Mostra o erro no primeiro campo de senha
        showError('password-input1', 'Senha1-label', 'As senhas não coincidem.');
        // Mostra o erro no segundo campo de senha
        showError('password-input2', 'Senha2-label', 'As senhas não coincidem.');
}

    // Gênero não selecionado
    if (!genero) {
        const generoError = document.querySelector('#sexo .error-message');
        const generoLabel = document.getElementById('Genero-label');
        if (generoError) {
            generoError.textContent = 'Por favor, selecione uma opção.';
            generoError.classList.add('active');
        }
        if (generoLabel) generoLabel.classList.add('error');
        hasErrors = true;
    }



    //Se não houver erros, exibe a mensagem de sucesso
    if (!hasErrors) {
        alert('Conta criada com sucesso!');
        console.log('Formulário enviado com sucesso!');
    }}