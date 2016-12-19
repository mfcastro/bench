``


      $(document).ready(function(){
// There's the gallery and the trash
   
    var $workbench = $( "#workbench" );
  var $toolkit = $( "#toolkit" );


    // Let the gallery items be draggable
   // $( "li", $toolkit ).draggable({
      //cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      //revert: "invalid", // when not dropped, the item will revert back to its initial position
      //containment: "document",
     // helper: "clone",
      //cursor: "move"
    //});






 
    // Let the trash be droppable, accepting the gallery items
    $workbench.droppable({
      accept: "#toolkit > li",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) { 
        deleteImage( ui.draggable ); //this deletes the old image
      }
    });
 

    // Let the gallery be droppable as well, accepting items from the trash
    $toolkit.droppable({
      accept: "#workbench li",
      classes: {
        "ui-droppable-active": "custom-state-active"
      },
      drop: function( event, ui ) {
        recycleImage( ui.draggable );
      }
    });
 




    // Image deletion function
  //  var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";


    function deleteImage( $item ) {
      $item.fadeOut(function() {
          


        //this just creates a list in the UI. If a list exist, then just reference that. Otherwise add one
        
        
      var $list =  $( "ul", $workbench );



        //var $list = $( "ul", $workbench ).length ?
         // $( "ul", $workbench ) :
          
          //adds a list to workbench
       //  $( "<ul class='toolkit ui-helper-reset'/>" ).appendTo( $workbench );


       // $item.find( "a.ui-icon-trash" ).remove();
        
        $item.removeClass("draggable ui-draggable ui-draggable-handle")
        //.append( recycle_icon )
        .appendTo( $list ).fadeIn(function() {
          $item
            .animate({ width: "300px" })
            //.find( "h5" )
              .animate({ height: "300px" });
        });
      });
    }
 
    // Image recycle function
    
    
    //this var just adds a trash icon
   // var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    function recycleImage( $item ) {

      $item.fadeOut(function() {
        $item//.addClass("draggable").removeClass("ui-sortable-handle")
        //   .find( "a.ui-icon-refresh" )
        //     .remove()
        //   .end()
        //  .css( "width", "96px")
         // .append( trash_icon )
        //  .find( "img" )
        //    .css( "height", "72px" )
          //.end()
          //.addClass()
          .appendTo( $toolkit )
           
          .fadeIn()
          .animate({ width: "100px" })
            //.find( "h5" )
              .animate({ height: "100px" });

           
      });
    }
 


    // Image preview function, demonstrating the ui.dialog used as a modal window
    //this is just a preview window/modal
    // function viewLargerImage( $link ) {
    //   var src = $link.attr( "href" ),
    //     title = $link.siblings( "img" ).attr( "alt" ),
    //     $modal = $( "img[src$='" + src + "']" );
 
    //   if ( $modal.length ) {
    //     $modal.dialog( "open" );
    //   } else {
    //     var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
    //       .attr( "src", src ).appendTo( "body" );
    //     setTimeout(function() {
    //       img.dialog({
    //         title: title,
    //         width: 400,
    //         modal: true
    //       });
    //     }, 1 );
    //   }
    // }
 

    //this takes care of icon behavior. Can do this with angular
    // Resolve the icons behavior with event delegation
    $( "ul.toolkit > li" ).on( "click", function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-trash" ) ) {
        deleteImage( $item );
      } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
        viewLargerImage( $target );
      } else if ( $target.is( "a.ui-icon-refresh" ) ) {
        recycleImage( $item );
      }
 
      return false;
    });





//resize image
$(".resizable").resizable({
  grid: 160
});



$(".sortable").sortable({
  //placeholder: '.drop'
});
$(".sortable").disableSelection();
  
 });