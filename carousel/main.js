$(document).ready(function(){
  var imgArray = ['earth.jpg','air.jpg','fire.jpg','water.jpg','lightning.jpg'];


var dog =0;
  $('#forward').on('click', function(){
    dog++;
    $('#pics').attr('src', imgArray[dog]);


    if(dog===imgArray.length){
        dog=0
        $('#pics').attr('src', imgArray[dog]);
    }


  })

  $('#backward').on('click', function(){
    dog--;
    $('#pics').attr('src', imgArray[dog]);
    if(dog=== -1){
      dog=imgArray.length-1;

        $('#pics').attr('src', imgArray[dog]);
    }

  })


//if counter === -1 then counter === imgArray.length -1


})
