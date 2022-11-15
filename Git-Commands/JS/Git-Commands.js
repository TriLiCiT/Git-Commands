var header = document.getElementById("head-color");

document.addEventListener('scroll', function() {
   var scrollPos = window.pageYOffset;

   if( scrollPos > 100 ) {
      header.style.backgroundColor = 'white';
   } else {
      header.style.backgroundColor = 'none';
   }
});

