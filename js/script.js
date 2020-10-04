var form = document.getElementById('test-form');

form.onchange = onChange;

/**
 * Колбэк изменения данных формы
 * @param {object} e
 */
function onChange(e) {
    var selectorName = '.checkbox' // По классу
    // var selectorName = '[data-role="ckeckbox-input"]' // По атрибутут data-role="ckeckbox-input"
    // var selectorName = '[type="ckeckbox"]' // По атрибуту type="ckeckbox"
    // var selectorName = '.wrapper .checkbox' // Ищем чекбоксы, которые являются потомками элемента с классом wrapper
    // var selectorName = '.list .-odd .checkbox' // Ищем все нечетные чекбоксы в элементе с классам list (на странице таких 3 штуки)

    var fields = getElements(selectorName);
    checkFieldsByFor(fields);
    // checkFieldsByForEach(fields);
}

/**
 * Фуцнкция вовращает массив найденых элементов. selectorName может быть разный, смотри примеры в функции onChange
 * @param {STRING} selectorName
 * @returns {NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>}
 */
function getElements(selectorName) {
    return document.querySelectorAll(selectorName);
}

/**
 * Возвращает ближайшего родителя соответсвующего параметрам https://developer.mozilla.org/ru/docs/Web/API/Element/closest
 * @param {node element} elem
 * @param {string} parent
 * @returns {HTMLElementTagNameMap[keyof HTMLElementTagNameMap] | Element | SVGElementTagNameMap[keyof SVGElementTagNameMap]}
 */
function getParentElement(elem, parent) {
    return elem.closest(parent);
}

/**
 * Проверка полей с использованием цикла for
 * @param {array} fields
 */
function checkFieldsByFor(fields) {
    var i = 0,
        n = fields.length,
        item, label;

    for (i; i < n; i++) {
        item = getParentElement(fields[i], '.item');
        label = getParentElement(fields[i], '.label');
        if (fields[i].checked) {
            item.style.background = 'yellow';
            label.classList.add('-done');
        } else {
            item.removeAttribute('style');
            label.classList.remove('-done');
        }
    }
}

/**
 * Проверка полей с использованием метода массивов forEach
 * @param {array} fields
 */
function checkFieldsByForEach(fields) {
    var item, lable;
    fields.forEach(function (field) {
        item = getParentElement(field, '.item');
        label = getParentElement(field, '.label');
        if (field.checked) {
            item.style.background = 'yellow';
            label.classList.add('-done');
        } else {
            item.removeAttribute('style');
            label.classList.remove('-done');
        }
    })
}