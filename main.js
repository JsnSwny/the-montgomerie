// Arrow Scroll Function

function scrollDown() {
    $("html, body").animate({
        scrollTop: $(".food-container").offset().top - 100
    }, 1000);
}