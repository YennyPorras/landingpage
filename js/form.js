var formulario = document.getElementById("register_form");
formulario.addEventListener("submit", function() {
    var formData = new FormData();
    for (var i = 0; i < formulario.length; i++) {
        formData.append(formulario[i].name, formulario[i].value);
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            alert(JSON.parse(xmlHttp.responseText));
        }else{
            alert("Error en envio");
        }
    }
    xmlHttp.open("post", "https://dummyserver.com/contacto");
    xmlHttp.send(formData);
    return false;
});