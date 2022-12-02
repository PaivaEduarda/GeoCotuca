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
        link: "https://brasilescola.uol.com.br/biologia/problemas-ambientais-brasileiros.htm",
        imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/as-queimadas-afetam-diretamente-solo-causam-poluicao-ar-586bb96644b4a.jpg" 
    },
    {
        titulo: "Agropecuária",
        link: "https://brasilescola.uol.com.br/geografia/as-caracteristicas-agropecuaria.htm",
        imagem: "https://s4.static.brasilescola.uol.com.br/be/2022/04/ceifeira-trigo.jpg"
    },
    {
        titulo: "Fases do capitalismo",
        link: "https://brasilescola.uol.com.br/geografia/fases-do-capitalismo.htm",
        imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/9d3a3f959a09be9984487c3e56a39247.jpg"
    },
    {
        titulo: "Urbanização",
        link: "https://brasilescola.uol.com.br/brasil/urbanizacao.htm",
        imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/urbanizacao.jpg"
    },
    {
        titulo: "Indústria",
        link: "https://brasilescola.uol.com.br/geografia/tipos-industrias.htm",
        imagem: "https://s2.static.brasilescola.uol.com.br/be/2021/09/industria.jpg"
    },
    {
        titulo: "Migrações",
        link: "https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-migracao.htm",
        imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/fluxos-migratorios-mundiais-56a641dcf12ac.jpg"
    },
    {
        titulo: "Comércio",
        link: "https://brasilescola.uol.com.br/economia/comercio.htm",
        imagem: "https://www.fecomercio.com.br/upload/img/2016/10/10/57fbaa8fccafe-ciclistas_no_com_rcio_2.jpg"
    },
    {
        titulo: "Relevo",
        link: "https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-relevo.htmS",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ce0QLFTEq5vHSYvLjyzglRst9zZobL0zUA&usqp=CAU"
    },
    {
        titulo: "Climas do Brasil",
        link: "https://brasilescola.uol.com.br/brasil/os-climas-brasil.htm",
        imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-relevo-expressao-superficial-litosfera-terrestre-56608b81d8712.jpg"
    },
    {
        titulo: "Biomas brasileiros",
        link: "./Livros/Relevo.html",
        imagem: "https://s4.static.brasilescola.uol.com.br/be/2021/10/climas-brasil.jpgS"
    },
    {
        titulo: "Inteperismo e erosão",
        link: "./Livros/Relevo.html",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Climate_of_Brazil.tif/lossy-page1-800px-Climate_of_Brazil.tif.jpg"
    },
    {
        titulo: "Globalização",
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