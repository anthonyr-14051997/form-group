const btn = document.querySelector('button');

const nom = document.querySelector('#nom');
const mail = document.querySelector('#mail');
const msg = document.querySelector('#msg');

const notsend = document.querySelector('.notsend');


btn.addEventListener('click', send);

function send() {

    let nomval = nom.value;
    let mailval = mail.value;
    
    const notnom = document.querySelector('.notnom');
    const notmail = document.querySelector('.notmail');
    
    nom.style.border = "5px";
    mail.style.border = "5px";
    notnom.innerHTML = "";
    notmail.innerHTML = "";
    
    if ( nomval == '' ) {
        nom.style.border = "5px solid red";
        notnom.innerHTML = "Le champs est vide !";
        notnom.style.color = "red";
    } else
    if( mailval == '' ) {
        mail.style.border = "5px solid red";
        notmail.innerHTML = "Le champs est vide !";
        notmail.style.color = "red";
    } else
    if (nomval.length < 3) {
        nom.style.border = "5px solid red";
        notnom.innerHTML = "Exemple : Max";
        notnom.style.color = "red";
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(mailval).toLowerCase()) == false) {
        mail.style.border = "5px solid red";
        notmail.innerHTML = "Exemple : exemple@gmail.com";
        notmail.style.color = "red";
    } else {

        let sendmail = document.querySelector('.send').val;
        btn.textContent = "Merci !" + sendmail;

        btn.appendChild(sendmail);

        sendmail.animate([
            // keyframes
            { left: '20%' },
            { right: '100%' }
          ], {
            // timing options
            duration: 1000,
            iterations: 1
          });
    }
}

/*

var myForm = document.forms["myForm"];

msg.style.transition = "1s ease-in";

if(window.innerWidth>680) { 

function isEmpty(){
             var str = document.forms['myForm'].firstName.value;
             if( !str.replace(/\s+/, '').length ) {
                  alert( "Le champ Name est vide!" );
                  return false;
             }
}

*/