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

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var emailContent = "Nome: " + name + "\n" +
                       "Email: " + email + "\n" +
                       "Mensagem: " + message;

    window.location.href = "mailto:mazuttimail@gmail.com?subject=Contato%20do%20Site&body=" + emailContent;
    alert("O e-mail foi enviado com sucesso!");
}