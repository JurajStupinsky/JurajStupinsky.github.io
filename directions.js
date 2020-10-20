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
$('.b_cc0').click(() => {
  console.log('Yeah, you clicked me')
  // it's the same as before
})

$('.b_cc1').click(() => {
  $('.b_cc0').text('Text change by 2nd button')
  console.log('Yeah, text changed')
  })
$('.b_cc2').click(() => {
  $('button').css('background', 'green')
  console.log('Yeah, color changed')
  // it's the same as before
})
$('.b_def').click(() => {
    $('.b_cc0').text('Console Log')
    $('button').removeAttr('style')
    console.log('Yeah, all back to normal')
  // it's the same as before
})

