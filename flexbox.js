$(document).ready(function() {
    //flexHeight();
});

//flexbox sizing
function flexHeight() {
    var vpHeight = $(window).height();
    var heroHeight = $('.brandBar').height();
    $('.flexBoxWrap').height((vpHeight - heroHeight) - 50);
    $('.flexBox').height((vpHeight - heroHeight) - 50);
}

window.onresize = function() {
    //flexHeight();
};

window.onload = function() {
    //flexHeight();
};

//flexbox module
var flexOpen = (function() {
    var box = $('.flexBox');
    var boxLink = $('.flexBox > .flexBoxContent');
    var boxText = boxLink.find('.fbInnerTxt');
    var boxClose = $('.fbClose');
    var flexed = false;

    var flex = function() {
        var box = $(this).parent();
        if (!flexed) {
            box.addClass('fb_extended');
            boxText.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
            boxClose.addClass('show');
            boxClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
            flexed = true;
        }
    };

    var close = function() {
        if (flexed) {
            box.removeClass('fb_extended');
            boxText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
            boxClose.removeClass('show');
            boxClose.css('transition', 'all 0.2s 0 cubic-bezier(0.23, 1, 0.32, 1)');
            flexed = false;
        }
    };

    var bindActions = function() {
        boxLink.on('click', flex);
        boxClose.on('click', close);
    };

    var init = function() {
        bindActions();
    };

    return {
        init: init
    };

}());

flexOpen.init();
