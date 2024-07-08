const slideWrapper = document.getElementById('sidebarInner'); 
const forNewSwiper = document.getElementById('postSidebar'); 
const slides = document.getElementsByClassName('sidebar-content__item')
const slidesArray = Array.from(slides)
const forPagination = document.getElementById('forPagination'); 


document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 750){
      addSwiper()
    }
  })



  $(window).resize(function() {
    const width = window.innerWidth
    if (width < 750){
      addSwiper()
    }
    else{
      slidesArray.forEach(el => {
        el.classList.remove('swiper-slide')
      })
      slideWrapper.classList.remove('swiper-wrapper')
      forNewSwiper.classList.remove('post__swiper')
    //   forPagination.classList.remove("swiper-pagination", "swiper-pagination-clickable", "swiper-pagination-bullets", "swiper-pagination-horizontal") 
    }
  })
function addSwiper(){
  slidesArray.forEach(el => {
    el.classList.add('swiper-slide')
  })
  slideWrapper.classList.add('swiper-wrapper')
  forNewSwiper.classList.add('post__swiper')
//   forPagination.classList.add("swiper-pagination", "swiper-pagination-clickable", "swiper-pagination-bullets", "swiper-pagination-horizontal") 
  const swiper = new Swiper(".post__swiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    slidesPerGroup: 1,
    speed: 500,
    effect: 'slide',
        navigation: {
        nextEl: ".swiper-arr-next",
        prevEl: ".swiper-arr-prev",
      },
      breakpoints: {
        320: {
            pagination: {
                el: ".swiper-pagination",
                dots: true,
                clickable: true,
              },
        },

  }});
}