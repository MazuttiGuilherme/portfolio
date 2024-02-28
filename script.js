const header = document.querySelector('nav');
header.addEventListener('mouseover', function () {
    header.style.backgroundColor = 'gray'
});
header.addEventListener('mouseout', function () {
    header.style.backgroundColor = 'transparent'
});

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
