// wait for the DOM to finish loading
console.log("js file connected");

$(document).ready(function() {

var $clicklableBoxes = $('.clicklableBox');

   $clicklableBoxes.on("click", function () {
       console.log("You have clicked");
   });

});
