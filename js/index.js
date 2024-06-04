// select box font
$(document).ready(function () {
  // 배너 스와이퍼
  const swiper1 = new Swiper(".swiper_banner", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,

    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 리뷰 스와이퍼
  var swiper2 = new Swiper(".swiper_review", {
    loop: true,
    slidesPerView: "auto",
    //loopedSlides: 5, noSwiping : true,
    // observer:true, observeParents:true,
    direction: getDirection(),
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    speed: 6000,
    on: {
      resize: function () {
        swiper2.changeDirection(getDirection());
      },
    },
  });

  // 리뷰 자연스럽게 움직이는 모션
  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

    return direction;
  }

  // 리뷰 마우스엔터시 멈춤 >>> 확인필요
  $(".swiper-slide").mouseenter(function () {
    swiper2.autoplay.stop();
  });
  $(".swiper-slide").mouseleave(function () {
    swiper2.autoplay.start();
  });

  if (swiper2.length > 0) {
    swiper2.mouseenter(function () {
      //마우스엔터시 멈춤
      swiper2.stop();
      console.log("slider stopped");
    });

    swiper2.mouseleave(function () {
      //마우스리브시 다시 플레이
      swiper2.autoplay.start();
      console.log("slider started again");
    });
  }

  $("#select_breed").css("color", "#aeaeae");
  $("#select_breed").change(function () {
    var current = $("#select_breed").val();
    if (current != "") {
      $("#select_breed").css("color", "#069EFC");
    } else {
      $("#select_breed").css("color", "#aeaeae");
    }
  });

  $("#select_weight").css("color", "#aeaeae");
  $("#select_weight").change(function () {
    var current = $("#select_weight").val();
    if (current != "") {
      $("#select_weight").css("color", "#069EFC");
    } else {
      $("#select_weight").css("color", "#aeaeae");
    }
  });

  $("#select_specialnote").css("color", "#aeaeae");
  $("#select_specialnote").change(function () {
    var current = $("#select_specialnote").val();
    if (current != "") {
      $("#select_specialnote").css("color", "#069EFC");
    } else {
      $("#select_specialnote").css("color", "#aeaeae");
    }
  });

  // selectbox_border
  $("#select_breed").css("border-bottom", "1px solid #aeaeae;");
  $("#select_breed").change(function () {
    var current = $("#select_breed").val();
    if (current != "") {
      $("#select_breed").css("border-bottom", "1px solid #069EFC");
    } else {
      $("#select_breed").css("border-bottom", "1px solid #aeaeae;");
    }
  });
  $("#select_weight").css("border-bottom", "1px solid #aeaeae;");
  $("#select_weight").change(function () {
    var current = $("#select_weight").val();
    if (current != "") {
      $("#select_weight").css("border-bottom", "1px solid #069EFC");
    } else {
      $("#select_weight").css("border-bottom", "1px solid #aeaeae;");
    }
  });
  $("#select_specialnote").css("border-bottom", "1px solid #aeaeae;");
  $("#select_specialnote").change(function () {
    var current = $("#select_specialnote").val();
    if (current != "") {
      $("#select_specialnote").css("border-bottom", "1px solid #069EFC");
    } else {
      $("#select_specialnote").css("border-bottom", "1px solid #aeaeae;");
    }
  });
  $(".newp_btn_wrap>div").on("click", function () {
    var i = $(this).index();

    $(".newp_btn_tab").removeClass("on");
    $(this).addClass("on");

    $(".newp_tab").removeClass("on");
    $(".newp_tab").eq(i).addClass("on");

    $(".recomm_re").click(function () {
      $("select > option[value='']").prop("selected", true);
    });
  });

  $(".recomm_re").click(function () {
    $("select > option[value='']").prop("selected", true);
  });
});
