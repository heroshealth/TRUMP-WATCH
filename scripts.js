const termStart = new Date('2025-01-20T12:00:00Z');
const termEnd = new Date('2029-01-20T12:00:00Z');

function updateClocks() {
  const now = new Date();
  const timeInOffice = now - termStart;
  const timeLeft = termEnd - now;

  document.getElementById('timeInOffice').innerText = formatDuration(timeInOffice);
  document.getElementById('timeLeft').innerText = formatDuration(timeLeft);
}

function formatDuration(ms) {
  if (ms < 0) return "0y 0d 0h 0m 0s";
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / (1000 * 60)) % 60;
  const h = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const d = Math.floor(ms / (1000 * 60 * 60 * 24)) % 365;
  const y = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  return `${y}y ${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateClocks, 1000);
