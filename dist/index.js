const TYPE_CODE = { html: 0, css: 1, js: 2 }

function selectTypeCode(_type_code, identifier){
    let elPres = document.querySelectorAll(identifier+" pre");
    elPres[0].style.display = "none";
    elPres[1].style.display = "none";
    elPres[2].style.display = "none";
    elPres[TYPE_CODE[_type_code]].style.display = "block";
}

function showCode(identifier){
    let elCode = document.querySelector(identifier+" > .code");
    elCode.style.display = (elCode.style.display == "none" || elCode.style.display == "")? "block": "none";
}

