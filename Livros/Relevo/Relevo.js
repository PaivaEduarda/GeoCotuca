function adicionarElementosNaDiv(elementos) {
    var temasContainer = document.getElementById("temasCountainer2");

    for (var i = 0; i < elementos.length; i++) {
        var temasElement = document.createElement("div")
        temasElement.id =  "tema1";
        var divImagemTemaElement = document.createElement("div")
        divImagemTemaElement.id = "DivImgTema1";
        var divImagemTemaLink = document.createElement("a")
        divImagemTemaLink.href = elementos[i].link;
        var divImagemTemaInput = document.createElement("input");
        divImagemTemaInput.type = "image";
        divImagemTemaInput.src = elementos[i].imagem;
        divImagemTemaInput.classList.add("imgTema1");

        divImagemTemaLink.appendChild(divImagemTemaInput);
        divImagemTemaElement.appendChild(divImagemTemaLink);
        temasElement.appendChild(divImagemTemaElement);

        var divLabelTemaElement = document.createElement("div");
        divLabelTemaElement.classList.add("DivLbTema1");

        var divLabelTemaLink = document.createElement("a");
        divLabelTemaLink.href = elementos[i].link;
        divLabelTemaLink.innerText = elementos[i].titulo;
        divLabelTemaLink.classList.add("lbTema1");

        divLabelTemaElement.appendChild(divLabelTemaLink);
        temasElement.appendChild(divLabelTemaElement);

        temasContainer.appendChild(temasElement);
    }
}