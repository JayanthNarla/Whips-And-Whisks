// <!-- nav change scroll script start -->
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 580);
});
// <!-- nav change scroll script end -->

// <!-- counter Script start -->
var statSection = $(".stats"),
  stats = $(".stats_count");
statSection.waypoint({
  handler: function (direction) {
    if (direction === "down") {
      stats.each(function () {
        var $this = $(this);
        $({
          Counter: 0
        }).animate({
          Counter: $this.text()
        }, {
          duration: 3000,
          easing: "swing",
          step: function (curValue) {
            $this.text(Math.ceil(curValue));
          }
        });
      });
    }
    // trigger once only
    this.destroy();
  },
  offset: "85%"
});
// <!-- counter Script end -->

// <!-- Back to Top Script starts -->
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 180
  ) {
    document.getElementById("btn-top").style.display = "block";
  } else {
    document.getElementById("btn-top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// <!-- Back to Top Script ends -->

// <!-- Menu onclick start -->
$(document).ready(function () {
  $("#brownies").on("click", function () {
    $("#menu-list .page:not('.hide')")
      .stop()
      .fadeOut("medium", function () {
        $(this).addClass("hide");
        $("#brownies-content")
          .fadeIn("slow")
          .removeClass("hide");
      });
  });
  $("#cakes").on("click", function () {
    $("#menu-list .page:not('.hide')")
      .stop()
      .fadeOut("medium", function () {
        $(this).addClass("hide");
        $("#cakes-content")
          .fadeIn("slow")
          .removeClass("hide");
      });
  });
  $("#cupcakes").on("click", function () {
    $("#menu-list .page:not('.hide')")
      .stop()
      .fadeOut("medium", function () {
        $(this).addClass("hide");
        $("#cupcakes-content")
          .fadeIn("slow")
          .removeClass("hide");
      });
  });
  $("#macroons").on("click", function () {
    $("#menu-list .page:not('.hide')")
      .stop()
      .fadeOut("medium", function () {
        $(this).addClass("hide");
        $("#macroons-content")
          .fadeIn("slow")
          .removeClass("hide");
      });
  });
});
// <!-- Menu onclick end -->