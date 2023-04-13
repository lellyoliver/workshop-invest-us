const nome = document.getElementById('formName')
const whatsapp = document.getElementById('formWpp')
const email = document.getElementById('formEmail')
const city = document.getElementById('formCity')
const submit = document.getElementsByClassName('form-contact')[0]

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    const textBody = `
    <b>Nome: </b> ${nome.value}
    <br>
    <b>Whatsapp: </b> ${whatsapp.value}
    <br>
    <b>Email: </b> ${email.value}
    <br>
    <b>Cidade: </b> ${city.value}
    `

    Email.send({
        SecureToken: "c59b4ad6-bebc-492e-84a9-9a2a53e9b6c7",
        To: "investnowus@gmail.com",
        From: "investnowus@gmail.com",
        Subject: "Teste",
        Body: textBody
    }).then(
        message => alert(message)
    );
    setInterval(() => {
        window.location.href = 'https://lellyoliver.github.io/workshop-invest-us/';
    }, 2000);
});
