
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


//function to suggest the number of the input cell number
function checkphone(select) {
    let country = select.value;
    let phone = document.getElementById("phone");
    if (country === "VietNam") {
        phone.value = "+84 "
    }
    else if (country === "India") {
        phone.value = "+91 "
    }
    else if (country === "America") {
        phone.value = "+1 "
    }
    else if (country === "Russia") {
        phone.value = "+7 "
    }
    else if (country === "China") {
        phone.value = "+86 "
    }
    else if (country === "Japan") {
        phone.value = "+81 "
    }
    else if (country === "Korea") {
        phone.value = "+850 "
    }
    else if (country === "France") {
        phone.value = "+33 "
    }
    else if (country === "Other") {
        phone.value = ""
    }
    else {
        phone.value = "+84 "
    }
}
document.getElementById("phone").oninput = function () {
    this.value = this.value.replace(/[^0-9+\s]/g, "");
};




// Display step 0 (form-signup-step1)
document.addEventListener('DOMContentLoaded', function () {
    showStep(0);
});



var stepSelects = document.querySelectorAll('.step-select');
var formSignins = document.querySelectorAll('.form-signup');
var backButton = document.querySelector('.back-button');
var nextButton = document.querySelector('.next-button');

// event button Back
backButton.addEventListener('click', function () {
    var currentStep = getCurrentStep();
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
});
// event Button Next
nextButton.addEventListener('click', function () {
    var currentStep = getCurrentStep();
    var isValid = false;

    if (currentStep === 0) {
        isValid = checkFormStep1();
    } else if (currentStep === 1) {
        isValid = checkFormStep2();
    } else if (currentStep === 2) {
        isValid = checkFormStep3();
    }
    if (currentStep < formSignins.length - 1 && isValid) {
        showStep(currentStep + 1);
    }
});

// function get current step
function getCurrentStep() {
    for (var i = 0; i < formSignins.length; i++) {
        if (formSignins[i].style.display === 'block') {
            return i;
        }
    }
    return -1;
}
// Function show step
function showStep(stepIndex) {
    formSignins.forEach(function (form, index) {
        form.style.display = index === stepIndex ? 'block' : 'none';
        stepSelects[index].style.backgroundColor = index === stepIndex ? 'red' : 'white';
        // Hide btn-signin when on form-signin-step4
        if (index === stepIndex && index === formSignins.length - 1) {
            document.querySelector('.btn-signup').style.display = 'none';
        } else {
            document.querySelector('.btn-signup').style.display = 'block';
        }
    });
}

//declare "a" to save input data from client
var a = {
    "username": "",
    "email": "",
    "pass": "",
    "country": "",
    "address": "",
    "date": "",
    "phone": ""
}

var usernamevalid = false;
var emailvalid = false;
var passwordvalid = false;
//event check email
email.addEventListener('input', function () {
    let space = /^[ ]+$/
    let mail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    var erroremail = document.getElementById("emailerror")
    var email = document.getElementById("email")
    if (email.value === "" || space.test(email.value)) {
        email.classList.add('error');
        erroremail.textContent = "Gmail cannot be blank.";
        erroremail.style.display = 'block';
        emailvalid = false;
        return false
    }
    if (!mail.test(email.value)) {
        email.classList.add('error');
        erroremail.textContent = "Gmail wrong format.";
        erroremail.style.display = 'block';
        emailvalid = false;
        return false
    }
    if (mail.test(email.value)) {
        for (let i = 0; i < localStorage.length; i++) {
            if (email.value == localStorage.key(i)) {
                email.classList.add('error');
                erroremail.textContent = "Gmail already exists.";
                erroremail.style.display = 'block';
                emailvalid = false;
                return false
            }

        }
        emailvalid = true;
        a.email = email.value;
        erroremail.style.display = 'none';
        email.classList.remove('error');
    }
});

//event check password
password.addEventListener('input', function () {
    var errorpassword = document.getElementById("passworderror")
    var password = document.getElementById("password")
    let space = /^[ ]+$/
    let pass = /^[^\s]{1,}$/
    let pass1 = /^[^\s]{8,16}$/
    if (password.value === "") {
        errorpassword.textContent = "Password cannot be left blank.";
        errorpassword.style.display = 'block';
        password.classList.add('error');
        passwordvalid = false;
        return false
    }
    if (!pass.test(password.value) || space.test(password.value)) {
        errorpassword.textContent = "Password must not contain spaces.";
        errorpassword.style.display = 'block';
        password.classList.add('error');
        passwordvalid = false;
        return false
    }
    if (!pass1.test(password.value)) {
        errorpassword.textContent = "Password must be between 8 and 16 characters.";
        errorpassword.style.display = 'block';
        password.classList.add('error');
        passwordvalid = false;
        return false
    } else {
        passwordvalid = true
        a.pass = password.value;
        errorpassword.style.display = 'none';
        password.classList.remove('error');
        return true
    }
});

//event check username
username.addEventListener('input', function () {
    var username = document.getElementById("username");
    let space = /^[ ]+$/
    let name = /^[A-Za-z]+([ ]?[A-Za-z]+)*$/
    var errorname = document.getElementById("usernameerror")
    if (username.value.trim() === "" || space.test(username.value.trim())) {
        username.classList.add('error');
        errorname.textContent = "User Name cannot be left blank.";
        errorname.style.display = 'block';
        usernamevalid = false;
        return false
    }
    if (!name.test(username.value.trim())) {
        errorname.textContent = "User Name is only allowed to contain the character.";
        errorname.style.display = 'block';
        username.classList.add('error');
        usernamevalid = false;
        return false
    } else {
        usernamevalid = true
        a.username = username.value.trim();
        username.classList.remove('error');
        errorname.style.display = 'none';
        return true
    }
})
//event check password confirm
var passwordconfirmvalid = false;
passwordconfirm.addEventListener('input', function () {
    var errorpasswordconfirm = document.getElementById("passwordconfirmerror")
    var passwordconfirm = document.getElementById("passwordconfirm")
    var password = document.getElementById("password")

    if (passwordconfirm.value === "") {
        errorpasswordconfirm.textContent = "Password Confirm cannot be left blank.";
        errorpasswordconfirm.style.display = 'block';
        passwordconfirm.classList.add('error');
        passwordconfirmvalid = false;
        return false
    }
    if (passwordconfirm.value !== password.value) {
        errorpasswordconfirm.textContent = "Password Confirm Wrong.";
        errorpasswordconfirm.style.display = 'block';
        passwordconfirm.classList.add('error');
        passwordconfirmvalid = false;
        return false
    }
    else {
        passwordconfirmvalid = true
        errorpasswordconfirm.style.display = 'none';
        passwordconfirm.classList.remove('error');
        return true
    }
});
//step2
var country = document.getElementById("country");
var address = document.getElementById("address");
var date = document.getElementById("date");
var phone = document.getElementById("phone");

var countryvalid = false;
var addressvalid = false;
var datevalid = false;
var phonevalid = false;
country.addEventListener('input', function () {
    if (country.value === "") {
        countryvalid = true;
    } else {
        a.country = country.value;
        countryvalid = true;
    }
});
// event check address
address.addEventListener('input', function () {
    if (address.value === "") {
        address.classList.add('error');
        addressvalid = false;
    } else {
        address.classList.remove('error');
        a.address = address.value;
        addressvalid = true;
    }
});
// event check date
date.addEventListener('input', function () {
    if (date.value === "") {
        date.classList.add('error');
        datevalid = false;
    } else {
        date.classList.remove('error');
        a.date = date.value;
        datevalid = true;
    }
});

// event check phone
phone.addEventListener('input', function () {
    if (phone.value === "") {
        phone.classList.add('error');
        phonevalid = false;
    } else {
        phone.classList.remove('error');
        a.phone = phone.value;
        phonevalid = true;
    }
});

// function check form-signup step 1
function checkFormStep1() {
    if (usernamevalid && emailvalid && passwordvalid && passwordconfirmvalid) {
        return true;
    } else {
        alert("Please enter complete information !")
        return false;
    }
}
// function check form-signup step 2
function checkFormStep2() {
    if (addressvalid && datevalid && phonevalid && countryvalid) {
        return true;
    } else {
        alert("Please enter complete information !")
        return false;
    }
}

// // function check form-signup step 3
function checkFormStep3() {
    var termsAccepted = document.querySelector('.form-signup-step3 input[type="checkbox"]').checked;
    if (!termsAccepted) {
        alert("Please accept the terms!");
        return false;
    } else {
        var b = JSON.stringify(a)
        console.log(b)
        localStorage.setItem(document.getElementById("email").value, b)
        var output = document.querySelectorAll(".info_client_element")
        output[0].innerHTML = a.username;
        output[1].innerHTML = a.email;
        output[2].innerHTML = a.pass
        output[3].innerHTML = a.country
        output[4].innerHTML = a.address
        output[5].innerHTML = a.date
        output[6].innerHTML = a.phone
        return true;
    }

}
