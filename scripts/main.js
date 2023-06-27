const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
        `;
    },
    enabledScroll() {
        document.body.style.cssText = '';
    }
}

// ПОИСК
const search_ico = document.querySelector(".buttons-search");
const search_input = document.querySelector(".search-input")


search_ico.addEventListener('click', function(event) {
    if (search_input.value) {
        console.log('hello');
        search_input.value = '';
    } else {
        search_input.classList.add('search-input_active');
        search_input.focus();
    }
    
});

search_input.addEventListener('focusout', function(e) {
    search_input.classList.remove('search-input_active');
});

// МЕНЮ-БУРГЕР

const menu_btn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');
const menu_items = document.querySelectorAll('.menu-nav-item');

menu_btn.addEventListener('click', function(e) {

    if (menu.classList.contains('menu__active')) {
        menu.classList.remove('menu__active');
        menu_btn.classList.remove('nav-btn-active');
        scrollController.enabledScroll();
    } else {
        menu.classList.add('menu__active');
        menu_btn.classList.add('nav-btn-active');
        scrollController.disabledScroll();
    }
    
    
});

menu_items.forEach((item) => {
    item.addEventListener('click', function(e) {
        menu.classList.remove('menu__active');
        menu_btn.classList.remove('nav-btn-active');
        scrollController.enabledScroll();
    });
});


// Вход/Регистрация
const logIn_btn = document.querySelector('.header__login-login');
const modals = document.querySelector('.modals');
const modal__login = document.querySelector('.modals__logIn');
const exit_btn = document.querySelector('.exit-btn');
const logIn_mail = document.getElementById('logIn_mail');
const logIn_pass = document.getElementById('logIn_pass');

logIn_btn.addEventListener('click', function(e) {
    modals.classList.add('modal_active');
    modal__login.classList.add('modal_active');
    logIn_mail.focus();
    document.body.classList.add('body_hidden');
    scrollController.disabledScroll();
});

exit_btn.addEventListener('click', function(e) {
    modals.classList.remove('modal_active');
    modal__login.classList.remove('modal_active');
    logIn_mail.value = '';
    logIn_pass.value = '';
    document.body.classList.remove('body_hidden');
    scrollController.enabledScroll();
})