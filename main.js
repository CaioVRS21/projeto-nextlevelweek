function onScroll(){
    menu.classList.add('scroll');
    if (scrollY == 0){
        menu.classList.remove('scroll');
    } else{
        return 0;
    }
}
