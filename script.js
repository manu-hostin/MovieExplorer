async function cardsPrincipais () {
    try {
        const URL = await fetch ("https://ghibliapi.vercel.app/films");
        const dados = await URL.json();

        const cards = document.getElementById("cards-destaque");
        cards.innerHTML = "";

        const primeirosFilmes = dados.slice(0, 6);
        primeirosFilmes.forEach(elemento => {
            
            cards.innerHTML += `
            <div class="card">
                <img src="${elemento.image}" alt="Nome do Filme">
                <h3>${elemento.title}</h3>
                <p>${elemento.description}</p>
                <a href="detail.html?id=${elemento.id}">Ver Detalhes</a>
            </div>
            `
        });
       

    } catch (error) {
        console.log(error)
    }  
}
cardsPrincipais()

async function catalogoFilmes () {
    try {
        const URL = await fetch ("https://ghibliapi.vercel.app/films");
        const dados = await URL.json();

        const cards = document.getElementById("cards-catalogo");
        cards.innerHTML = ""

        dados.forEach(elemento => {
            cards.innerHTML += `
                <div class="card">
                    <img src="${elemento.image}" alt="Nome do Filme">
                    <h3>${elemento.title}</h3>
                    <p>${elemento.description}</p>
                    <a href="detail.html?id=${elemento.id}">Ver Detalhes</a>
                </div>
            `
        })

    } catch (error) {
        console.log(error)
    }
}
catalogoFilmes()

async function mostrarDetalhes () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id"); // ex: ?id=2baf70d1-4f5c-42a9-9f0b-3c6c9a5e6a0b

    if (!id) return;
    try {
        const URL = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
        const dados = await URL.json();

        const detalhes = document.getElementById("detalhe-filme")
        detalhes.innerHTML = "";

        detalhes.innerHTML = `
            <div class="detalhes-filme">
                <img src="${dados.image}" alt="Meu Filme Favorito">
                <h2>${dados.title}</h2>
                <p>${dados.description}</p>
                <p><strong>Diretor:</strong>${dados.director}</p>
                <p><strong>Ano:</strong>${dados.release_date}</p>
                <a href="catalog.html">Voltar ao Catálogo</a>
            </div>
        `

    } catch (error) {
        console.log(error)
    }
}
mostrarDetalhes()

const botaoTema = document.getElementById("theme-toggle");
const html = document.documentElement; // pega a tag <html>

botaoTema.onclick = () => {
    if (html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
    }
};