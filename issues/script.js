$('header').on("click",
    () => {
        console.log('hey') ;
        $('div').toggleClass('background-green'); 
    }
);


    $('.image').click(function() {
        $(this).css('filter', function(index, value) {
            return value === 'invert(1)' ? '' : 'invert(1)';
        });
    });
