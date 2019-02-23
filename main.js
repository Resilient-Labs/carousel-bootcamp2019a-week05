$(document).ready(function(){
var dragonBall=["gokussj.png","vegeta.jpg","trunks.png","jiren.png","majin.png"];


  var photo = 0
  $("#next").on("click", function(){
    // $("img").each(function(index)
     photo++;
    $("img").attr("src", dragonBall[photo]);

    if(photo===dragonBall.length){
      photo=0
      $("img").attr("src", dragonBall[photo]);
    }

  })
  $("#back").on("click", function(){
    // $("img").each(function(index)
     photo--;
     $("img").attr("src", dragonBall[photo]);
     if(photo===-1){
       photo=dragonBall.length-1
       $("img").attr("src", dragonBall[photo]);
     }



   })
})
