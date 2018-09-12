$(document).ready(function() {
    $('.modal-btn').on('click', function() {
        var modalID = $(this).attr("target");
        $('[id="' + modalID + '"]').show();
        $('[id="' + modalID + '"]').addClass('show');
    });    
    $('.modal-btn').on('click', function() {
        var modalID = $(this).attr("data-target");
        $('[id="' + modalID + '"]').show();
        $('[id="' + modalID + '"]').addClass('show');
    });
    $('.close-modal').on('click', function() {
        $(this).parents('.modal').css('display', 'none');
        $(this).parents('.modal').removeClass('show');
    });
     $(".toggleBtn").click(function(){
        $(".navbar-collapse").addClass("show");
        $( "body" ).append('<div class="overlay"></div>' );
        $( "body" ).css("overflow", "hidden");
      });
      $(".toggleBtn2").click(function(){
        $(".navbar-collapse").removeClass("show");
        $( ".overlay" ).remove();
        $( "body" ).css("overflow", "auto");
      });   
    var $menu = $('.navbar-collapse');

    $('.toggleBtn').click(function () {
      $menu.addClass("show");
      
    });

    $(document).mouseup(function (e) {
       if (!$menu.is(e.target) // if the target of the click isn't the container...
       && $menu.has(e.target).length === 0) // ... nor a descendant of the container
       {
         $menu.removeClass("show");
         $( ".overlay" ).remove();
         $( "body" ).css("overflow", "auto");
      }
     });

    $(document).on('touchstart', function(e) {
      if (!$menu.is(e.target) // if the target of the click isn't the container...
       && $menu.has(e.target).length === 0) // ... nor a descendant of the container
       {
         $menu.removeClass("show");
         $( ".overlay" ).remove();
         $( "body" ).css("overflow", "auto");
      }
    });

});



