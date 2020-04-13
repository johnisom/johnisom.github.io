const animateDown = function animateDown($chevron) {
  $chevron.animate({ top: '+=10px' }, {
    duration: 900,
    complete: () => animateUp($chevron),
  });
};

const animateUp = function animateUp($chevron) {
  $chevron.animate({ top: '-=10px' }, {
    duration: 900,
    complete: () => animateDown($chevron),
  });
};

$(() => {
  $('.chevron').each((i, elem) => {
    animateUp($(elem));
  });
});
