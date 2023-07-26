window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    // button = document.querySelector('.promo_btn'),
    close = document.querySelector('.modal__close'),
    button = document.querySelectorAll('.promo_btn, .subheader_btn');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    button.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.overlay').classList.add('show');
        })
    })

    close.addEventListener("click", () => {
        document.querySelector('.overlay').classList.remove('show');
    })
})