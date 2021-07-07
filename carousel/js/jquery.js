
//pusedo code
//What can a user do with the app? The user will
//be able to clicka buttn that allowa them 
// a scroll throught a list of 5 images
//the user clicks lefty button the are able to move backwards through
//the list of images & when the user clicks the right button
// it allowss them to scrll right of the scroll of images 
var images = [ "img/j1.jpg", "img/j2.jpeg", "img/j3.jpeg", "img/4.jpg", "img/5.jpg"]
var count =0; 
console.log(images);



//front button//
$('#forwardbtn').click( function(){
    if (count == images.length-1){
        count = 0;
    }else{
        count ++;
    }
    $("img").attr("src", images[count]);
    
    console.log(images[count], count)
});


//back button//
$("#backbtn").click( function(){
    
// variable that will keep count of clicks
// count--;


// conditional that will check to the length of the array
//.lentgh
if (count == 0){
    count = images.length -1;
}else{
    count --;
}
$("img").attr("src", images[count]);

console.log(images[count], count)
});




// }else if{

// }
// count = array.length -1;
// $("img").attr("src", images[count]);






// function carousel(){
//     for(var images = 1; )
// }
    

    



