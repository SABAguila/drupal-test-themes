(function ($) {
    $(document).ready(function () {
        var currentUrl = location.href;
        $('.field-label-hidden, .social>li').on('click touch', function(e){
            var mediaUrl = location.href;
            if( $(this).hasClass("field-name-field-facebook")){
                 window.open( 'https://www.facebook.com/sharer/sharer.php?u='+currentUrl,
                '', 'status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            if($(this).hasClass("field-name-field-twitter")){
                window.open( 'http://twitter.com/share?url='+currentUrl,
                '','status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            if($(this).hasClass("twitter")){
                window.open( 'http://twitter.com/share?url='+ currentUrl+'#map',
                '','status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            if( $(this).hasClass("facebook")){
                 window.open( 'https://www.facebook.com/sharer/sharer.php?u='+currentUrl+'#map',
                '', 'status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            e.preventDefault();
        });
    });
}(jQuery2));