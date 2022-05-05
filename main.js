function onScroll(){
    menu.classList.add('scroll');
    if (scrollY == 0){
        menu.classList.remove('scroll');
    } else{
        return 0;
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}