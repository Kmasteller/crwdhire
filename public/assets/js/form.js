$(document).bind('change', function(e){
    if( $(e.target).is(':invalid') ){
        $(e.target).addClass('invalid-input');
    } else {
        $(e.target).removeClass('invalid-input');
    }
});