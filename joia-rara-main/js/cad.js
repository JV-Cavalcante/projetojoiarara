// js/cad.js

// Pegando os elementos pelos seus ID's lá do HTML (CORRIGIDO passwordConfirmation)
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-conf"); // <--- CORRIGIDO AQUI!
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const birthdate = document.getElementById("birthdate");

// Event Listener do Formulário (CORRIGIDO event.preventDefault() condicional)
form.addEventListener("submit", (event) => {
    // AQUI É ONDE DECIDIMOS SE IMPEDIMOS OU PERMITIMOS O ENVIO
    const formIsValid = checkForm(); // Chama a função de validação principal

    if (!formIsValid) { // SE A VALIDAÇÃO RETORNAR 'FALSE' (HÁ ERROS), ENTÃO IMPEDE O ENVIO
        event.preventDefault(); // IMPEDE O ENVIO DO FORMULÁRIO
    }
    // SE formIsValid for true, o formulário NÃO terá event.preventDefault() chamado,
    // e ele será enviado normalmente para o form.php.
});


// --- Funções de Validação de Campo Individual ---

function checkInputUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === "") {
        errorInput(username, "Campo Obrigatório!");
        return false;
    } else {
        successInput(username); // Usa a função de sucesso
        return true;
    }
}

function checkInputEmail() {
    const emailValue = email.value.trim();
    if (emailValue === "") {
        errorInput(email, "Campo Obrigatório!");
        return false;
    } else if (!isValidEmail(emailValue)) {
        errorInput(email, "E-mail inválido.");
        return false;
    } else {
        successInput(email);
        return true;
    }
}

function isValidEmail(email) {
    // Regex simples para validação de e-mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkInputPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {
        errorInput(password, "Campo Obrigatório!");
        return false;
    } else if (passwordValue.length < 8) { // senha mínima de 8 caracteres
        errorInput(password, "A senha deve ter no mínimo 8 caracteres.");
        return false;
    } else {
        successInput(password);
        return true;
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if (passwordConfirmationValue === "") {
        errorInput(passwordConfirmation, "Campo Obrigatório!");
        return false;
    } else if (passwordConfirmationValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não conferem.");
        return false;
    } else {
        successInput(passwordConfirmation);
        return true;
    }
}

function checkInputPhone() {
    const phoneValue = phone.value.trim();
    if (phoneValue === "") {
        errorInput(phone, "Campo Obrigatório!");
        return false;
    } else if (!/^\d{10,11}$/.test(phoneValue.replace(/\D/g, ''))) { // Apenas números, 10 ou 11 dígitos
        errorInput(phone, "Telefone inválido (apenas números, 10 ou 11 dígitos).");
        return false;
    } else {
        successInput(phone);
        return true;
    }
}

function checkInputGender() {
    const genderValue = gender.value;
    if (genderValue === "") { 
        errorInput(gender, "Selecione uma opção.");
        return false;
    } else {
        successInput(gender);
        return true;
    }
}

function checkInputBirthdate() {
    const birthdateValue = birthdate.value.trim();
    if (birthdateValue === "") {
        errorInput(birthdate, "Campo Obrigatório!");
        return false;
    } else {
        successInput(birthdate);
        return true;
    }
}


// --- Funções de Feedback Visual ---

function errorInput(input, message) { //
    const formItem = input.parentElement; //
    const textMessage = formItem.querySelector("a"); //
    textMessage.innerText = message; //
    formItem.classList.remove("success"); // Garante que a classe success é removida
    formItem.classList.add("error"); //
}

function successInput(input) { //
    const formItem = input.parentElement; //
    const textMessage = formItem.querySelector("a"); //
    textMessage.innerText = ""; // Limpa a mensagem de erro
    formItem.classList.remove("error"); // Remove a classe de erro
    formItem.classList.add("success"); // Adiciona a classe de sucesso
}


// --- Função Principal de Validação (checkForm) ---
function checkForm() {
    let isValid = true; // Uma flag para controlar se todos os campos são válidos

    // Chame TODAS as funções de validação individuais para que as mensagens de erro apareçam em todos os campos.
    const isUsernameValid = checkInputUsername();
    const isEmailValid = checkInputEmail();
    const isPasswordValid = checkInputPassword();
    const isPasswordConfirmationValid = checkInputPasswordConfirmation();
    const isPhoneValid = checkInputPhone();
    const isGenderValid = checkInputGender();
    const isBirthdateValid = checkInputBirthdate();

    // Se QUALQUER uma das validações individuais retornar 'false', o formulário NÃO é válido.
    if (!isUsernameValid || !isEmailValid || !isPasswordValid ||
        !isPasswordConfirmationValid || !isPhoneValid || !isGenderValid ||
        !isBirthdateValid) {
        isValid = false;
    }

    return isValid; // Retorna 'true' se tudo OK, 'false' se houver erros
}


// --- Listeners para limpar erros em tempo real ---

username.addEventListener("input", () => {
    if (username.value.trim() !== "") { successInput(username); } else { errorInput(username, "Campo Obrigatório!"); }
});
email.addEventListener("input", () => {
    if (email.value.trim() !== "") { successInput(email); } else { errorInput(email, "Campo Obrigatório!"); }
});
password.addEventListener("input", () => {
    if (password.value !== "") { successInput(password); } else { errorInput(password, "Campo Obrigatório!"); }
});
passwordConfirmation.addEventListener("input", () => {
    if (passwordConfirmation.value !== "") { successInput(passwordConfirmation); } else { errorInput(passwordConfirmation, "Campo Obrigatório!"); }
});
phone.addEventListener("input", () => {
    if (phone.value.trim() !== "") { successInput(phone); } else { errorInput(phone, "Campo Obrigatório!"); }
});
gender.addEventListener("change", () => { 
    if (gender.value !== "") { successInput(gender); } else { errorInput(gender, "Selecione uma opção."); }
});
birthdate.addEventListener("input", () => {
    if (birthdate.value.trim() !== "") { successInput(birthdate); } else { errorInput(birthdate, "Campo Obrigatório!"); }
});