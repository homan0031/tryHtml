$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#FFFFFF', '#29B6F6', '#039BE5', '#0277BD'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    //paddingTop: '50px',
    // scrollingSpeed: 1000
    autoScrolling: false,
    fitToSection: false,
    paddingTop: $("nav").height()
  });
});