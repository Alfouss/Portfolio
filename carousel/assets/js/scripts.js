

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 80*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 30000
  })

  //////////////////////////
  var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 100,
    delay: (el, i) => 15 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 30000
  });


///////////////////////////
  const $icon = document.querySelector('.icon');
  const $arrow = document.querySelector('.arrow');

      $arrow.animate([
        {left: '0'},
        {left: '10px'},
        {left: '0'}
      ],{
        duration: 700,
        iterations: Infinity
      });