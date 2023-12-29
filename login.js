//start javscript menu
window.addEventListener('load', function () {
    let indexlog = document.getElementById("index-log")
    let userindexlog = document.getElementById("user-index-log")
    if (JSON.parse(localStorage.getItem("signin")) == true) {
        userindexlog.innerHTML = localStorage.getItem("comment")
        return true
    }
    else {
        indexlog.innerHTML = "Sign In" + '<i class="fa-solid fa-user"></i>'
    }
});
function toggleMenu() {
    var menu = document.querySelector('.menu-center');
    menu.classList.toggle('show-menu');
}
//end javscript menu

//start javascript list contact
function toggleContactList() {
    var contactList = document.getElementById("listcontact");
    contactList.classList.toggle("show");
    var contact = document.getElementById("contact");
    contact.classList.toggle("expanded");
}
//end javascript list contact
