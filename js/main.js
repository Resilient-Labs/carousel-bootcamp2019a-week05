//image source change
//user click button
//2 event listeners
//2 functions
//create an array to hold images
//attribute method ---attr()
//go up by 1-- next
//go down by 1--- previous
//repeat everytime button is clicked
var myPics = ["media/series.jpg", "media/white.jpg","media/whiteRed.jpg","media/yellow.jpg","media/red.jpg","media/blue.jpg",
]
let pic = 0;
// var allPics = myPics.length
// var p1 = myPics.length[0];
// var p2 = myPics.length[1];
// var p3 = myPics.length[2];
// var p4 = myPics.length[3];
// var p5 = myPics.length[4];
// var p6 = myPics.length[5];
$("#next").on("click", function() {
    pic++
  $( "img" ).attr("src",myPics[pic]);

  if(pic === myPics.length){
    pic=0
  $( "img" ).attr("src",myPics[pic]);
  }
});

$("#prev").on("click", function() {
    pic--
  $( "img" ).attr("src",myPics[pic]);

  if (pic === -1){
    pic = myPics.length-1
  $( "img" ).attr("src",myPics[pic]);
  }
});
