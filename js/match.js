/**
 * Created by y on 2016/7/29.
 */
$(function(){
    //轮播效果
    var index= 0,current=0;
    var lunbo=function(){
       $(".ppic").css("display","none");
       $($(".ppic")[index]).css("display","table-cell");
       //current=index;
       index++;
       if(index>=$(".ppic").length){
           index=0;
       }
    };
    var termid=setInterval(lunbo,2000);
    $(".p_arw_l").click(function(){
        clearInterval(termid);
        index--;
        if(index<0){
            index=$(".ppic").length-1;
        }
        $(".ppic").css("display","none");
        $($(".ppic")[index]).css("display","table-cell");
        termid=setInterval(lunbo,2000);
    });
    $(".p_arw_r").click(function(){
        clearInterval(termid);
        lunbo();
        termid=setInterval(lunbo,2000);
    });

    //点击放大图
    $(".zoom").click(function(){
        $(".zhezhao").show();
        var link=$(this).parents(".cyp").find("img").attr("src");
        $(".zz_pic>img").attr("src",link);
    });
    $(".close").click(function(){
        $(".zhezhao").hide();
    });
    $(".xc_step").click(function(){
        $(".xc_step").removeClass("back_check");
        $(this).addClass("back_check");
    });

//    选产品hover事件
    $(".pc_name").hover(function(){
        var gwH=parseInt($(".pp_cc").height())+40;
        var gwW=parseInt($(".pp_cc").width())+50;
        var n=parseInt($(this).offset().top);
        var n1=parseInt($(this).offset().left);
        var b=$(this).parent().find(".title_show").height();
        if(n>gwH){
            $(this).parent().find(".title_show").css({"top":-b-20+'px'});
        }else{
            $(this).parent().find(".title_show").css({"top":"20px"});
        }
        if(n1>gwW){
            $(this).parent().find(".title_show").css({"left":'-90px'});
        }else{
            $(this).parent().find(".title_show").css({"left":'0px'});
        }
        $(this).parent().find(".title_show").show();
    },function(){
        $(this).parent().find(".title_show").hide();
    });


});