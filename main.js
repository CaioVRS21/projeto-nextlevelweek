window.addEventListener('scroll', onScroll);

onScroll()
function onScroll() {
    ShowNavOnScroll();
    ShowBackToTopButtonOnScroll();
  }

  function ShowNavOnScroll(){
    if (scrollY > 0) {
      navigation.classList.add('scroll');
    } else {
      navigation.classList.remove('scroll');
    }
  }

  function ShowBackToTopButtonOnScroll(){
    if (scrollY > 1100) {
      BackToTopButton.classList.add('show');
    } else {
      BackToTopButton.classList.remove('show');
    }
  }
  
  function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }