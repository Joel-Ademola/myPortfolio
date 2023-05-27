var year;
year = new Date().getFullYear();
document.getElementById("current_year").innerHTML = year;

// var greeting;
// var time = new Date().getHours();
// if (time < 12) {
//     greeting = "Good morning 😀😇";
//   } else if (time < 20) {
//     greeting = "Good day 😎";
//   } else if (time < 24){
//     greeting = "Good evening 🥱";
//   }else{
//   	greeting = "Dont Stress me 😂🤣"
//   }
// document.getElementById("greeting").innerHTML = greeting
//var cv=document.getElementById("cv");
//var contact=document.getElementById("contact-me");
// cv.style.display="none";
function openCv() {
    document.getElementById("cv").style.display="flex";
}
function closeCv() {
    document.getElementById("cv").style.display="none";
}
//contact me
function openContact() {
    document.getElementById("contact-me").style.display="flex";
}
function closeContact() {
    document.getElementById("contact-me").style.display="none";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 