$(document).ready(function () {
  var isAnnouncement = localStorage.getItem('isAnnouncement');
  if(isAnnouncement != "yes") {
    $(".sqs-announcement-bar-text").removeClass("hide");
  }
  $(".side_bar_button").click(function () {
    $(this).toggleClass("is_active");
    $(this).next().slideToggle();
  });
  $("#BtnMobileMenu").click(function() {
    $(".mobile-nav-wrapper").addClass("is--active");
  });
  $(".mobile-menu-close").click(function() {
    $(".mobile-nav-wrapper").removeClass("is--active");
  });
  // Zoom plugin
  // $('.ik-product-zoom-image').imageZoom();
  $('.ik-image-zoom').each(function(){
		$(this).imageZoom();
	});
  // Announcement Bar
  $(".sqs-announcement-bar-close").click(function() {
    localStorage.setItem('isAnnouncement', "yes");
    $(".sqs-announcement-bar-text").addClass("hide");
  });
})