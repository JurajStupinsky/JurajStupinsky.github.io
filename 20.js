$('div.cube_p1').text('TEXT');
let names = ['<strong> Juraj</strong>', ' Roman', ' Jozef', ' Andrej']
names.forEach(element => {
    console.log(element)
    $('ul').append('<li class="ol">'+element+'</li>');    
});
