$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#FFFFFF', '#90CAF9', '#FFFFFF', '#0277BD'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    //paddingTop: '50px',
    // scrollingSpeed: 1000
    autoScrolling: false,
    fitToSection: false,
    paddingTop: $("nav").height()
  });
});