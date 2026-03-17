Tutorial — Estrutura HTML + CSS (Projeto Alvaluz)

Este documento explica a estrutura e estilização do projeto Alvaluz, detalhando cada parte do HTML e CSS.

HTML — Estrutura da Página
Cabeçalho (<header>)

O header é dividido em duas seções principais:

1. Navegação principal (#headerNav)

Responsável por exibir:

Ícone de menu (hambúrguer)

Logo da empresa

Campo de busca

Ícones de carrinho e usuário

Exemplo:

<section id="headerNav">

Campo de busca:

<input type="search" placeholder="Buscar Produtos">
2. Links principais (#headerLinks)

Contém os links de navegação:

Home

Catálogo

Contato

<section id="headerLinks">
Menu lateral (<aside>)

Estrutura pensada para navegação lateral (principalmente mobile).

Contém:

Cabeçalho com botão de fechar

Lista de links

Submenu de catálogo

<section id="catalogoToggle">

O submenu pode futuramente ser controlado com JavaScript.

Seções principais

Espaços reservados para conteúdo:

<section id="banner"></section>
<section id="categorias"></section>
<section id="carrosel"></section>
<section id="sobre"></section>

Função de cada seção:

Banner: destaque principal

Categorias: organização de produtos

Carrossel: produtos em destaque

Sobre: informações da empresa

Rodapé (<footer>)

Ainda não implementado. Pode conter:

Informações da empresa

Contato

Redes sociais

CSS — Estilização
Reset global
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

Remove estilos padrão do navegador.

Layout do Header
#headerNav
#headerNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

Utiliza Flexbox para alinhar os elementos.

Fundo com gradiente:

background: radial-gradient(circle, rgba(187,216,237,1) 0%, rgba(131,205,235,1) 100%);
#headerLinks
#headerLinks {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

Centraliza os links com espaçamento entre eles.

Campo de busca
input {
    width: 31rem;
    height: 1.5rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
}
input:focus {
    outline: none;
}

Remove o contorno ao clicar.

Links
.headerLink {
    text-decoration: none;
    color: #222;
}

Sem sublinhado.

Hover:

.headerLink:hover {
    color: #fff;
    transition: 0.1s;
}
Imagens
Logo
#logo {
    width: 5%;
}
Ícones
.icon {
    width: 1.4rem;
    padding: 0.2rem;
}
Melhorias sugeridas
Responsividade
@media (max-width: 768px) {
    input {
        width: 100%;
    }
}
Interatividade

Adicionar JavaScript para:

Abrir/fechar menu lateral

Controlar submenu

Carrossel

Implementar com:

Biblioteca (ex: Swiper.js)

Ou JavaScript puro

Organização do CSS

Separar por seções:

/* HEADER */
/* ASIDE */
/* MAIN */
/* FOOTER */
