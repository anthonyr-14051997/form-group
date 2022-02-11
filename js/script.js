const btn = document.querySelector('button');// recuperation du bouton
/* ------------------------------------------------------ recuperation des trois inputs */
const nom = document.querySelector('#nom');
const mail = document.querySelector('#mail');
const msg = document.querySelector('#msg');
/* -------------------------------------------------------- recuperation du formulaire entier */
const notsend = document.querySelector('.notsend');

function send() {

    /* --------------------------------------------------- récuperation des valeurs des input */
    let nomval = nom.value;
    let mailval = mail.value;
    let msgval = msg.value;
    
    /* --------------------------------------------------- phrases d'erreur */
    const notnom = document.querySelector('.notnom');
    const notmail = document.querySelector('.notmail');
    
    /* ---------------------------------------------------- reset */
    nom.style.border = "5px solid rgba(255, 255, 255, 0)";
    mail.style.border = "5px solid rgba(255, 255, 255, 0)";
    notnom.innerHTML = "";
    notmail.innerHTML = "";
    
    /* ----------------------------------------------------- nom vide */
    if ( nomval == '' ) {
        nom.style.border = "5px solid red";
        notnom.innerHTML = "Le champs est vide !";
        notnom.style.color = "red";
    } else
    /* ----------------------------------------------------- mail vide */
    if( mailval == '' ) {
        mail.style.border = "5px solid red";
        notmail.innerHTML = "Le champs est vide !";
        notmail.style.color = "red";
    } else
    /* ---------------------------------------------------- nom moins de deux caractères */
    if (nomval.length < 2) {
        nom.style.border = "5px solid red";
        notnom.innerHTML = "Exemple : Max";
        notnom.style.color = "red";
    }
    /* --------------------------------------------------- mail incorrect */
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(mailval).toLowerCase()) == false) {
        mail.style.border = "5px solid red";
        notmail.innerHTML = "Exemple : exemple@gmail.com";
        notmail.style.color = "red";
    } 
    else {

        let sendmail = document.querySelector('.send');//recuperer l'icon du button
        
        btn.textContent = "Merci !";//remplacer le texte dans le button

        btn.appendChild(sendmail);//replacer l'icon dans le button

        return true //Envoie du formulaire

    }
    return false //refus d'envoie du formulaire
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