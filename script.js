document.addEventListener("DOMContentLoaded", function () {
    const item = document.getElementById("itemCatalogo");
    const menu = document.getElementById("catalogoToggle");
    const icone = document.getElementById("iconeVelas");

    const aside = document.querySelector("aside");
    const botaoAside = document.getElementById("botaoAside");
    const botaoFecharAside = document.getElementById("botaoFecharAside");

    item.addEventListener("click", function (e) {
        e.preventDefault();

        if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
            menu.style.maxHeight = "0px";
            icone.classList.remove("ativo");
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
            icone.classList.add("ativo");
        }
    });

    botaoAside.addEventListener("click", function () {
        aside.classList.add("ativo");
    });

    botaoFecharAside.addEventListener("click", function () {
        aside.classList.remove("ativo");
    });
});

function scrollCarousel(direction) {
    const container = document.getElementById('carrossel');
    const cardWidth = container.querySelector('.cardProduto').offsetWidth + 20;

    container.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
    });
}