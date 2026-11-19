(() => {
  const video = document.getElementById('drone-flight-video');
  if (!video) return;

  const holdMs = 4500;
  let replayTimer = null;

  video.addEventListener('ended', () => {
    replayTimer = window.setTimeout(() => {
      replayTimer = null;
      video.currentTime = 0;
      video.play().catch(() => {});
    }, holdMs);
  });

  video.addEventListener('play', () => {
    if (replayTimer !== null) {
      window.clearTimeout(replayTimer);
      replayTimer = null;
    }
  });
})();
