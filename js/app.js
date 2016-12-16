console.log('wired up!');
console.log($);
console.log(_);
console.log(Backbone);


  var aboutMe = document.querySelector(".about-me");
  var aboutMeHeight = aboutMe.offsetHeight;

$('.arrow').on("click", function(){
  var effect = 'slide';
  var options = { direction: "left".val() };
  var duration = 500;
  $('.about-me').toggle(effect,options,duration);

});
