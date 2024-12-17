document.getElementById('burgerMenu').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    let overlay = document.getElementById('overlay');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        overlay.style.display = 'block';
    }
});

document.getElementById('modalClose').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    let overlay = document.getElementById('overlay');
    menu.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', function() {
    let menu = document.getElementById('menu');
    
    menu.style.display = 'none';
    overlay.style.display = 'none';
});