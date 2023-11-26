$('.testimonial_landing_page_carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('.navbar-toggler').click(function(){
    $(".small_nav").addClass("open");
})
$('.close_sm_nav').click(function(){
    $(".small_nav").removeClass("open");
})
const scrollChangeElement = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 120) {
    scrollChangeElement.classList.add("bg");
  } else {
    scrollChangeElement.classList.remove("bg");
  }
});
$('.book_free_lesson_sm_btn').click(function(){
    $(".small_nav").removeClass("open");
})
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
$("#description").css("display","block");   