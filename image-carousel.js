var image = ["engineer.jpg","earth.jpg","money.jpg","skyscraper.jpg","supra.jpg"];
var counter = 0;
$(document).ready(function(){
  $('#next').on('click', function(){
    counter += 1
    if (counter == image.length){
      counter = 0;
    }
    $('img').attr("src", image[counter])
  });
  $('#back').on('click', function(){
    counter -= 1
    if (counter == -1){
      counter = image.length - 1;

    }

    $('img').attr("src", image[counter])
  });
});
