$(document).ready( function () {

  //$('.sobre-container').fadeOut();

  $(window).scroll(function(){
    var dist = $(window).scrollTop();
    var posItem = $(".intro h1").offset().top;
    console.log(dist);
    console.log(posItem);
    if(dist > posItem){
      console.log("foi moço");
      $(".sobre-container").fadeIn();
    }else{
      console.log("ta n moço");
      $(".sobre-container").fadeOut();
    }
  });
/*


	$(".back-to-top").click( function() {
		$("html body").animate({scrollTop: 0}, 200);

	});

	$(window).scroll( function() {
		var dist = $(window).scrollTop();
    var item = $(".sobre-container").offset().top
		if(dist > item){
			$(".sobre-container").fadeIn();
		}else{
			$(".sobre-container").fadeOut();
		}
	});
  */
});


/*$(document).ready( function () {
  alert("gg");
  var $sobre = $(".sobre");
  var $produtos = $(".produtos");
  $sobre.fadeOut();
  $produtos.fadeOut();

  function animeScroll(){
    var documentTop = $(document).scrollTop();

  }

  $sobre.each(function(){
    var documentTop = $(document).scrollTop();
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop){
      $(this).fadeIn();
    }else{
      $(this).fadeOut();
    }
  });


    //$('.back-to-top').fadeOut();
});
*/
