var app;

const init = () => {
    try {
        app = document.getElementById("app");
    } catch (e) {
        console.error(e);
    }
}

const toggleMobileMenu = (state, nav) => {
    state = !state;
    if (state && nav.className == "main-nav") {
        nav.className += " mobile";            
    } else {
        nav.className = "main-nav";
    }
    return state;
};

(() => {
    init();        
    const btnMobileMenu = document.getElementById("btn-mobile-menu");
    const nav = document.getElementById("main-nav");

    let isMobileMenuOn = false;

    btnMobileMenu.addEventListener("click", (e) => {
        isMobileMenuOn = toggleMobileMenu(isMobileMenuOn, nav);
        console.log(isMobileMenuOn);
    });

    console.log(btnMobileMenu);
})();