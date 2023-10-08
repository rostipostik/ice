$(document).ready(function () {
    $(".product-item").click(function(){
        $(this).addClass('active')
            .siblings()
            .removeClass('active')
    })
});