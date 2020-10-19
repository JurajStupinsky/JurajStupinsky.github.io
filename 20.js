$('div.cube_p1').text('TEXT');
let names = ['<strong> Juraj</strong>', ' Roman', ' Jozef', ' Andrej']
names.forEach(element => {
    console.log(element)
    $('ul').append('<li class="ol">'+element+'</li>');    
});
let additionalBlock = 
    '<h1>Some HTML here</h1>'
    +
    "<p>This block was added using JavaScript's jQuery library. How awesome!</p>"

 document.write(additionalBlock)