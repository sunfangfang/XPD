/**
 * Created by y on 2016/7/27.
 */
$(function(){
    $(window).load(function(){
        conH();
        PicH();
        PiciH();
    });
    $(window).resize(function() {
        conH();
        PicH();
        PiciH();
    });
    function conH() {
        var winH=$(window).height();
        var conH =parseInt(winH)-100;
        $(".enlarge_con").css("height",conH);
    }
    function PicH() {
        var PH=$(window).height();
        var PcH= parseInt(PH) -120;
        $(".bz_pic").css("height", PcH);
    }
    function PiciH() {
        var PiH=$(window).height();
        var PciH= parseInt(PiH) -140;
        $(".bz_pic img").css("maxHeight", PciH);
    }
    //标注、备注、删除框的拖动功能
    var drag1=false,drag2= false,onoff=false;
    var drag=function(menu,hh,ww,dragging){
        var xx,yy;
        menu.bind('mousedown',function(e){
            xx= e.pageX;
            yy= e.pageY;
            var	ATop=yy-menu.offset().top,
                ALeft=xx-menu.offset().left,
                WW=parseInt($(window).width()),
                WH=parseInt($(window).height());
                dragging=true;
            $(document).mousemove(function(e){
                if(onoff){return;}
                var nn= 0,ss=hh;
                if($(".black_bg").is(":hidden")){
                    if($(".bz_con").is(":visible")){
                        nn=80;
                        ss+=145;
                    }else{
                        nn=0;
                        ss=hh;
                    }
                }else{
                    nn= 0;
                    ss=hh;
                }
                if(dragging){
                    var top=e.pageY-ATop,
                        left=e.pageX-ALeft;
                    top=(top<0)?0:top;
                    left=(left<nn)?nn:left;
                    top=(top>=WH-ss)?WH-ss:top;
                    left=(left>=WW-ww)?WW-ww:left;
                    menu.css({"top":top+'px',"left":left+'px'});
                }
                e.preventDefault();
            });
        });
        $(document).mouseup(function(e) {
            dragging = false;
            e.cancelBubble = true;
        });
    };
    //focus
    $("#beizhu").focus(function(){
       onoff=true;
        //if(isShift){
        //    //$(this).select();
        //}
    });
    $("#beizhu").blur(function(){
        onoff=false;
    });
    drag($(".menu_con"),30,295,drag1);
    drag($(".bz_in"),95,400,drag2);

//标注、备注、删除的选中状态
    $(".menu_block>span").click(function(){
        $(".menu_block>span").removeClass("jiaru biaoz bz sc");
       if($(this).hasClass("tagging")){
           $(this).addClass("biaoz");
       }else if($(this).hasClass("remark")){
           $(this).addClass("bz");
       }else if($(this).hasClass("join")){
           $(this).addClass("jiaru")
       }else{
           $(this).addClass("sc");
       }
    });

//    设置图片大小按钮的选中状态
    var setting=["span_check","span_check","adapt01","refresh01","forward01","left01","right01"];
    $(".top_block>.set_btn").each(function(i){
        $(this).data("index",i);
    });
    $(".top_block>.set_btn").click(function(){
        $(".top_block>.set_btn").removeClass("span_check adapt01 refresh01 forward01 left01 right01");
        var i=$(this).data("index");
        $(this).addClass(setting[i]);
    });

//    备注内容框的显示和隐藏
    var bz_block=$(".bz_con");
    var kaiguan=true;
    $(".remark").click(function(e){
        $(this).toggleClass("bz");
        bz_block.toggle();
        e.stopPropagation();
        if(kaiguan){
            $(this).addClass("bz");
            bz_block.show();
            kaiguan=false;
        }else{
            $(this).removeClass("bz");
            bz_block.hide();
            kaiguan=true;
        }
    });
    $(".enlarge_con").click(function(e){
        if(kaiguan==false){
            $(".remark").removeClass("bz");
            bz_block.hide();
            kaiguan=true;
        }
        e.stopPropagation();
    });
    $(".com_back").click(function(){
        $(this).toggleClass("back_check");
    });
//标注弹层效果
    $(".tagging").click(function(){
        $(".black_bg").show();
    });
    $(".bz_btn2").click(function(){
        $(".black_bg").hide();
    });

    $(".bz_btn1").click(function(){
        $(".bz_btn1").removeClass("btn1_act");
        $(this).addClass("btn1_act");
    });
    $("#line_btn,#color_btn").blur(function(){
        $(this).removeClass("btn1_act");
    });
    $("#line_btn").click(function(){
        $("#line_show").slideDown();
    });
    $("#line_btn").blur(function(){
        $("#line_show").slideUp();
    });
    $("#color_btn").click(function(){
        $("#color_show").slideDown();
    });
    $("#color_btn").blur(function(){
        $("#color_show").slideUp();
    });
    $(".bz_b5").click(function(){
        $(".bz_in").show();
    });

//shift+A全选
//    var isShift = false;
//    $(document).keydown(function(e) {
//        var oEvent = window.event;
//        if (oEvent.shiftKey) {
//            if(oEvent.keyCode==65||oEvent.keyCode==97){
//                isShift = true;
//                //$("#beizhu").select();
//                //alert(1);
//                //e.preventDefault();
//            }
//        }
//    });
//
//    $(document).keyup(function(e) {
//        var oEvent = window.event;
//        if (oEvent.keyCode==16||oEvent.keyCode==65||oEvent.keyCode==97) {
//            isShift=false;
//        }
//    });


});