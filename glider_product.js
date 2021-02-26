
window.addEventListener('load',function(){
    var gliderProduct = new Glider(document.getElementById('glider-product'), {
      slidesToShow: 1,
      rewind: true,
      draggable: true,
      dots: '#dots-product',
      arrows: {
        prev: '#glider-product-prev',
        next: '#glider-product-next'
      }
      , responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5,

          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        }
      ]
    });
  });
