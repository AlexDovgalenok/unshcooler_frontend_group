function change(){
    // let h =document.getElementsByTagName("h1")[0];
    // let count = 0;

    let liBox = document.querySelectorAll(".box-li");
    let chek = document.querySelectorAll(".addColor");
    let inpColor = document.querySelectorAll(".inputCheck");
    let knopka = document.querySelectorAll(".btn");
    for(let i = 0; i<liBox.length; i++){
             
        if(chek[i].chacked){
            liBox[i].style.backgroundColor = "orange"
            inpColor[i].style.backgroundColor = "white"
            knopka[i].innerHTML = "Done!";
            knopka[i].style.border = "none";
            knopka[i].style.backgroundColor  = "orange";
            count++;
            console.log('hello')
        }
        else{
            liBox[i].style.backgroundColor = "white";
            inpColor[i].style.backgroundColor = "#FED230";
            knopka[i].innerHTML = "Пройти";
            knopka[i].style.border = "3px solid black";
            knopka[i].style.backgroundColor = "white";
    
        }
    }

    
    // switch (count) {
    //     case 0:
    //         h.innerHTML = 'Вы не прошли ни одного курса';
    //         break;
    //     case 1:
    //         h.innerHTML = 'Вы прошли 1 курс';
    //         break;
    //     case 6:
    //         h.innerHTML = 'Вы прошли все курсы';
    //         break;
    //     case 5:
    //         h.innerHTML = 'Вы прошли 5 курсов';
    //         break;
    //     default:
    //         h.innerHTML = `Вы прошли ${count} курса`;
    // }
   
   

}



}