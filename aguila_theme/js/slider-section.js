/*global jQuery2 */
(function ($) {
    $(document).ready(function(){
        var slider = $('.view-banner-principal .view-content'),
            sliderNode = $('.view-banner-principal'),
            borderClass,
            imagePath,
            win,
            scrollBtn,
            scrollBtnVisible = true;

        //Set slider images as css background images
        slider.find(".views-row").each(function(index, el) {
            borderClass = $.trim($(this).find('.slider-border').text());
            imagePath = $.trim($(this).find('.slider-background img').attr('src'));
            $(this).css({'background-image': 'url('+imagePath+')'});
            $(this).addClass(borderClass);
        });
        //Initialize Slick slider
        slider.slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            onSetPosition: function (slickSlider) {
                var slideContent = slider.find('.slide-content');

                if (slideContent.length) {
                    //Set size for slide-content.
                    slider.find('.slide-content').width(slickSlider.$slider.width());
                }
            },
            onAfterChange: function(slider,index){
                hide_alternative_content();
            }
        });
        //Add down arrow below the banner
        if(sliderNode.length) {
            scrollBtn = $('<div class="btn to-scroll btn-md btn-sky-blue btn-radius-none btn-text-no btn-symbol btn-symbol-down animation-to-bottom hidden"></div>');
            sliderNode.append(scrollBtn);
            win = $(window);
            win.on('scroll', function () {
                var position = win.scrollTop();
                if (position <= 150 && !scrollBtnVisible) {
                    scrollBtn.animate({ opacity: 1 });
                    scrollBtnVisible = true;
                } else if (position > 150 && scrollBtnVisible) {
                    scrollBtn.animate({ opacity: 0 });
                    scrollBtnVisible = false;
                }
            });
        }
        
        $("a[href='#pauseVideo']").click(function(e){ e.preventDefault(); pauseCurrentVideo(); });
        toggleContentOnVideo();
        
    });
}(jQuery2));

var currentVideoPlaying;

function play_alternative_content(id) {
    $=jQuery;
    window.console && console.log(id);
    switch(id) {
        case "chicas":
            $(".slick-active .slide-content-alternative.hidden").removeClass("hidden");
            currentVideoPlaying = video = $(".slick-active .slide-content-alternative video")[0];
            if(($(video).data("initialized")!="true")) {
                window.console && console.log("initialize video");
                $(video).data("initialized","true");
                video.addEventListener('loadedmetadata', function() {
                  this.currentTime = 0.1;
                }, false);
                video.addEventListener('ended', function(e) {
                    window.console && console.log("ended");
                    video.pause();
                    hide_alternative_content();
                    toggleContentOnVideo();
                }, false);
            }
            if (video.paused) {
                video.play();
                toggleContentOnVideo();
            } else {
                video.pause(); 
                toggleContentOnVideo();
            }
        break;
        default:
            $(".slide-content-alternative.hidden").removeClass("hidden");
        break;
            
    }
    return void(false);
}


function hide_alternative_content() {
    $=jQuery;
    window.console && console.log("hide");
    $(".slide-content-alternative").addClass("hidden").each(function(i,el){
        if(jQuery(el).find("video").length>0) jQuery(el).find("video")[0].pause();
    });
    toggleContentOnVideo();
}

function toggleContentOnVideo() {
    if(currentVideoPlaying && !currentVideoPlaying.paused) {
        jQuery(".visible_on_pause").css("display","none");
        jQuery(".visible_on_play").css("display","block");
    }else{
        jQuery(".visible_on_pause").css("display","block");
        jQuery(".visible_on_play").css("display","none");
    }
}

function pauseCurrentVideo() {
    if(currentVideoPlaying) {
        currentVideoPlaying.pause();
        toggleContentOnVideo();
    }
}


