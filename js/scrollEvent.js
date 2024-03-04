function scrollHandler() {
    const sections = document.querySelectorAll('.menu-list');//wrapper-name.heading h2
    const navLinks = document.querySelectorAll('.header__nav-menu h2 a');
    const offset = 20; // Количество пикселей для коррекции

    sections.forEach(function (section) {
        const top = section.offsetTop - offset;
        const bottom = top + section.offsetHeight + offset;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            const correspondingLink = document.querySelector('.header__nav-menu h2 a[href="#' + section.id + '"]');
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });

    const activeNavLink = document.querySelector('.header__nav-menu h2 a.active');
    if (activeNavLink) {
        setTimeout(function() {
            activeNavLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }, 100); 
    }
    
}

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetElementTop = targetElement.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetElementTop - 110,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('scroll', scrollHandler);
