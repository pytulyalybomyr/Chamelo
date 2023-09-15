let password = document.getElementById("password")
let eye = document.getElementById("eye")


eye.onclick = function () {
    if (password.type == "password") {
        password.type = "text"
        eye.src = "../img/eye-open.webp"
    } else {
        password.type = "password"
        eye.src = "../img/eye-close.webp"
    }

}