function cambiarImagen() {
    let imagen = document.getElementById('menuHam');
    let overlay = document.getElementById('overlay');
    let navbarCollapse = document.getElementById('navbarSupportedContent');

    if (imagen.src.includes('menu.svg')) {
        imagen.src = './images/close.svg';
        overlay.style.display = 'block';
    } else {
        imagen.src = './images/menu.svg';
        overlay.style.display = 'none';
    }

    if (navbarCollapse.classList.contains('show')) {
        overlay.style.display = 'none';
    }
}

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('navbarSupportedContent').classList.remove('show');
    document.getElementById('menuHam').src = './images/menu.svg';
});


document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarCollapse.addEventListener('show.bs.collapse', function () {
        navbar.classList.add('fixed');
        navbarCollapse.classList.add('fixed');
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        navbar.classList.remove('fixed');
        navbarCollapse.classList.remove('fixed');
    });
});


document.querySelectorAll('.prefooter-column h4').forEach(function(header) {
    header.addEventListener('click', function() {
        const column = this.parentElement;
        const list = column.querySelector('ul');

        if (list.style.display === "block" || list.style.display === "") {
            list.style.display = "none";
        } else {
            list.style.display = "block";
        }
    });
});

