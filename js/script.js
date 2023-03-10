$(document).ready(function(){
    $('.result_example').slick({
        speed: 700,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow_right.png"></button>'
      });
  });
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.data_1, .data_2');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  
