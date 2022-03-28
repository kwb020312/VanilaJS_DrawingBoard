const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

let filling = false;

function stopPainting() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if (painting) {
		ctx.lineTo(x, y);
		ctx.stroke();
	} else {
		ctx.beginPath();
		ctx.moveTo(x, y);
	}
}

function onMouseDown(event) {
	painting = true;
}

function handleColorClick(e) {
	const color = e.target.style.backgroundColor;
	ctx.strokeStyle = color;
}

function handleRangeChange(e) {
	const range = e.target.value;
	ctx.lineWidth = range;
}

function handleModeClick(e) {
	if (filling) {
		filling = false;
		mode.innerText = 'FILL';
	} else {
		filling = true;
		mode.innerText = 'PAINT';
	}
}

Array.from(colors).forEach((color) => color.addEventListener('click', handleColorClick));

if (canvas) {
	canvas.addEventListener('mousemove', onMouseMove);
	canvas.addEventListener('mousedown', startPainting);
	canvas.addEventListener('mouseup', stopPainting);
	canvas.addEventListener('mouseleave', stopPainting);
}

if (range) {
	range.addEventListener('input', handleRangeChange);
}

if (mode) {
	mode.addEventListener('click', handleModeClick);
}
