let color = 'purple';
let number = 10;
let word = 'cool';
if (color = 'purple') {
  $(".p1_North").css("background", "purple")
}
if (number > 100){
  $(".p1_East").text("whoa thats big number")
}
else {
  $(".p1_East").text("just a regular number, please")
}
if (word = 'cool'){
  $(".p1_South").text("Power of DOM")
}
else {
  $(".p1_West").text("Power of DOM")
}