var checkitem = function() {
  var $this;
  $this = $("#slideshow-mudah");
  if ($("#slideshow-mudah .carousel-inner .item:first").hasClass("active")) {
    $this.children(".left").hide();
    $this.children(".right").show();
  } else if ($("#slideshow-mudah .carousel-inner .item:last").hasClass("active")) {
    $this.children(".right").hide();
    $this.children(".left").show();
  } else {
    $this.children(".carousel-control").show();
  }
};

checkitem();

$("#slideshow-mudah").on("slid.bs.carousel", "", checkitem);