/**
 * Created by admin on 2017/1/4.
 */
$(function () {

    $('.detail_content_right_content').children('p').eq(1).css({marginTop: "30px"});
    $('.detail_content_right_content').children('p').eq(2).css({marginTop: "50px"});

    var key = 2;
    $('.name').click(function () {
        if (key == 2) {
            $('.list').css({display: 'block'});
            $('.name_icon').css({backgroundPosition: "0 -16px"});

            key = 1;
        } else {
            $('.list').css({display: 'none'});
            $('.name_icon').css({backgroundPosition: "0 0"});
            key = 2;
        }
    })

})