$(".menu").click(function(){
    $(".menu-wrap").css("display","block").siblings().css("display","none")
})
$(".esc-menu").click(function(){
    $(".menu-wrap").css("display","none").siblings().css("display","block")
})
var now=0;
var next=0;
function move(type){
    type=type||"right";
    if(type=="right"){
        next++;
        if(next>=$(".slide-wrap").find("li").length){
            next=0;
        }
        $(".slide-wrap").find("li").eq(now).css("left","0");
        $(".slide-wrap").find("li").eq(next).css("left","100%");
        $(".slide-wrap").find("li").eq(now).animate({"left":"-100%"},1000);
        $(".slide-wrap").find("li").eq(next).animate({"left":"0"},1000);
        $(".slide-wrap-btn").find("li>div").eq(now).animate({"width":"100%"},1000);
        $(".slide-wrap-btn").find("li>div").css("width","0")
        now=next;
    }
}
var t=setInterval(move,3000)
$(".leftbtn").hover(function(){
    $(".leftbtn").find(".left").css("display","block");
    //clearInterval(t)
},function(){
    $(".leftbtn").find(".left").css("display","none");
    //setInterval(move,3000)
})
$(".rightbtn").hover(function(){
    $(".rightbtn").find(".right").css("display","block");
    //clearInterval(t)
},function(){
    $(".rightbtn").find(".right").css("display","none");
    //setInterval(move,3000)
})


//$(".slide-wrap").mouseover(function(){
//    clearInterval(t)
//})
//$(".slide-wrap").mouseout(function(){
//    setInterval(move,3000)
//})
//$(".slide-wrap-btn").find("li").mouseover(function(){
//    var index=$(this).index();
//    $(".slide-wrap-btn").find("li>div").css("width","0").eq(index).css("width","100%");
//})



$(".sfooter>li>h3>span").click(function(){
    $(this).parent().siblings().toggle();
})