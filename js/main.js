
$('.virus-card-section').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
let years  = document.querySelector('.years')
let pataints  = document.querySelector('.pataints')
let recover  = document.querySelector('.recover')
let death  = document.querySelector('.death')


let val = 1

setInterval(function() {
  if(years.innerText<2000){
    years.innerText =parseInt(years.innerText)+val*2
   
  }
  if(pataints.innerText<1000){
    pataints.innerText = parseInt(pataints.innerText)+val*1
  }
  if(recover.innerText<3000){
    recover.innerText =  parseInt(recover.innerText)+val*3
  }
  if(death.innerText<5000){
    death.innerText =  parseInt(death.innerText)+val*5
  }
}, 5);