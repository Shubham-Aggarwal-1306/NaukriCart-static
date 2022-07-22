document.getElementsByClassName("arrow-icon")[0].onclick = function(){
    let icon = document.getElementById("wrapper");
    icon.classList.toggle("fa-angle-up");
    icon.classList.toggle("fa-angle-down");
}

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        navbar_height = document.querySelector('.navbar').offsetHeight;
        if (window.scrollY >navbar_height ) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          
          document.body.style.paddingTop = navbar_height + 'px';

        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
          document.getElementById("navbar_top").style.paddingLeft = "0";
          document.getElementById("navbar_top").style.paddingRight = "0";
        } 
    });
  });
