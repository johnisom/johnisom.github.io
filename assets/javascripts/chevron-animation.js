const animateDown = function animateDown($chevron) {
  $chevron.animate({ bottom: '-=10px' }, {
    duration: 900,
    complete: () => animateUp($chevron),
  });
};

const animateUp = function animateUp($chevron) {
  $chevron.animate({ bottom: '+=10px' }, {
    duration: 900,
    complete: () => animateDown($chevron),
  });
};

$(() => {
  $('.chevron').each((i, elem) => {
    animateUp($(elem));
  });
});
