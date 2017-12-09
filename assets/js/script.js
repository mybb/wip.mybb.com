$(function() {
    $(".card__detail__link").powerTip({
        placement: "s",
        mouseOnToPopup: true
    })

    $(".menu-button").click(function () {
        $(".main-menu").removeClass("main-menu--mobile-hide").addClass("main-menu--mobile-show");
        $(".menu-button").addClass("menu-button--hide");
        $(".menu-close-button").removeClass("menu-close-button--hide");
    });

    $(".menu-close-button").click(function () {
        $(".main-menu").removeClass("main-menu--mobile-show").addClass("main-menu--mobile-hide");
        $(".menu-button").removeClass("menu-button--hide");
        $(".menu-close-button").addClass("menu-close-button--hide");
    });
});
