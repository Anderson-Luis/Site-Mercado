$('.slide').slick();


$('.slidesf').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
/*
$('.slidesf').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
});

/*
$('.slides').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
*/
/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.lenght) {
      slideIndex = 1
  }
  if (n < 1) {
      slideIndex = x.lenght
  } ;
  for (i = 0; i < x.lenght; i++) {
      x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
*/

/*
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.lenght) {
      slideIndex = 1
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000) // Muda imagem a cada 2 segundos;
}
*/
