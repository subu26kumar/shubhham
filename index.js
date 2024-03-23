//for navbar
$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

//for Typing Carousel Effect
const carouselText = [
  {text: "Software Developer", color: "#f8f8ff"},
  {text: "Computer Science Engineer", color: "#f8f8ff"},
  {text: "Freelancer", color: "#f8f8ff"},
  
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
//for mail
function sendMail() {
  if (!(document.getElementById("topic").value == "")) {
    if (!(document.getElementById("name").value == "")) {
      if (!(document.getElementById("message").value == "")) {
        if (!(document.getElementById("email").value == "")) {
          emailjs.init("sjYyJu3-8g8STyPOG");
          var mails = {
            subject: document.getElementById("topic").value,
            from_name: document.getElementById("name").value,
            message: document.getElementById("message").value,
            email_id: document.getElementById("email").value,
          };

          emailjs
            .send("service_30mvdij", "template_r2igx1k", mails)
            .then(function (re) {
              document.getElementById("alert").style.visibility = "visible";
              document.getElementById("topic").value = "";
              document.getElementById("name").value = "";
              document.getElementById("message").value = "";
              document.getElementById("email").value = "";
            });
        }
      }
    }
  }
}
//resume unavilable
function myresume() {
  document.getElementById("alert2").style.visibility = "visible";
}
