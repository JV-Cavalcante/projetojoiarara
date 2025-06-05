// Pegando os elementos pelos seus ID's lá do HTML
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const birthdate = document.getElementById("birthdate");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
} )

// Início das funções de validação de cada campo do formulário //
function checkInputUsername(){
    const usernameValue = username.value; // Essas variaveis pegam a referência dos inputs de cada campo, nesse aqui ta pegando do campo nome do usuário //

    if (usernameValue === ""){ //Se o user não digitar nada, aparece a mensagem de campo obrigátorio //
        errorInput(username, "Campo Obrigatório!")
    }else{
        const formItem = username.parentElement;
        formItem.classList = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;
    if (emailValue === ""){
        errorInput(email, "Campo Obrigatório!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;
    if (passwordValue === ""){
        errorInput(password, "Campo Obrigatório!")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa de no mínimo 8 caracteres!")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;
    if (confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "Campo Obrigatório!")
    }else if (confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas precisam ser iguais!")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPhone(){
    const phoneValue = phone.value;
    if (phoneValue === ""){
        errorInput(phone, "Campo Obrigatório!")
    }else{
        const formItem = phone.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputGender(){
    const genderValue = gender.value;
        successInput(gender);

}

function CheckInputBirthdate(){
    const birthdateValue = birthdate.value;
        successInput(birthdate);
    
}


function errorInput(input, message){ //Função para a validação dos erros nos campos, caso houver //
    const formItem = input.parentElement; // Acessando pela Div, como elemento pai //
    const textMessage = formItem.querySelector("a") //Pega a âncora la do html (mensagem de erro) //
    textMessage.innerText = message;
    formItem.className = "form-content error"
}

function successInput(input){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = "";
    formItem.classList.remove("error");
}

function checkForm(){ // Vai verificar se todas as funções estão corretas, se sim, vai "cadastrar" o user //
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();
    checkInputPhone();
    checkInputGender();
    CheckInputBirthdate();

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });
    if(isValid){
        alert("Cadastro Realizado!");
        
    }
}
