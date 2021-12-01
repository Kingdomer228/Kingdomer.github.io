/* Кнопка "Вверх" */

const debounce = (fn) => {
    let frame;
  
    return (...params) => {     
      if (frame) cancelAnimationFrame(frame);
  
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    }
};
  
const storeScroll = () => { document.documentElement.dataset.scroll = window.scrollY; }

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

let scrollToTopBtn = document.getElementById("scroller");
scrollToTopBtn.addEventListener('click', () => {
    let a = setInterval(()=>{
        window.scrollTo(0, window.scrollY - 5);
        if(window.scrollY == 0) clearInterval(a);
    }, 1);

});

storeScroll();