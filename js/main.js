//The user clicks the next button and views the next image
//The user clicks the back button and views the previous image
//The image are reset or ongoing so that the carousel does not end ( it only resets)

let track = 0;

let images = ['img/burger.jpg', 'img/cookies.jpg', 'img/frenchfries.jpg', 'img/hotdog.jpg', 'img/macaroni.jpg', 'img/pancake.jpg', 'img/salmon.jpg', 'img/spaghetti.jpg']
//burger, cookies, frenchfries, hotdog, macaroni, pancake, salmon, spaghetti

function swap(){
  $('section.carousel img').attr('src', images[track])
}

$("#next").on('click', function(){
 track += 1;
 if (track >= images.length) {
   track = images.length
 }
 swap()
})

$("#back").on('click', function(){
  track -= 1;
  if (track <= 0) {
  track = 0
  }
  swap()
})
