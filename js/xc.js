/**
 * Created by y on 2016/7/28.
 */
$(function(){
    $(window).resize(function() {
        ConH();
        CyonW();
        CNnW();
        YbH();
        GtcH();
        GWH();
    });

    //主要内容的高度
    function ConH() {
        var CH=$(window).height();
        var ccH= parseInt(CH) -50;
        $(".content").css("height", ccH);
        var nn;
        if($(".cz_top_nr").is(":visible")){
            nn=560;
        }else{
            nn=380;
        }
        var leftH=CH-nn;
        $(".link_contain").css("height", leftH);
    }
    //主要内容的宽度
    function CyonW() {
        var CyW=$(window).width();
        var ccyW= parseInt(CyW) -290;
        $(".cy").css("width", ccyW);
    }

    //右侧导航宽度
    function CNnW() {
        var CNW=$(window).width();
        var cNyW= parseInt(CNW) -500;
        $(".cy_nav").css("width", cNyW);
    }

    //右侧内容高度
    function YbH() {
        var yCH=$(window).height();
        var ybH= parseInt(yCH) -165;
        $(".xc_con").css("height", ybH);
        if($(".cz_top_nr").is(":visible")){
            nn=560;
        }
    }

    function GtcH() {
        var Gtc=$(window).height();
        var GtH= parseInt(Gtc) -50;
        $(".gw_tc").css("height", GtH);
    }
    function GWH() {
        var GH=$(window).height();
        var GcH= parseInt(GH) -340;
        $(".gw_cc").css("maxHeight", GcH);
    }
    ConH();
    CyonW();
    CNnW();
    YbH();
    GtcH();
    GWH();
    //左侧下拉
    var onoff=true;
    $(".cz_top").click(function(){
        $(".cz_top_nr").finish();
        $(this).toggleClass('arw_up');
        $(".cz_top_nr").slideToggle();
        var linkH=$(window).height();
        var n;
        if(onoff){
            n=560;
            onoff=false;
        }else{
            n=380;
            onoff=true;
        }
        var leftH=linkH-n;
        $(".link_contain").css("height", leftH);
    });

    //选中状态
    $(".link_ul>li").each(function(i){
        $(this).data("index",i);
    });
    var preve;
    $(".link_ul>li").click(function(){
        var i=$(this).data("index");
        $(".menu_ul>li").removeClass("menu_check");
        if($(this).data("index")==preve){
            $(".menu_ul>li").removeClass("menu_check");
            $(".link_con>li").removeClass("link_check");
            $(this).toggleClass("link_check arrow_up");
            $($(".link_con")[i]).slideToggle();
        }else{
            preve=$(this).data("index");
            $(".link_ul>li").removeClass("link_check arrow_up");
            $(".link_con").slideUp();
            $(this).addClass("link_check");
            $(this).addClass('arrow_up');
            $($(".link_con")[i]).slideDown();
        }

    });
    $(".menu_ul>li").click(function(){
        $(".link_ul>li").removeClass("link_check arrow_up");
        $(".link_con").slideUp();
        $(".menu_ul>li").removeClass("menu_check");
        $(".link_con>li").removeClass("link_check");
        $(this).addClass("menu_check");
    });
    $(".link_con>li").click(function(){
        $(".menu_ul>li").removeClass("menu_check");
        $(".link_con>li").removeClass("link_check");
        $(this).addClass("link_check");
    });

    //------------------------
    $(".cyp").each(function(i){
        $(this).data("index",i);
    });
    $(".cyp").hover(function(){
        var i=$(this).data("index");
        $(this).toggleClass("cyp_hover");
        $($(".cyp_text")[i]).toggleClass("text_hover");
        $($(".cyp_btn")[i]).toggleClass("btn_hover");
        $($(".cyp_sl")[i]).toggleClass("slH");
    });
    //-------------------
    $(".src_term span").click(function(){
        $(".src_term span").removeClass("asc_check desc_check time_check");
    });
    $(".asc").click(function(){
        $(this).addClass("asc_check");
    });
    $(".desc").click(function(){
        $(this).addClass("desc_check");
    });
    $(".sj_time").click(function(){
        $(this).addClass("time_check");
    });
    $(".paging_block>div>span").click(function(){
        if($(this).parent().hasClass("page_num")){
            return;
        }
        $(".paging_block>div>span").removeClass("font_check");
        $(this).addClass("font_check");
    });
    $(".xc_step").click(function(){
        $(".xc_step").removeClass("back_check");
        $(this).addClass("back_check");
    });

    //点击加入购物车，购物车数量增加
    //-------------------------
    //var scaleFn=function(name){
    //    $(name).css({"transition":"all .6s ease","transform":"scale(1.5)"});
    //    setTimeout(function(){
    //        $(name).css({"transition":"all .6s ease","transform":"scale(1)"});
    //    },300);
    //};
    $(".cyp_btn").each(function(i){
        $(this).data("index",i);
    });
    $(".cyp_btn").click(function(){
        var n=parseInt($("#xc_num").html());
        $("#xc_num").html(n+1);
        //scaleFn("#xc_num");
        var i=$(this).data("index");
        var n1=parseInt($($(".cyp_sl")[i]).html());
        $($(".cyp_sl")[i]).html(n1+1);
        //scaleFn($(".cyp_sl")[i]);
        $($(".cyp_sl")[i]).css({"background-color":"#fff"});
    });
    //--------------------------------------
    if($(".cyp").length>=14){
        $(".paging_con").show();
    }

//    购物车效果
    var onoff=true;
    $(".cz_shopping").click(function(){//购物弹层效果
        if(onoff){
            $(".gw_tc").animate({left:'290px',opacity:'1'});
            onoff=false;
        }else{
            $(".gw_tc").animate({left:'-800px',opacity:'0'});
            onoff=true;
        }
    });
    $(".gw a").click(function(){//购物弹层效果
        $(".gw_tc").animate({left:'-800px',opacity:'0'});
        onoff=true;
    });
    $(".gw_tc_del").click(function(){
        $(this).parents("ul").remove();
    });

//购物车hover事件
    $(".gw_tit").hover(function(){
        var gwH=parseInt($(".gw_cc").height())+50;
        var n=parseInt($(this).offset().top);
        var b=$(this).find(".title_show").height();
        if(n>gwH){
            $(this).find(".title_show").css({"top":-b+'px'});
        }else{
            $(this).find(".title_show").css({"top":"35px"});
        }
        $(this).find(".title_show").show();
    },function(){
        $(this).find(".title_show").hide();
    });


//    添加数量
    $(".add_num").click(function(){
        var n=parseInt($(this).parent().find(".total").html());
        $(this).parent().find(".total").html(n+1);
    });
    $(".gw_cc").scroll(function(){
        var n1=$(this).scrollTop();
    });
//    购物车飞入效果
    var offset = $("#end").offset();
    $(".cyp_btn").click(function(event){
        var addcar = $(this);
        var img = addcar.parent().find('.cyp_div .cyp_pic img').attr('src');
        var flyer = $('<img class="u-flyer" src="'+img+'">');
        flyer.fly({
            start: {
                left: event.pageX,
                top: event.pageY
            },
            end: {
                left: offset.left+80,
                top: offset.top+10,
                width: 0,
                height: 0
            }
            //onEnd: function(){
            //    $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
            //}
        });
    });



});