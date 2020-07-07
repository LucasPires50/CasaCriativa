document
    .querySelector("button.fat") //procure o bottão fat
    .addEventListener("click", function(){
        document.querySelector("#footer")
        .classList
        .toggle("hide")//colocar e tirar a classe hide(do css)
    }) // e adicione um ouvidor de eventos