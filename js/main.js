//Two buttons
//Two event listeners to fire off functions

//Change the picture:
//Img source held in array
//img source changes to show new picture

//When clicking a button change the image source index by one to move forward and minus one to go backwards

//Attribute method .attr takes in two methods


let counter = 0;

let pic = ["images/1.jpeg", "images/2.jpeg" , "images/3.jpeg", "images/4.jpeg" , "images/5.jpeg" ]

$('#forward').on('click', function(){
  counter++;
  $('#cat1').attr('src', pic[counter]);

  if(counter === pic.length){
    counter=0;
    $('#cat1').attr('src', pic[counter]);
  }
})

$('#back').on('click', function(){
  counter--;
  $('#cat1').attr('src', pic[counter]);
  if(counter === -1){
    counter=pic.length-1;
    $('#cat1').attr('src', pic[counter]);
  }
})
