const button = document.getElementById("createButton");

button.addEventListener("click", () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        window.alert("Passwords don't match!")
    }
})


