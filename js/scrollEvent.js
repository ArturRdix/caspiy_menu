function scrollHandler() {
    let sectionH2s = document.querySelectorAll('.wrapper-name.heading h2');
    const navLinks = document.querySelectorAll('.header__nav-menu h2 a');
    const offset = 170; // Количество пикселей для коррекции

    let sections = Array.from(sectionH2s)
        .map(h2 => h2.closest('.menu-list'))
        .map((section, index, array) => ({
            section: section,
            height: index < array.length - 1 ? (array[index + 1].offsetTop - section.offsetTop) : section.offsetHeight,
        }));


    sections.forEach(function (section) {
        const top = section.section.offsetTop - offset;
        const bottom = top + section.height + offset;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            const h2 = section.section.querySelector('.wrapper-name.heading h2');
            const correspondingLink = document.querySelector('.header__nav-menu h2 a[href="#' + h2.id + '"]');
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });

    const activeNavLink = document.querySelector('.header__nav-menu h2 a.active');
    if (activeNavLink) {
        setTimeout(function () {
            activeNavLink.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
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
