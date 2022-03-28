const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
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
	ctx.fillStyle = color;
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

function handleCanvasClick(e) {
	if (filling) ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function handleCM(e) {
	e.preventDefault();
}

function handleSaveClick() {
	const image = canvas.toDataURL();
	const link = document.createElement('a');
	link.href = image;
	link.download = 'PaintJS[🎨]';
	link.click();
}

Array.from(colors).forEach((color) => color.addEventListener('click', handleColorClick));

if (canvas) {
	canvas.addEventListener('mousemove', onMouseMove);
	canvas.addEventListener('mousedown', startPainting);
	canvas.addEventListener('mouseup', stopPainting);
	canvas.addEventListener('mouseleave', stopPainting);
	canvas.addEventListener('mousedown', handleCanvasClick);
	canvas.addEventListener('contextmenu', handleCM);
}

if (range) {
	range.addEventListener('input', handleRangeChange);
}

if (mode) {
	mode.addEventListener('click', handleModeClick);
}

if (saveBtn) {
	saveBtn.addEventListener('click', handleSaveClick);
}
