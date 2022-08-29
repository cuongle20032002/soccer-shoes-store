$(document).ready(function(){
    $('.trademarks .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
})
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
})
function openNav() {
    document.getElementById("mySidepanel").style.width = "375px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
 function logn(){
    document.getElementById("presently").style.visibility="visible";

 }