(function(selector) {
    function save(data) {
        localStorage.setItem(selector, JSON.stringify(data));
        
    }
    
    function onChange(event) {
        var element = event.target,
            name = element.name,
            value = element.value;
            h3 = document.getElementsByTagName("h3")[0];
            data[name] = value;
            h3.innerHTML = value;
        save(data);
        
    }
    var elements = document.querySelectorAll(selector),
        data = localStorage.getItem(selector);
        
    if(data) { // если в сторадже что-то есть
        // то можем и распарсить
        data = JSON.parse(data);
        
    } else {
        // иначе парсить нельзя, будет ошибка
        // присвоим дефолтное значение и сохраним
        save(data = {});
    }
    // обратимся к прототипу
    Array.prototype.forEach.call(elements, function(element) {
        var name = element.name,
            value = element.value,
            h3 = document.getElementsByTagName("h3")[0];
            
        if(data[name] === value) { // если текущий элемент отмечен в сторадже
            // то отметим и на странице
            element.checked = true;
            h3.innerHTML = value;
                        
        }
        // навесим созданый вне цикла хандлер на событие
        element.addEventListener("change", onChange); 
        
        
        
    });

    
        
    

})("input[type=radio]");

