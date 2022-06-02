// Changing themes
localStorage.getItem('theme');
const body = document.getElementById("body")
const toggle1 = document.getElementById("theme1");
const toggle2 = document.getElementById("theme2");
const toggle3 = document.getElementById("theme3");

const theme = window.localStorage.getItem("theme");
if (theme != "") {
    body.classList.add("theme1")
    body.classList.add(theme);
}

toggle1.addEventListener("click", () => {
    if (body.classList.contains("theme2")) {
        body.classList.remove("theme2");

    }
    if (body.classList.contains("theme3")) {
        body.classList.remove("theme3");

    }
    body.classList.add("theme1");


    window.localStorage.setItem("theme", "theme1");
});
toggle2.addEventListener("click", () => {
    if (body.classList.contains("theme1")) {
        body.classList.remove("theme1");

    }
    if (body.classList.contains("theme3")) {
        body.classList.remove("theme3");

    }
    body.classList.add("theme2");



    window.localStorage.setItem("theme", "theme2");
});
toggle3.addEventListener("click", () => {
    if (body.classList.contains("theme2")) {
        body.classList.remove("theme2");

    }
    if (body.classList.contains("theme1")) {
        body.classList.remove("theme1");

    }
    body.classList.add("theme3");


    window.localStorage.setItem("theme", "theme3");
});






// calculator function
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'reset':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DEL':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});