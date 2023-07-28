$(function(){

    $('.search_icon').click(function(){
        $('.search_box').slideToggle(300);
    });

    $('.depth01 > a').click(function(){
        $(this).next().slideToggle(300);
        //.next() 바로 뒤에 있는 형제지간 선택자만
        //선택할 수 있음, 형제 선택자가 많을 경우,
        //괄호 안에 선택자명 넣어서 정확하게 지정할 수 있음
        $(this).toggleClass('on');
    });

    $('.menu_open').click(function(){
        $('nav').css({
            'right':'0',
            'transition':'1s'
        });
    });

    $('.menu_close').click(function(){
        $('nav').css({
            'right':'-100%',
            'transition':'1s'
        });
    });

}); //jquery end