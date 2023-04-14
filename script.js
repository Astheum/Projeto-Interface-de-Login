function login() {
    var login = document.getElementById("login");
    var register = document.getElementById("register")

    if (login.style.display === "none") {
        login.style.display = "grid";
        register.style.display = "none"
    } else {
        login.style.display = "none"
        login.style.display = "grid"
        register.style.display = "none"
    }
}

function register() {
    var register = document.getElementById("register");
    var login = document.getElementById("login")

    if (register.style.display === "none") {
        register.style.display = "grid";
        login.style.display = "none"
    } else {
        register.style.display = "none"
        register.style.display = "grid"
        login.style.display = "none"
    }
}