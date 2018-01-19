$(document).bind('change', function(e){
    if( $(e.target).is(':invalid') ){
        $(e.target).addClass('invalid-input');
    } else {
        $(e.target).removeClass('invalid-input');
    }
});

$(document).ready(function() {
    $('select').material_select();
  });