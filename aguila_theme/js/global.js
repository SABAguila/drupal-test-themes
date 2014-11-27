/*global WebFontConfig, jQuery2 */
window.WebFontConfig = {
    google: {
        families: ['Open+Sans:300italic,400italic,600italic,700,300,600,400:latin']
    }
};

(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

(function ($) {
    $(document).ready(function () {
        // Transform Newsletter Form
        $.transform("#block-views-formulario-aguila-news-block-1", {
            target: "#web-form-aguila-news-container",
            type: 'append',
            globalTarget: true
        });

        // Transform login Block;
        $.transform("#block-system-user-menu", {
            target: ".btn-login-search .btn-icon-login",
            type: 'append',
            globalTarget: true
        });

        // Transform Search Block
        $.transform("#block-search-form", {
            target: ".btn-login-search .btn-icon-search",
            type: 'append',
            globalTarget: true
        });
    });
})(jQuery2);

