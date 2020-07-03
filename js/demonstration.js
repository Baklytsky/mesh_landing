'use strict'


// //------------- Search autocomplete -----------------------------------
//
// let searchInput = document.querySelector('.search-text'),
//     autocompleteBlock = document.querySelector('.autocomplete-list');
//
// function showAutocompleteBlock() {
//     searchInput.addEventListener('click', () => {
//         autocompleteBlock.classList.toggle('autocomplete-list-active')
//     })
// }
// showAutocompleteBlock();

//------------- Pop-up Sign-in -----------------------------------

let cookie = document.querySelector('.cookie'),
    cookieAlert = document.querySelector('.cookie-alert'),
    learnMoreCookie = document.querySelector('.cookie-learn-more'),
    acceptCookie = document.querySelector('.cookie-btn'),
    gotIt = document.querySelector('.got-it'),
    closeX = document.querySelectorAll('.close-x');

//------------- CLOSE Pop-up -----------------------------------

closeX.forEach(i => i.addEventListener('click', closePopUp));
function closePopUp() {
    cookie.style.display = 'none';
}

//------------- Pop-up Cookie -----------------------------------

function showCookieAlert() {
    setTimeout(function(){
        cookieAlert.style.display = 'flex';
    },2000);
}
showCookieAlert();

learnMoreCookie.addEventListener('click', showCookiePopUp);
acceptCookie.addEventListener('click', closeCookieAlert);
gotIt.addEventListener('click', closeCookiePopUp);

function showCookiePopUp() {
    cookie.style.display = 'block';
}

function closeCookieAlert() {
    cookieAlert.style.display = 'none';
}

function closeCookiePopUp() {
    cookie.style.display = 'none';
}