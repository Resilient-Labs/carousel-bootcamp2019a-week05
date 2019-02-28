// what can the user do? click a button
$(document).ready(function (){
  var dogPictures = [
    "img/dash.jpg",
    "img/dalmatian.jpg",
    "img/doberman.jpg",
    "img/pitbull.jpg",
    "img/afghan.jpg",
    "img/collie.jpg"
  ];
  var index = 0;
  $("#next").on("click", function (){
    index += 1;
    if (index === dogPictures.length){
      index = 0;
    }
    $("img").attr("src", dogPictures[index])
  })

  $("#back").on("click", function (){
    index -= 1;
    if (index < 0){
      index = dogPictures.length -1;
    }
    $("img").attr("src", dogPictures[index])
  })

});
// what is the user going to see
// what does the user expect and what can they actually see
