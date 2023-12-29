

var link = document.querySelectorAll(".link");
link.forEach(link => {
    link.addEventListener("mouseup", function (event) {
        if (event.which === 2 || event.which === 3) {
            var value = this.getAttribute('value');
            localStorage.setItem('planet', value);
        }
    })
})
function getValue(a) {
    var value = a.getAttribute("value");
    localStorage.setItem("planet", value)
}
let count = 0
var a = document.querySelector('.link_sun')

a.addEventListener('click', function (event) {
    event.preventDefault()
    count++
    if (count == 1) {
        document.querySelector('.secret_text').innerHTML = 'The Sun is not a planet'

    }
    if (count == 2) {

        document.querySelector('.secret_text').innerHTML = 'I said "The Sun is not a planet"'

    }
    if (count == 3) {
        document.querySelector('.secret_text').innerHTML = 'I said "THE SUN IS NOT A PLANET, it is a Star"'

    }
    if (count == 4) {
        document.querySelector('.secret_text').innerHTML = 'Why do you keep trying to click here'

    }
    if (count == 5) {

        document.querySelector('.secret_text').innerHTML = '5 Times'
    }
    if (count == 6) {
        document.querySelector('.secret_text').innerHTML = '6 Times'
    }
    if (count == 7) {
        document.querySelector('.secret_text').innerHTML = '7 Times.Ok keep going i can count it all day '
    }
    if (count == 8) {
        document.querySelector('.secret_text').innerHTML = '8 Times '
    }
    if (count == 9) {
        document.querySelector('.secret_text').innerHTML = '9 Times '
    }
    if (count == 10) {
        document.querySelector('.secret_text').innerHTML = '10 Times.Ok please stop it, I\'m getting bored of you '
    }
    if (count == 11) {
        document.querySelector('.secret_text').innerHTML = 'I don\'t care about you, I\'m leaving. '
    }
    if (count == 12) {
        document.querySelector('.secret_text').innerHTML = ''
    }
    if (count == 14) {
        document.querySelector('.secret_text').innerHTML = 'Why do you still keep trying to click here, nothing will be happen.'
    }
    if (count == 15) {
        document.querySelector('.secret_text').innerHTML = 'There are 8 more planets on the screen, try something else.'
    }


})




