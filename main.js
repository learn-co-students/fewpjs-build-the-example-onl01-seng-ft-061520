// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").addEventListener("click", function(event) {
    let aHeart = event.target
    mimicServerCall()
    .then(function() {
      if(aHeart.className == "like-glyph") {
        if(aHeart.innerText == EMPTY_HEART) {
          aHeart.innerText = FULL_HEART;
        } else {
          aHeart.innerText = EMPTY_HEART;
          aHeart.classList.remove('activated-heart')
        }
      }
    })
    .catch(error => console.log('error message'))
  })
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
