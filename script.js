/*Função responsavél por abrir o menu hamburger*/
function tooglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); /*método toogle (alterne) entre show e hide*/
    icon.classList.toggle("open"); /* open é uma classe na propria função*/
}

// Função para abrir os links em uma nova janela 
function openInNewTab(url) {
    window.open(url, '_blank');
}