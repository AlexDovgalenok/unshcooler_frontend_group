var CB = document.querySelectorAll('[type="checkbox"]');
var CF = document.getElementsByClassName("blank");
var U = document.forms.form;
var RO1 = U.getElementsByClassName("rightObj1");
var RO2 = U.getElementsByClassName("rightObj2");

U.onchange = function () {
    let count = 0;
    h = document.getElementsByTagName("h1")[0];
    for (let i = 0; i <6; i++) {
        if (CB[i].checked) {
            CF[i].style.backgroundColor = 'yellowgreen';
            RO1[i].style.backgroundColor = 'white';
            RO2[i].innerHTML = 'Пройдено';
            RO2[i].style.borderColor = 'yellowgreen';
            count ++;
        }
        else {
            CF[i].style.backgroundColor = 'white';
            RO1[i].style.backgroundColor = 'yellowgreen';
            RO2[i].innerHTML = 'Пройти';
            RO2[i].style.borderColor = 'black';
        }
    }
    switch (count) {
        case 0:
            h.innerHTML = 'Вы не прошли ни одного курса';
            break;
        case 1:
            h.innerHTML = 'Вы прошли 1 курс';
            break;
        case 6:
            h.innerHTML = 'Вы прошли все курсы';
            break;
        case 5:
            h.innerHTML = 'Вы прошли 5 курсов';
            break;
        default:
            h.innerHTML = `Вы прошли ${count} курса`;
    }
}