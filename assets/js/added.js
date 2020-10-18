
$('a[href^="#"]').click(function () {
  $('html, body').animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 700);

  return false;
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
	    $(".navbar").css("background" , "black");
	  }
	  else{
		  $(".navbar").css("background" , "linear-gradient(rgb(0,30,21), rgb(14,87,89))");  	
	  }
  })
})