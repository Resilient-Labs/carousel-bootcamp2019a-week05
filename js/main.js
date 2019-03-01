
$(document).ready(function(){
var i = 0;
var listPhoto = ["21.png", "childish.jpg","cole.jpg", "kendrick.jpg", "nas.jpg"]
console.log(i);
      $("#next").on("click", function(){
          // for(var image = $('img src=""'){
            // $(".pictures").append("<img id = "+ i + ">")
            i++;
            $("img").attr("src", listPhoto[i]);



            if( i > listPhoto.length-1){
             i =0;
             $("img").attr("src", listPhoto[i]);
            }


            console.log(i);
          });




        //On click select a image




        //function for NEXT BUTTON
        $("#last").on("click", function() {
          i--;

          $("img").attr("src", listPhoto[i]);





          if( i < 0){
            i= listPhoto.length-1

            $("img").attr("src", listPhoto[i]);


          }


          console.log(i)

        })

      });
