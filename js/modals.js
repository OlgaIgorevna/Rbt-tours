$(window).on("load", function () {

  function closeModal() {
    $(".my-modal").hide();
    $(".antyclick").hide();
    $(".wrap-body-blur").children().eq(0).unwrap(".wrap-body-blur");
  }

  $(".show-modal").on("click", function (e) {


    var id = $(this).attr("data-id");

    $("#" + id).show();

    $("body").wrapInner('<div class="wrap-body-blur"></div>');
    $('<div class="antyclick"></div>').appendTo($("body"));

    $("#" + id).appendTo($("body"));



    $(".antyclick").on("click", function (e) {
     closeModal();
    });

    $(".close-modal").on("click", function (e) {
      closeModal();
    });

  });



});
