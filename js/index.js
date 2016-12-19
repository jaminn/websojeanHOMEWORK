"use strict";

var c = document.getElementById("can");
var ctx = c.getContext("2d");
[0, 1, 2, 3, 4].forEach(function (val) {
  ctx.fillStyle = "rgb(" + (255 - val * 30) + ", 0, 0)";
  ctx.fillRect(val * 120, 20, 100, 100);
});

var base = 0;
[0, 1, 2, 3, 4].forEach(function (val) {
  base = val * 120;
  ctx.beginPath();
  ctx.moveTo(base + 50, 150);
  ctx.lineTo(base + 0, 250);
  ctx.lineTo(base + 100, 250);
  ctx.closePath();
  ctx.fillStyle = "rgb(0," + (255 - val * 30) + ",0)";
  ctx.fill();
});

[0, 1, 2, 3, 4].forEach(function (val) {
  ctx.beginPath();
  ctx.arc(50 + val * 120, 320, 50, 0, Math.PI * (val + 1) * 0.3);
  ctx.lineWidth = val * 2;
  ctx.strokeStyle = "rgb(0,0," + (255 - val * 30) + ")";
  ctx.stroke();
});