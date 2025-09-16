/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello World! (from create-block-content-testimonials block)');
document.querySelectorAll('.testimonial-text').forEach(p => {
  const fullText = p.textContent.trim();

  // Only apply if over 150 characters
  if (fullText.length > 150) {
    const shortText = fullText.slice(0, 147) + '...';

    // Store both versions in data attributes
    p.setAttribute('data-full-text', fullText);
    p.setAttribute('data-short-text', shortText);
    p.setAttribute('data-expanded', 'false');

    // Set initial text with plus sign
    p.textContent = shortText + ' [+]';

    // Make it look clickable
    p.style.cursor = 'pointer';

    // Toggle on click
    p.addEventListener('click', function () {
      const isExpanded = p.getAttribute('data-expanded') === 'true';
      if (isExpanded) {
        p.textContent = p.getAttribute('data-short-text') + ' [+]';
        p.setAttribute('data-expanded', 'false');
      } else {
        p.textContent = p.getAttribute('data-full-text') + ' [−]';
        p.setAttribute('data-expanded', 'true');
      }
    });
  }
});

/* eslint-enable no-console */

// import './/owl-carousel/jquery.min.js'
// import './/owl-carousel/owl.carousel.min.js'
// import './/owl-carousel/owl-carousels.js'
/******/ })()
;
//# sourceMappingURL=view.js.map