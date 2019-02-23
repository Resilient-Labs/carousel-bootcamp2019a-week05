//Create a carousel that changes image when clicking next or back button. On the last pic, hitting next will cycle to first pic. Hitting back from 1st will cycle to last pic. Min 5
//Choose next image by clicking next button
var memes= ["images/meme0.jpg","images/meme1.jpg","images/meme2.jpg","images/meme3.jpg","images/meme4.jpg","images/meme5.png","images/meme6.png","images/meme7.jpg","images/meme8.jpg","images/meme9.jpg", "images/meme11.jpeg"];

let src = 0

 $("#nextBtn").on("click",function(){
  //changing the image by changing the image source, the image source is in the html. don't have a target for it until i create the array, so did that above the function.
  picker++
  $("img").attr("src", memes[src]);

  if (src === memes.length){
    src=0
    $("img").attr("src", memes[src]);

  }
})

 $("#backBtn").on("click",function(){
  //changing the image by changing the image source, the image source is in the html. don't have a target for it until i create the array, so did that above the function.
  src--
  $("img").attr("src", memes[src]);

  if (src === -1 ){
    src= memes.length-1
    $("img").attr("src", memes[src]);

  }
})
