//create a carousel
//click and show different images
// addEventListener for "SKIP" button will call skip function

// addEventListener for "BACK" will call back function
var pic = ["images/travel1.jpg", "images/madrid.jpg", "images/paris.jpg", "images/venice.jpg"];
var counter = 0;
$(document).ready(function(){
$ ("#skip").on("click", function(){
  counter += 1;
  if (counter === pic.length) {
    counter = 0;
  }
  $("#image1").attr("src", pic[counter]);
})
});


















// jQuery("document").ready(function(){
//     jQuery("#slider > img:gt(0)").hide();
//      jQuery("#button-next").click(function() {
//         jQuery("#slider > img:first")
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .appendTo("#slider");
//   });
// });
