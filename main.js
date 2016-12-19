$(document).ready(function(){
       $( ".draggable" ).draggable({ 
           revert: "invalid" 
        });

    //    $('.dropZone').hover(function(){
    //        $('.draggable').addClass('inTheZone')
    //    });

     $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          //.addClass( "ui-state-highlight" )
          .addClass( "dropped" ).find( "td" )
      }
    });

    $(".resizable").resizable();

});