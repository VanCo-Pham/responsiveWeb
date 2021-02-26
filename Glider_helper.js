
  
window.addEventListener('load',function(){
    var gliderWhy = new Glider(document.getElementById('glider-why'), {
      slidesToScroll: 1,
      slidesToShow: 1,
      draggable: true,
      dots: '#dots-why',
      arrows: {
        prev: '#glider-why-prev',
        next: '#glider-why-next'
      }
    });
  })



// new Glider(document.querySelector('.glider_product'), {

//     slidesToShow: 3,
//     draggable: true,
//     dots: '#dots_prodcut',
//     rewind: true,
//     arrows: {
//         prev : '.glider_product-prev',
//         next: '.glider_product-next'
//     }
// })