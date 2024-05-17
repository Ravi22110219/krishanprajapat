
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//whatsapp
var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?30291';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
    "backgroundColor":"#00e785",
    "ctaText":"Chat with us",
    "borderRadius":"25",
    "marginLeft": "0",
    "marginRight": "20",
    "marginBottom": "20",
    "ctaIconWATI":false,
    "position":"right"
},
"brandSetting":{
    "brandName":"Aura",
    "brandSubTitle":"undefined",
    "brandImg":"https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    "welcomeText":"Hi there!\nHow can I help you?",
    "messageText":"Hello:)%0A",
    "backgroundColor":"#00e785",
    "ctaText":"Chat with us",
    "borderRadius":"25",
    "autoShow":false,
    "phoneNumber":"919571367907"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);