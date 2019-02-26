//what can the user do
// need an array to store the image
let meme = ["img/img1.png", "img/img2.png", "img/img3.png", "img/img4.jpg", "img/img5.jpg"];
let pew = 0;
// click button
// $("forward").on("click",function(){
$("#forward").on("click", function(){
  // image changes
  pew++;
  // .attr can be used
  $("#memeReview").attr("src", meme[pew]);
  if(pew === meme.length){
    pew = 0;
    $("#memeReview").attr("src", meme[pew]);
  }
});
$("#backward").on("click", function(){
  pew--;
  $("#memeReview").attr("src", meme[pew]);
  if(pew === -1){
    pew = meme.length-1;
    $("#memeReview").attr("src", meme[pew]);
    console.log(pew);
  }
});
//   // image changes
//   // .attr can be used
