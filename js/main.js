//Create a carousel that changes image when clicking next or back button. last next goes to first. first back goes to last. Minimum 5 pics
$(document).ready(function(){
  //Choose next image by clicking next button
  var arts= ['img/kaylapic.jpg', 'img/kaylapic.png', 'img/paolapic.jpg', 'img/paolapic.png', 'img/chinaguypic.png', 'img/thatchinaguy.png'];

  let slide = 0

  $("#nextBtn").on("click",function(){
    slide++
    $("img").attr("src", arts[slide]);

    if (slide === arts.length){
      slide=0
      $("img").attr("src", arts[slide]);

    }
  })

  $("#backBtn").on("click",function(){
    slide--
    $("img").attr("src", arts[slide]);

    if (slide === -1 ){
      slide= arts.length-1
      $("img").attr("src", arts[slide]);

    }
  })
});
