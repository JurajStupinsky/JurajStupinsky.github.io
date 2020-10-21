$('body').on('click', 'li', function() {
        $(this).css('text-decoration-line', 'line-through')
    })
$('.add_t').click(() => {
        let todo = $('.t_input').val()
        $('ul').append('<li>'+todo+'</li>')   
        console.log(todo)
})
//$('body').on('click', 'li', function() {
  //  $(this).css('background', 'green')
//})

//var count = 0;
//$( "body" ).on( "click", "p", function() {
 // $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
//});