// $(document).ready(function(){
//   var arts = ['img/kaylapic.jpg', 'img/kaylapic.png', 'img/paolapic.jpg', 'img/paolapic.png', 'img/chinaguy.png', 'img/thatchinaguy.jpg'];
//   //event listener for each button
//   $('#backBtn').on('click', function(){
//     //back button must go backwards in array line
//
//   });
//
//   $('#nextBtn').on('click', function(){
//     //next button must go fowards in array line
//     $('#artworks').attr('src', arts.forEach());
//   });
//
// });



//Create a carousel that changes image when clicking next or back button. On the last pic, hitting next will cycle to first pic. Hitting back from 1st will cycle to last pic. Min 5
//Choose next image by clicking next button
var arts= ['img/kaylapic.jpg', 'img/kaylapic.png', 'img/paolapic.jpg', 'img/paolapic.png', 'img/chinaguypic.png', 'img/thatchinaguy.png'];

let slide = 0

 $("#nextBtn").on("click",function(){
  //changing the image by changing the image source, the image source is in the html. don't have a target for it until i create the array, so did that above the function.
  slide++
  $("img").attr("src", arts[slide]);

  if (slide === arts.length){
    slide=0
    $("img").attr("src", arts[slide]);

  }
})

 $("#backBtn").on("click",function(){
  //changing the image by changing the image source, the image source is in the html. don't have a target for it until i create the array, so did that above the function.
  slide--
  $("img").attr("src", arts[slide]);

  if (slide === -1 ){
    slide= arts.length-1
    $("img").attr("src", arts[slide]);

  }
})
