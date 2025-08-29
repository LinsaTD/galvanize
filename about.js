window.onload = function () {
  const canvas = document.getElementById("canv-about");
  const ctx = canvas.getContext("2d");

  const string ="CHANGE BEFORE,CHANGE CHANGES YOU";
  const angle = Math.PI * 0.61;
  const radius = 350;
  let alpha = 0; // Start transparent

  ctx.font = "40px sans-serif";
  ctx.textAlign = "center";

  function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(250, 798);
    ctx.rotate(-1.6 * angle / 2);
    ctx.globalAlpha = alpha;

    for (let i = 0; i < string.length; i++) {
      ctx.rotate(angle / string.length);
      ctx.save();
      ctx.translate(0, -1 * radius);
      ctx.fillStyle = "white";
      ctx.fillText(string[i], 0, 0);
      ctx.restore();
    }

    ctx.restore();

    if (alpha < 1) {
      alpha += 0.01; // Speed of fade-in
      requestAnimationFrame(drawText);
    }
  }

  drawText();
};