$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    
    $('#volta-form').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#colocar-na-lista').val();
        const novoItem = $('<li style="display: none"></li>').text(novaTarefa);

        $(novoItem).click(function(){
            $(this).toggleClass('riscado');
        })

        $(novoItem).appendTo('ol').slideDown();
        $('#colocar-na-lista').val('');
    })
})