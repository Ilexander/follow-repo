/**
 *
 */
$(document).ready(function () {
  /** Constant div card */
  const DIV_CARD = "div.card";

  /** Initialize tooltips */
  $('[data-toggle="tooltip"]').tooltip();

  /** Initialize popovers */
  $('[data-toggle="popover"]').popover({
    html: true,
  });

  /** Function for remove card */
  $('[data-toggle="card-remove"]').on("click", function (e) {
    let $card = $(this).closest(DIV_CARD);

    $card.remove();

    e.preventDefault();
    return false;
  });

  /** Function for collapse card */
  $('[data-toggle="card-collapse"]').on("click", function (e) {
    let $card = $(this).closest(DIV_CARD);
    e.preventDefault();
    return false;
  });

  /** Function for fullscreen card */
  $('[data-toggle="card-fullscreen"]').on("click", function (e) {
    let $card = $(this).closest(DIV_CARD);
    e.preventDefault();
    return false;
  });

  /**  */
  if ($(".chart-circle").length) {
    require(["circle-progress"], function () {
      $(".chart-circle").each(function () {
        let $this = $(this);

        $this.circleProgress({
          fill: {
            color:
              tabler.colors[$this.attr("data-color")] || tabler.colors.blue,
          },
          size: $this.height(),
          startAngle: (-Math.PI / 4) * 2,
          emptyFill: "#F4F4F4",
          lineCap: "round",
        });
      });
    });
  }
});

$(".custom-control-input").change(function (e, w) {
  if ($(this).is(":checked") == true) {
    $(".form-actions button").prop("disabled", false);
  } else {
    $(".form-actions button").prop("disabled", true);
  }
});

if ($(this).is(":checked") == false) {
  $(".form-actions button").prop("disabled", true);
}