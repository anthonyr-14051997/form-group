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

    /* ----------------------------------------------------- regex mail */
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    /* ----------------------------------------------------- nom vide */
    if ( nomval == '' ) {
        nom.style.border = "5px solid red";
        notnom.innerHTML = "Le champ est vide !";
        notnom.style.color = "red";
    } else
    /* ----------------------------------------------------- mail vide */
    if( mailval == '' ) {
        mail.style.border = "5px solid red";
        notmail.innerHTML = "Le champ est vide !";
        notmail.style.color = "red";
    } else
    /* --------------------------------------------------- msg val */
    if( msgval == '' ) {
        mail.style.border = "5px solid red";
        notmail.innerHTML = "Le champ est vide !";
        notmail.style.color = "red";
    } else
    /* ---------------------------------------------------- nom moins de deux caractères */
    if (nomval.length < 2) {
        nom.style.border = "5px solid red";
        notnom.innerHTML = "Exemple : Max";
        notnom.style.color = "red";
    } else
    /* --------------------------------------------------- mail incorrect */
    if (re.test(String(mailval).toLowerCase()) == false) {
        mail.style.border = "5px solid red";
        notmail.innerHTML = "Exemple : exemple@gmail.com";
        notmail.style.color = "red";
    } 
    else {

        let sendmail = document.querySelector('.send');//recuperer l'icon du button
        
        btn.textContent = "Merci !";//remplacer le texte dans le button
        /* req.responseType = 'json';
            req.open('GET', url, true); */

        btn.appendChild(sendmail);//replacer l'icon dans le button

        ajaxC(nomval , mailval,msgval  );

        return true //Envoie du formulaire

    }
    return false //refus d'envoie du formulaire
}

function ajaxC(nom,mail,msg){
    /* let nomval = nom.value;
    let mailval = mail.value;
    let msgval = msg.value; */
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/mail.php?submit=true&nom=" + nom + "&mail=" + mail + "&msg=" + msg);

    if(xhr.status === 200) {
        let response = document.querySelector("#mailValid");
        response.innerHTML = "<p>" + xhr.responseText + "</p>";
        if(xhr.responseText === "Votre mail a bien Ã©tÃ© envoyÃ© !"){
            response.style.color = "#00bcd4";
            response.style.border = "2px solid #00bcd4";
        } else if(xhr.responseText === "Votre mail n'a pas pu Ãªtre envoyÃ©") {
            response.style.color = "red";
            response.style.border = "2px solid red";
        } else {
            response.style.color = "orange";
            response.style.border = "2px solid orange";
        }
        response.style.display = "block";
    } else {
        console.log(xhr.status);
    }
    xhr.send();
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