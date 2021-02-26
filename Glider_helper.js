window.addEventListener('load',function(){
    var gliderWhy = new Glider(document.getElementById('glider-why'), {
      slidesToScroll: 2,
      slidesToShow: 2,
      draggable: true,
      dots: '#dots-why',
      arrows: {
        prev: '#glider-why-prev',
        next: '#glider-why-next'
      }
    });
  })
