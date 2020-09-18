

var CHECKBOX = document.querySelectorAll('[type="checkbox"]');
var CARDCOURSE = document.getElementsByClassName("card course");
var DOC = document.forms.form;
var CIRCLE = DOC.getElementsByClassName("circ");
var BUTTON = DOC.getElementsByClassName("but");

DOC.onchange = function () {
    let count = 0;
    h = document.getElementsByTagName("h1")[0];
    for (let i = 0; i <6; i++) {
        if (CHECKBOX[i].checked) {
            CARDCOURSE[i].style.backgroundColor = '#FED230';
            CIRCLE[i].style.backgroundColor = 'white';
            BUTTON[i].innerHTML = 'Пройдено!';
            BUTTON[i].style.borderColor = '#FED230';
            count ++;
        }
        else {
            CARDCOURSE[i].style.backgroundColor = 'white';
            CIRCLE[i].style.backgroundColor = '#FED230';
            BUTTON[i].innerHTML = 'Пройти';
            BUTTON[i].style.borderColor = 'black';
        }
    }
    switch (count) { 
        case 0:
            h.innerHTML = 'Ты не прошел ни одного курса';
            break;
        case 1:
            h.innerHTML = 'Ты прошел 1 курс';
            break;
        case 6:
            h.innerHTML = 'Ты прошел все курсы';
            break;
        case 5:
            h.innerHTML = 'Ты прошел 5 курсов';
            break;
        default:
            h.innerHTML = `Ты прошел ${count} курса`;
    }
} 