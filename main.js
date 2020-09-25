// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function updateHeart(event){
    if(event.target.innerText === EMPTY_HEART){
	event.target.innerText = FULL_HEART;
	event.target.className = "activated-heart";
    }else{
	event.target.innerText = EMPTY_HEART;
	event.target.className = "";
    };
    
};
document.addEventListener("DOMContentLoaded", () => {
    const likeBtns = document.querySelectorAll(".like-glyph");
    likeBtns.forEach( likeBtn => {
	likeBtn.addEventListener("click", (event) => {
	    mimicServerCall()
		.then(response => {
		    updateHeart(event);
		})
		.catch( () => {
		    if(document.querySelector('.hidden')){
			document.querySelector('.hidden').className = "";
		    };
		});
	});
    });
});

			  


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
