function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    menu.classList.toggle('hidden');
}

document.getElementById('menu-reponsivo').addEventListener('click', function() {
    const navMenu = document.getElementById('menu');
    navMenu.classList.toggle('active'); 
});