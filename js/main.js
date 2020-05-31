$(function(){

    $('.logo-link, .menu-link, .home-link').each(function(index,element){
        // console.log(index,element);
        $(element).click(function(){
            const id = $(this).attr('href');
            // console.log(id);
            const top = $(id).offset().top;
            // console.log(top);
            $('html').animate({
                scrollTop: top
            }, 1000)
        })
    })

})