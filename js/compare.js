/**
 * Created by y on 2016/7/26.
 */
$(function(){

    //计算照片高度
    $(window).load(function(){
        picH();
    });
    $(window).resize(function() {
        picH();
    });
    function picH() {
        var picW=$(window).width();
        var picH=$(window).height();
        if(picW<=1024){
            var picW1=(parseInt(picW)-40);
            var picW2=(parseInt(picW)-40);
            var picH1 =parseInt(picW)*0.6667;
            var picH2=parseInt(picW)*0.6667;
        }else{
            var picW1=(parseInt(picW)-60)/2;
            var picW2=(parseInt(picW)-80)/3;
            var picH1 =((parseInt(picW)-60)/2)*0.6667;
            var picH2=((parseInt(picW)-80)/3)*0.66667;
        }
        $(".com_pic1").css({"width":picW1,"height": picH1});
        $(".com_pic1 img").css({"maxWidth":picW1,"maxHeight":picH1});
        $(".com_pic2").css({"width":picW2,"height":picH2});
        $(".com_pic2 img").css({"maxWidth":picW2,"maxHeight":picH2});
        var imgH=parseInt(picH)-100;
        $(".com_con").css("height",imgH);
    }
    $(".com_back").click(function(){
        $(this).toggleClass("back_check");
    });

//    删除照片
    $(".close").click(function(){
        $(this).parent().parent().remove();
    });
    $(".del").click(function(){
        $(this).parent().parent().remove();
    });
});
