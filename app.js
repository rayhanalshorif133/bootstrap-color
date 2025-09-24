// app.js

// Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const size = parseInt(urlParams.get('size')) || 50;
const color = urlParams.get('color') || 'FF0000';

// Create canvas
const canvas = document.createElement('canvas');
canvas.width = size;
canvas.height = size;

const ctx = canvas.getContext('2d');
ctx.fillStyle = `#${color}`;
ctx.fillRect(0, 0, size, size);

// Add to body
document.body.appendChild(canvas);
