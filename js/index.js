$(function () {


   $('.dropmenu li').siblings().css({marginTop:0});
    $('.dropmenu li ').siblings('.firstitem').css({marginTop:11});
    function initdrop() {
        var hei = $('.navbar ul li a ').height();
        var wei = $('.navbar ul li a ').width();
        var hei2 = $('.dropmenu li a').height(hei);
        var wei2 = $('.navbar li').width(wei);
    }

    //
    // $('.navbar>ul>li').hover(function () {
    //     $(this).children().show();
    // },function () {
    //     $(this).children().hide();
    // });


    // $('.navbar>ul>li').mouseenter(function () {
    //           $(this).children('.dropmenu').css({display: 'block'});
    //        });
    //        $('.dropmenu').mouseleave(function () {
    //             $(this).css({display:'none'});
    //        });



        // $(".navbar>ul>li").has("ul").mouseenter(function(){
        //     $(this).children("ul").css("display","block");
        // }).mouseleave(function () {
        //     $(this).children("ul").css("display","none");
        //
        // })



    // fadeIn
    //
    // on()
    //
    //
    // animate()


    initdrop();
});