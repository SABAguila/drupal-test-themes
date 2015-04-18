(function ($) {
    $(document).ready(function () {
        
        $('.field-label-hidden').on('click touch', function(e){
            var mediaUrl = location.href;
            if( $(this).hasClass("field-name-field-facebook")){
                 window.open( 'https://www.facebook.com/sharer/sharer.php?u='+location.href,
                '', 'status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            if($(this).hasClass("field-name-field-twitter")){
                window.open( 'http://twitter.com/share?url='+location.href,
                '','status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            e.preventDefault();
        });


    });
}(jQuery2));