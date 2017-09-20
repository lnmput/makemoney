$(function () {
   var homeVideo = $("#home-video");
   homeVideo.bind('play', function () {
       console.log("start play");
       setTimeout(function () {
            console.log('3s');
            homeVideo[0].pause();

          $.popup('.popup-about');


       }, 3000)


   });




    $(document).on('click','.open-about', function () {
        $.popup('.popup-about');
    });

});