(function ($) {
    var node = '#age_checker_verification_popup',
        overlay,
        banner,
        bgContainer;

    //Initialize Age Gate
    $.initModule(node, 200, function ($, el) {
        // Hide module before transformation
        el.hide();
        banner = el.find('.age_checker-banner');
        bgContainer = el.find('.bg-container');
        overlay = el.parent();

        // Convert Image to CSS Backgrounds
        if($(banner).length) {
            banner.css('backgroundImage', 'url(' + banner.find('img').attr('src') + ')');
            banner.find('img').remove();
        }
        if($(bgContainer).length && overlay.css('backgroundImage')) {
            bgContainer.removeAttr('style');
            bgContainer.css('backgroundImage', overlay.css('backgroundImage'));
            overlay.css('backgroundImage', '');
        }

        // Show module after transformation
        el.show();
    });

})(jQuery2);