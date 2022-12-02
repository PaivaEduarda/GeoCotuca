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
        link: "https://www.youtube.com/watch?v=t4R7GDjB7Fw",
        imagem: "https://i.ytimg.com/an_webp/t4R7GDjB7Fw/mqdefault_6s.webp?du=3000&sqp=CNj2hJwG&rs=AOn4CLDKj0qchQ3ANGBLXk4E2u5FoQoYXQ" 
    },
    {
        titulo: "Agropecuária",
        link: "https://www.youtube.com/watch?v=e4ABcrUWy3E",
        imagem: "https://i.ytimg.com/an_webp/e4ABcrUWy3E/mqdefault_6s.webp?du=3000&sqp=CI2XhZwG&rs=AOn4CLC3WuR-xbe40BggukXk_m3B66bU8A"
    },
    {
        titulo: "Fases do capitalismo",
        link: "https://www.youtube.com/watch?v=q10PqRRMtY0",
        imagem: "https://i.ytimg.com/an_webp/q10PqRRMtY0/mqdefault_6s.webp?du=3000&sqp=COirhZwG&rs=AOn4CLA6XYwc1nJw6Ouc7Mp7Wt5osJiZ4Q"
    },
    {
        titulo: "Urbanização",
        link: "https://www.youtube.com/watch?v=7f8CXiFp6fk",
        imagem: "https://i.ytimg.com/an_webp/7f8CXiFp6fk/mqdefault_6s.webp?du=3000&sqp=CIaihZwG&rs=AOn4CLBTAdPcKHct1EggrhcWe2WqjyWNsQ"
    },
    {
        titulo: "Indústria",
        link: "https://www.youtube.com/watch?v=KZHfrjhqwFo",
        imagem: "https://i.ytimg.com/an_webp/KZHfrjhqwFo/mqdefault_6s.webp?du=3000&sqp=CICThZwG&rs=AOn4CLDYfUzjhVpc6cN6_p3gW5T50FsRuA"
    },
    {
        titulo: "Migrações",
        link: "https://www.youtube.com/watch?v=fnDZC4VJw4M",
        imagem: "https://i.ytimg.com/an_webp/fnDZC4VJw4M/mqdefault_6s.webp?du=3000&sqp=CMy1hZwG&rs=AOn4CLAF2feAcSpfMrjO1S0Tt4G76RE7AAhttps://i.ytimg.com/an_webp/fnDZC4VJw4M/mqdefault_6s.webp?du=3000&sqp=CMy1hZwG&rs=AOn4CLAF2feAcSpfMrjO1S0Tt4G76RE7AA"
    },
    {
        titulo: "Blocos econômicos",
        link: "https://www.youtube.com/watch?v=tFGlxXZSTqY",
        imagem: "https://i.ytimg.com/an_webp/tFGlxXZSTqY/mqdefault_6s.webp?du=3000&sqp=CJSthZwG&rs=AOn4CLCVE7cLFId1fsocO_P87N1vb5PWkA"
    },
    {
        titulo: "Relevo",
        link: "https://www.youtube.com/watch?v=JJyglMSJVIE",
        imagem: "https://i.ytimg.com/an_webp/JJyglMSJVIE/mqdefault_6s.webp?du=3000&sqp=COmfhZwG&rs=AOn4CLC956p7FQoYmhAi8NdgYlc6kdV1Fg"
    },
    {
        titulo: "Climas do Brasil",
        link: "https://www.youtube.com/watch?v=D3YQ6zl3-2M",
        imagem: "https://i.ytimg.com/an_webp/D3YQ6zl3-2M/mqdefault_6s.webp?du=3000&sqp=CJ_2hJwG&rs=AOn4CLDQ-cGCwSsju4N1c0zt0CkmsMGiLw"
    },
    {
        titulo: "Biomas brasileiros",
        link: "https://www.youtube.com/watch?v=WYkUVasw-DY&list=PLgIWHtlPYF81odfkiC4wY86psk0behJb9&index=3",
        imagem: "https://i.ytimg.com/vi/c5a8yPpmyVA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWPM4wMzZbliftLYiRHAIeTO59aQ"
    },
    {
        titulo: "Intemperismo e erosão",
        link: "https://www.youtube.com/watch?v=E9oeChbKvwI&list=PLgIWHtlPYF81odfkiC4wY86psk0behJb9&index=7",
        imagem: "https://i.ytimg.com/vi/E9oeChbKvwI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBxUZw3XCs1dAk-kMDv3U27hvZgag"
    },
    {
        titulo: "Globalização",
        link: "https://www.youtube.com/watch?v=h5WjNMGztvE&list=PLgIWHtlPYF81odfkiC4wY86psk0behJb9&index=18",
        imagem: "https://i.ytimg.com/vi/h5WjNMGztvE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCkxgVAKUZmmYF4muQgUy4ZUyfkiA"
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