(() => {
  const video = document.getElementById('drone-flight-video');
  if (!video) return;

  const holdMs = 6000;
  const holdTime = 0.7;
  let completedPlays = 0;
  let holdTimer = null;
  let holding = false;

  const playFromStart = () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  video.addEventListener('ended', () => {
    completedPlays += 1;
    if (completedPlays < 2) {
      playFromStart();
      return;
    }

    completedPlays = 0;
    holding = true;
    video.currentTime = holdTime;
  });

  video.addEventListener('seeked', () => {
    if (!holding) return;

    holdTimer = window.setTimeout(() => {
      holdTimer = null;
      holding = false;
      playFromStart();
    }, holdMs);
  });

  video.addEventListener('play', () => {
    if (!holding) return;

    holding = false;
    completedPlays = 0;
    if (holdTimer === null) return;
    window.clearTimeout(holdTimer);
    holdTimer = null;
  });
})();
