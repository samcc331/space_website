$(document).ready(function(){
$(".info-pluto").addClass("hidden");  
$(".info").addClass("hidden");
$(".planet").click(function(){
 $(".info").addClass("hidden");  $(this).children(".info").toggleClass("hidden");
         
});
$(".pluto").click(function(){
  $(".info").addClass("hidden");
$(".info-pluto").toggleClass("hidden");
});

  
  
//   $(".actual_planet").addClass("hidden1");
// $(".planet").dblclick(function(){
//   $(this).children(".actual_earth").toggleClass("hidden1");
//    $(this).children(".earth_pic").toggleClass("hidden2");
  
// });
  
  
$(".name").addClass("hidden");
$(".planet").hover(function(){
         $(this).children(".name").toggleClass("hidden");
});

 });


