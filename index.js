"use strict";

function windowListener() {
  $(".window").click(function(event) {
    event.stopPropagation();
    if ($(".modal")) {
      $(".modal").removeClass("modal");
    }
    $(this)
      .next("div")
      .toggleClass("modal");
  });
}
function window1Listener() {
  $(".window1").click(function(event) {
    event.stopPropagation();
    if ($(".modal")) {
      $(".modal").removeClass("modal");
    }
    $(this)
      .next("div")
      .toggleClass("modal");
  });
}

function closeModal() {
  $("html").click(function() {
    if (!$(this).closest(".modal").length) {
      $(".modal").removeClass("modal");
    }
  });

  $(".content").click(function(e) {
    e.stopPropagation();
  });

  $(".close").click(function() {
    $(this)
      .closest(".modal")
      .removeClass("modal");
  });
}

$(() => {
  windowListener();
  window1Listener();
  closeModal();
});
