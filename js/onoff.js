$(function(){
    var flag = true;
    $("#onoff").click(function(){
        if(flag){
            var  imgname ="img/images.jpg";
             flag =false;
        }
        else{
            var imgname ="img/images1.png";
            flag = true;
        }
       $("img").attr("src",imgname); 
    });
    
    $("#btnhide").click(function(){
        $("#randomtext").hide();
    });
   $("#btnshow").click(function(){
        $("#randomtext").show();
    });
  $("#btntoggle").click(function(){
        $("#randomtext").toggle();
    });
      $("#fadein").click(function(){
        $("#box").fadeIn();
    });
   $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
    $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
});