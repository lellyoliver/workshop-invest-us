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
    `;
    
    const arr = ["vinicius.rotadolucro@gmail.com", "claudioeusebio@hotmail.com"];
    arr.forEach(element => {

        Email.send({
            SecureToken: "c59b4ad6-bebc-492e-84a9-9a2a53e9b6c7",
            To: element,
            From: "investnowus@gmail.com",
            Subject: `Leads Workshop Invest U.S. - ${nome.value}`,
            Body: textBody
        }).then(
             window.location.href = 'https://workshop.damaterra.com.br/obrigado.html';
        );
//         setInterval(() => {
           
//         }, 1500);
    });

});
