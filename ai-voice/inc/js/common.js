$(function () {
  // tab
  let tabBtn = $(".ui-tab-btn");

  function tabUI() {
    let _this = $(this);
    let _cnt = $(this).parents(".tab-wrap").find(".contents");
    let _idx = $(this).index();

    if (
      _this.parents("div").hasClass("contents") &&
      !_this.parents("div").hasClass("content")
    ) {
      console.log("bbb");
      if (!_this.hasClass("active")) {
        _this.siblings().removeClass("active");
        _this.addClass("active");
        _this.parents(".contents").find(".content").removeClass("on");
        _this.parents(".contents").find(".content").eq(_idx).addClass("on");
      }
    } else if (_this.parents("div").hasClass("content")) {
      console.log("aaa");
      if (!_this.hasClass("active")) {
        _this.siblings().removeClass("active");
        _this.addClass("active");

        _this
          .parents(".tab-wrap")
          .eq(0)
          .find(".content-last")
          .removeClass("on");
        _this
          .parents(".tab-wrap")
          .eq(0)
          .find(".content-last")
          .eq(_idx)
          .addClass("on");
      }
    } else if (_this.parents("ul").hasClass("ui-tab-type02")) {
      let _idx = $(this).data("idx");

      if (!_this.hasClass("active")) {
        _this.parents("li").siblings("li").find(tabBtn).removeClass("active");
        _this.siblings().removeClass("active");
        _this.addClass("active");
        _cnt.removeClass("on");
        _cnt.eq(_idx).addClass("on");
      }
    } else {
      if (!_this.hasClass("active")) {
        _this.siblings().removeClass("active");
        _this.addClass("active");
        _cnt.removeClass("on");
        _cnt.eq(_idx).addClass("on");
      }
    }
  }

  tabBtn.on("click", tabUI);

  // select
  let selectBtn = $(".select-btn");
  let selectCnt = $(".open-select-list li a");

  function selectUI() {
    let _this = $(this);
    let _cnt = $(this).next();

    if (!_this.hasClass("active")) {
      _this.addClass("active");
      _cnt.stop().slideDown("fast");
    } else {
      _cnt.stop().slideUp("fast", function () {
        _this.removeClass("active");
      });
    }

    if (_this.parents("ul").hasClass("open-select-list")) {
      selectCnt.removeClass("active");
      _this.addClass("active");
    }
  }

  selectBtn.on("click", selectUI);
  selectCnt.on("click", selectUI);

  //버튼 클릭시 open-select-list 열기

  let toggleBtn = $(".btn-toggle");

  $(function () {
    toggleBtn.on("click", function () {
      let _this = $(this);

      console.log(this);

      if (!_this.hasClass("active")) {
        toggleBtn.removeClass("active");
        _this.addClass("active");
      } else {
        _this.removeClass("active");
      }
    });
  });

  //sound버튼 클릭시 open-list 열기
  // let soundBtn = $(".btn-sound");

  // $(function () {
  //   soundBtn.on("click", function () {
  //     let _this = $(this);

  //     if (!_this.hasClass("active")) {
  //       soundBtn.removeClass("active");
  //       _this.addClass("active");
  //     } else {
  //       _this.removeClass("active");
  //     }
  //   });

  //   $(".btn-sound .open-list li").on("click", function (e) {
  //     e.stopPropagation();
  //   });
  // });

  let soundBtn = $(".btn-sound");

  $(function () {
    soundBtn.on("click", function (e) {
      e.stopPropagation(); // 이벤트 전파를 막기 위해 현재 요소에서만 클릭 이벤트 처리

      let _this = $(this);

      if (!_this.hasClass("active")) {
        soundBtn.removeClass("active"); // 모든 .btn-sound 요소에서 active 클래스 제거
        _this.addClass("active"); // 현재 클릭한 .btn-sound 요소에 active 클래스 추가
      } else {
        _this.removeClass("active"); // 이미 active 클래스가 있는 경우 제거
      }
    });

    $(".btn-sound .open-list li").on("click", function (e) {
      e.stopPropagation(); // 이벤트 전파를 막기 위해 현재 요소에서만 클릭 이벤트 처리
    });
  });

  //input focus 할 때 placeholder 지우기
  $(document).ready(function () {
    $(".input-search")
      .focus(function () {
        if ($(this).val() === "") {
          $(this).siblings(".placeholder").css("display", "none");
        }
      })
      .blur(function () {
        if ($(this).val() === "") {
          $(this).siblings(".placeholder").css("display", "block");
        }
      })
      .on("input", function () {
        if ($(this).val() === "") {
          $(this).siblings(".placeholder").css("display", "block");
        } else {
          $(this).siblings(".placeholder").css("display", "none");
        }
      });
  });



  // 문장 강세 평가
  $(function () {
    $('.half-circle').each(function () {
      let _this = $(this);
      let halfWidth = $(this).data('width');

      _this.css({
        'width': halfWidth + '%',
        'height': (halfWidth / 2) + '%'
      });
    });
  });

  // 리듬 휴지
  $(function () {
    $(".rhythm .bar").each(function () {
      let _this = $(this);
      let barWidth = $(this).data("width");

      _this.css({
        width: barWidth + "px",
      });
    });
  });

  //리듬 휴지 bar클릭시 active
  // let bar = $(".rhythm");

  // $(function () {
  //   bar.on("click", function () {
  //     let _this = $(this);

  //     if (!_this.hasClass("active")) {
  //       bar.removeClass("active");
  //       _this.addClass("active");
  //     } else {
  //       _this.removeClass("active");
  //     }
  //   });

  //   $(".rhythm").on("click", function (e) {
  //     e.stopPropagation();
  //   });
  // });


});