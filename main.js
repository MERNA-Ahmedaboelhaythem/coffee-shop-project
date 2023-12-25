function myFunction() {
    alert("your FAV table is Booked");
  }
  function message(){
   
    swal({
      title: "Good job!",
      text: "welcom in our community",
      icon: "success",
    });
  }
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;}