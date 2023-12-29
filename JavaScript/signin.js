

// effect menu
window.addEventListener("scroll", function () {
    var menuWeb = document.getElementById('menuWeb');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset > this.previousScroll) {
        menuWeb.style.opacity = "0"
        menuWeb.style.top = "-10vw"

    } else {
        menuWeb.style.top = "0vw"
        menuWeb.style.opacity = "1"
        menuWeb.classList.add('scrolled')
    }
    this.previousScroll = window.pageYOffset;
});
// end
//start check account existence
function checkaccount() {
    let email = document.getElementById("email").value;
    let pass3 = document.getElementById("password").value;
    let boxsignin = document.getElementById("box-signin")
    let boxlogout = document.getElementById("box-logout")
    for (let i = 0; i < localStorage.length; i++) {
        if (email == localStorage.key(i)) {
            let storedAccount = localStorage.getItem(email);
            storedAccount = JSON.parse(storedAccount);
            if (pass3 == storedAccount.pass) {
                alert("Logged in successfully !");
                localStorage.setItem("signin", "true")
                localStorage.setItem("comment", storedAccount.username)
                localStorage.setItem("emaillogin", storedAccount.email)

                return true;
            } else {
                alert("Incorrect password");
                return false;
            }
        }
    }
    alert("Email account does not exist");
    return false;
}
//end check account existence
//event acccount login
window.addEventListener('load', function () {
    let boxsignin = document.getElementById("box-signin")
    let boxlogout = document.getElementById("box-logout")
    if (JSON.parse(localStorage.getItem("signin")) == true) {
        var userlogin = document.createElement("p");
        userlogin.classList.add("userlogin");
        userlogin.innerHTML = "Username: " + " " + localStorage.getItem("comment")
        var infouserlogin = document.getElementById("info-userlogin");
        infouserlogin.appendChild(userlogin);
        var emaillogin = document.createElement("p");
        emaillogin.classList.add("userlogin");
        emaillogin.innerHTML = "Email: " + " " + localStorage.getItem("emaillogin")
        var infouserlogin = document.getElementById("info-userlogin");
        infouserlogin.appendChild(emaillogin);
        boxsignin.style.display = 'none';
        boxlogout.style.display = 'block';
        return true
    }
    else {
        boxsignin.style.display = 'block';
        boxlogout.style.display = 'none';
    }
});

//function log out account
function btnlogout() {
    localStorage.setItem("signin", "false")
    localStorage.setItem("comment", "")
    localStorage.setItem("emaillogin", "")
    window.window.location.href = "index.html";
    return true
}

//event eye show password
showpassword.addEventListener('click', function () {
    let showpassword = document.getElementById('showpassword');
    let passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showpassword.classList.remove('fa-eye');
        showpassword.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        showpassword.classList.remove('fa-eye-slash');
        showpassword.classList.add('fa-eye');
    }
});

if (typeof document.getElementsByTagName("input")[0].autocomplete !== "undefined") {
    document.getElementsByTagName("input")[0].autocomplete = "off";
}
if (typeof document.getElementsByTagName("input")[1].autocomplete !== "undefined") {
    document.getElementsByTagName("input")[1].autocomplete = "new-password";
}
