function hamburguerMenu() {
    const btnHamburguer = document.getElementById('btn-hamburguer');
    const navLinks = document.getElementById('header_links');

    btnHamburguer.addEventListener('click', () => {
        navLinks.classList.toggle('ativo');
    });
}
hamburguerMenu()
