function goBack() {
  window.history.back();
}

let contacts = [];
const addContact = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let contact = {
        id: Date.now(),
        reason: document.getElementById('nativeSelect').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('textarea').value,
        urgent: document.getElementById('flip').value,

    }
    contacts.push(contact);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {contacts} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(contacts, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyContactList', JSON.stringify(contacts) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addContact);
});

let favorites = [];
const addFavorite = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let favorite = {
        label: "Your entry",
        id: Date.now(),
        name: document.getElementById('favorite').value,

    }
    favorites.push(favorite);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {favorites} );
    let pre = document.querySelector('#msgf pre');
    pre.textContent = '\n' + JSON.stringify(favorites, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyFavoriteList', JSON.stringify(favorites) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn2').addEventListener('click', addFavorite);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
