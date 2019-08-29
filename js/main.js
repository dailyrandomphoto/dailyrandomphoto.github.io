(function($){
    $('.card-image img:not(".not-gallery-item")').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" data-download-url="' + $(this).attr('data-download-url') + '" href="' + $(this).attr('src') + '"></a>');
            // if (this.alt) {
            //     $(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">' + this.alt + '</div>');
            // }
        }
    });
    $('.article img:not(".not-gallery-item")').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">' + this.alt + '</div>');
            }
        }
    });

    if (typeof(moment) === 'function') {
        $('.article-meta time').each(function () {
            $(this).text(moment($(this).attr('datetime')).fromNow());
        });
    }

    function adjustNavbar() {
        const navbarWidth = $('.navbar-main .navbar-start').outerWidth() + $('.navbar-main .navbar-end').outerWidth();
        if ($(document).outerWidth() < navbarWidth) {
            $('.navbar-main .navbar-menu').addClass('is-flex-start');
        } else {
            $('.navbar-main .navbar-menu').removeClass('is-flex-start');
        }
    }
    adjustNavbar();
    $(window).resize(adjustNavbar);

    var $toc = $('#toc');
    if ($toc.length > 0) {
    var $mask = $('<div>');
        $mask.attr('id', 'toc-mask');

        $('body').append($mask);

        function toggleToc() {
            $toc.toggleClass('is-active');
            $mask.toggleClass('is-active');
        }

        $toc.on('click', toggleToc);
        $mask.on('click', toggleToc);
        $('.navbar-main .catalogue').on('click', toggleToc);
    }

    $(window).on("load", function() {
    	if (disqus_shortname) {
    		if ($("#disqus_thread").length > 0) {
    			var d = document,
    				s = d.createElement('script');
    			s.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
    			s.async = true;
    			s.setAttribute('data-timestamp', +new Date());
    			(d.head || d.body).appendChild(s);
    			s.onload = function() {
    				d.querySelectorAll(".disqus_view").forEach(function(v) {
    					v.style.display = "block"
    				});
    			};
    		}

    		// <script id="dsq-count-scr" src="https://dailylist-2085301.disqus.com/count.js" async></script>
    		var d = document,
    			s = d.createElement('script');
    		s.src = 'https://' + disqus_shortname + '.disqus.com/count.js';
    		s.async = true;
    		s.setAttribute('id', "dsq-count-scr");
    		(d.head || d.body).appendChild(s);
    	}
    });
})(jQuery);
