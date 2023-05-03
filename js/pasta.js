$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
    //offer

    $('.offer .btns .btn').click(function(e){

        $(this).addClass('active').siblings().removeClass('active')
        e.preventDefault()
        $('#' + $(this).data('click')).siblings().fadeOut(200, function(){

            $('#' + $(this).data('click')).siblings().removeClass('active')   
        })
        $('#' + $(this).data('click')).delay(200).fadeIn(200, function(){
            $('#' + $(this).data('click')).addClass('active')   
        })
    })
