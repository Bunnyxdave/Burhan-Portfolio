const board = document.querySelector('.education.hoverboard');

board.addEventListener('mousemove', (e) => {
  const rect = board.getBoundingClientRect();
  const x = e.clientX - rect.left; // x position within section
  const y = e.clientY - rect.top;  // y position within section

  const cx = rect.width / 2;
  const cy = rect.height / 2;

  const dx = (x - cx) / cx;  // range approx -1 to +1
  const dy = (y - cy) / cy;

  const maxTilt = 10; // degrees

  const tiltX = (dy * maxTilt) * -1; // invert for correct direction
  const tiltY = (dx * maxTilt);

  board.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
});

board.addEventListener('mouseleave', () => {
  board.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
});
