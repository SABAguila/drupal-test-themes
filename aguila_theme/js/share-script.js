(function ($) {
    $(document).ready(function () {
        console.log("shareMap");
        var currentUrl = location.href;
        $('.field-label-hidden, #social>li').on('click touch', function(e){
            if( $(this).hasClass("field-name-field-facebook")){
                 window.open( 'https://www.facebook.com/sharer/sharer.php?u='+currentUrl,
                '', 'status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            if($(this).hasClass("field-name-field-twitter")){
                window.open( 'http://twitter.com/share?url='+currentUrl,
                '','status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }            
            e.preventDefault();
        });

        $('.container-map').on('click touch', 'li', function(e){
            currentUrl = location.href;
            currentUrl = currentUrl+"%23map"
            if($(this).hasClass("twitter")){
                window.open( 'http://twitter.com/share?url='+ currentUrl,
                '','status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            if( $(this).hasClass("facebook")){
                 window.open( 'https://www.facebook.com/sharer/sharer.php?u='+currentUrl,
                '', 'status=1,width=626,height=436,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no');
            }
            e.preventDefault();
        });
        $(".field-name-field-link-seguir-leyendo").on("click touch","a",function(e){
            $(" .node-fiestas .content .field-item p").show();
            $(".node-fiestas .field-name-field-link-seguir-leyendo a").hide();
            e.preventDefault();
        });

    });
}(jQuery2));