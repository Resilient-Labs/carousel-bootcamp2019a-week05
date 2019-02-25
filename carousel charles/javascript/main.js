//Create a carousel that changes image when clicking next or back button. On the last pic, hitting next will cycle to first pic. Hitting back from 1st will cycle to last pic. Min 5
//Choose next image by clicking next button
//plans: have image sizes be more natural/different while preventing buttons position from changing, add background, add image border, center everything, add image transition effect, add random image burst, add project description to page and others, have previews of each image that can be clicked and change main image, 
let memes= ["images/meme0.jpg","images/meme1.jpg","images/meme2.jpg","images/meme3.jpg","images/meme4.jpg","images/meme5.png","images/meme6.png","images/meme7.jpg","images/meme8.jpg","images/meme9.jpg", "images/meme11.jpeg"];
let count = 0;
 $("#nextBtn").on("click",function(){
  //changing the image by changing the image source, the image source is in the html. don't have a target for it until i create the array, so did that above the function.
  count++
  $("img").attr("src", memes[count]);
  if (count === memes.length){
    count= 0
    $("img").attr("src", memes[count]);

  }
})
 $("#backBtn").on("click",function(){
  //changing the image by changing the image source, the image source is in the html. don't have a target for it until i create the array, so did that above the function.
  count--
  $("img").attr("src", memes[count]);
  if (count === -1 ){
    count= memes.length-1
    $("img").attr("src", memes[count]);
  }
})
