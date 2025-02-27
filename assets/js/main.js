(function ($) {
   "use strict";

   jQuery(document).ready(function ($) {
      // offcanvas menu active
      $(".menu-toggle").click(function () {
         $(".menu-toggle, .header-nav").toggleClass("show");
      });

      // header height
      function updateNavHeight() {
         let headerHeight = $("header").outerHeight();
         $("html").css("--height-nav", headerHeight + "px");
      }

      // Run initially and update on resize
      updateNavHeight();
      $(window).on("resize", updateNavHeight);

   }); //---document-ready-----
})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll(".collapse-toggle-btn").forEach(button => {
       button.addEventListener("click", function () {
           let collapseSection = this.closest(".collapse-container").querySelector(".collapse");

           // Toggle visibility
           collapseSection.classList.toggle('show');
       });
   });
});
