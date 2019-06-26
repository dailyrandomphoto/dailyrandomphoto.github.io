document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item', googlePlus: false });
        $('.card-image').lightGallery({ selector: '.gallery-item', getCaptionFromTitleOrAlt: false, googlePlus: false });
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        $('.justified-gallery').justifiedGallery();
    }
});
