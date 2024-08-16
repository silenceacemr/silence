//图片消失后显示另一张图片
// $(document).ready(function () {
//     $('#img').fadeOut(3000,function(){
//         $('#img').attr('src','./images/aerial_image2.jpg');
//         $('#img').fadeIn(3000);
//     })
//     $('#img').fadeOut(3000,function(){
//         $('#img').attr('src','./images/preview.jpg');
//         $('#img').fadeIn(3000);
//     })

//   });
  $(window).ready(function(){
    $("#slide_banner .pic").eq(0).show();
    var i=0;
    function fad(){
      var m = i%5;
      var n = (i+1)%5;
      $("#slide_banner .pic").eq(m).fadeOut(900);
      $("#slide_banner .pic").eq(n).fadeIn(900);
      i++;

    };
    int = setInterval(fad,3000);
  });