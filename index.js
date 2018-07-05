"use strict";

function windowListener() {
  $(".window").click(function(event) {
    event.stopPropagation();
    if ($(".found")) {
      $(".found").removeClass("found");
    }
    $(this)
      .next("div")
      .toggleClass("found");
  });
}
function windowListener1() {
  $(".window1").click(function(event) {
    event.stopPropagation();
    if ($(".found")) {
      $(".found").removeClass("found");
    }
    $(this)
      .next("div")
      .toggleClass("found");
  });
}

function closeModal() {
  $("html").click(function() {
    if (!$(this).closest(".found").length) {
      $(".found").removeClass("found");
    }
  });

  $(".content").click(function(e) {
    e.stopPropagation();
  });

  $(".close").click(function() {
    $(this)
      .closest(".found")
      .removeClass("found");
  });
}

$(() => {
  windowListener();
  windowListener1();
  closeModal();
});
