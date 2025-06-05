document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!email || !password) {
                e.preventDefault();
                alert("Preencha todos os campos!");
            }
        });
    } else {
        console.error("Elemento #loginForm não encontrado!");
    }
});