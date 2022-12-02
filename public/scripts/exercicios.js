function adicionarElementosNaDiv(elementos) {
    var temasContainer = document.getElementById("temasCountainer");

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


var temas = [
    {
        titulo: "Questões ambientais",
        link: "./Livros/Relevo.html",
        imagem: "https://img.freepik.com/vetores-gratis/conceito-abstrato-de-poluicao-do-solo_335657-3218.jpg?w=2000" 
    },
    {
        titulo: "Agropecuária",
        link: "./Livros/Relevo.html",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaN4mM5CLHqHmH2lWIfvIxWdNRwQqHqcRSI7sy9adRnVv25NOIbnBYkeiCLV0PzQ82kA&usqp=CAU"
    },
    {
        titulo: "Fases do capitalismo",
        link: "./Livros/Relevo.html",
        imagem: "https://st.depositphotos.com/1221766/4844/v/600/depositphotos_48440913-stock-illustration-billionaire-boss.jpg"
    },
    {
        titulo: "Urbanização",
        link: "./Livros/Relevo.html",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkF_VwWfNQALQErxHzKtVsUSNk9zJ-jsBIsQ&usqp=CAU"
    },
    {
        titulo: "Indústria",
        link: "./Livros/Relevo.html",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bqpeqHNNHPmdWWUH3lGFoLxT6YwrxQEGnA&usqp=CAU"
    },
    {
        titulo: "Migrações",
        link: "./Livros/Relevo.html",
        imagem: "https://s4.static.brasilescola.uol.com.br/be/2021/06/migracao.jpg"
    },
    {
        titulo: "Comércio",
        link: "./Livros/Relevo.html",
        imagem: "https://www.fecomercio.com.br/upload/img/2016/10/10/57fbaa8fccafe-ciclistas_no_com_rcio_2.jpg"
    },
    {
        titulo: "Relevo",
        link: "./Livros/Relevo.html",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ce0QLFTEq5vHSYvLjyzglRst9zZobL0zUA&usqp=CAU"
    },
    {
        titulo: "Climas do Brasil",
        link: "./Livros/Relevo.html",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Climate_of_Brazil.tif/lossy-page1-800px-Climate_of_Brazil.tif.jpg"
    },
    {
        titulo: "",
        link: "./Livros/Relevo.html",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Climate_of_Brazil.tif/lossy-page1-800px-Climate_of_Brazil.tif.jpg"
    },
    {
        titulo: "",
        link: "./Livros/Relevo.html",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Climate_of_Brazil.tif/lossy-page1-800px-Climate_of_Brazil.tif.jpg"
    },
    {
        titulo: "",
        link: "./Livros/Relevo.html",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Climate_of_Brazil.tif/lossy-page1-800px-Climate_of_Brazil.tif.jpg"
    },
]

adicionarElementosNaDiv(temas);


var searchBoxInput = document.getElementById("searchTxt");
searchBoxInput.addEventListener('keyup', () => {
    var temasContainer = document.getElementById("temasCountainer");
    while (temasContainer.hasChildNodes()) {
        temasContainer.removeChild(temasContainer.lastChild);
    }

    var textoDigitado = document.getElementById("searchTxt").value;
    console.log(textoDigitado)
    var temasRestantes = temas.filter(tema => {

        // console.log(tema.titulo.toLocaleLowerCase().includes(textoDigitado))
        if (tema.titulo.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())) {
            return tema;
        }
    })

    adicionarElementosNaDiv(temasRestantes);
})