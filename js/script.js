const btn = document.querySelector('button');

const nom = document.querySelector('#nom');
const mail = document.querySelector('#mail');
const msg = document.querySelector('#msg');

const notsend = document.querySelector('.notsend');


btn.addEventListener('click', send);

function send() {

    let nomval = nom.value;
    let mailval = mail.value;
    let msgval = msg.value;

    let labmail = document.querySelector('.name');
    
    if ( !nomval.replace(/\s+/,'').length ) {
        nom.style.border = "5px solid red";
        nom.style.transition = "1s ease-in";
    }
    if( !mailval.replace(/\s+/, '').length ) {
        mail.style.border = "5px solid red";
        mail.style.transition = "1s ease-in";
    }
    if( !msgval.replace(/\s+/, '').length ) {
        msg.style.border = "5px solid red";
        msg.style.transition = "1s ease-in";
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailval))
    {
        return (true)
    }
        mail.style.border = "5px solid red";
        labmail.innerHTML = 'Adresse mail non valid';
        labmail.style.color = 'red';
        return (false)
}

function validateForm()  {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;

    if(u== "") {
        alert("Please enter your Username");
        return false;
    }
    if(p == "") {
        alert("Please enter you Password");
        return false;
    }

    alert("All datas are valid!, send it to the server!")

    return true;
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