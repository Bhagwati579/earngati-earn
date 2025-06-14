
const canvas = document.getElementById('earningChart');
const ctx = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 100;

ctx.fillStyle = "#d60000";
ctx.fillRect(0, 70, 50, 30); // Monday ₹2000
ctx.fillRect(60, 40, 50, 60); // Tuesday ₹4000
ctx.fillRect(120, 60, 50, 40); // Wednesday ₹3000
ctx.fillRect(180, 30, 50, 70); // Thursday ₹5000
ctx.fillRect(240, 50, 50, 50); // Friday ₹3500
