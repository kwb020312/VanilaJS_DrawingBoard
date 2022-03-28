> ## VanilaJS_그림판 만들기

![to Make Screen](https://user-images.githubusercontent.com/46777310/160424889-fc890649-ebd4-4ddd-a460-c4b029f8963b.png)

기본적인 그리기 기능 및 색상 선택/저장 기능과 

> 그리기 기능

```javascript
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
```

> 색상 선택 기능

```javascript
function handleColorClick(e) {
	const color = e.target.style.backgroundColor;
	ctx.strokeStyle = color;
	ctx.fillStyle = color;
}
```

> 저장 기능

```javascript
function handleSaveClick() {
	const image = canvas.toDataURL();
	const link = document.createElement('a');
	link.href = image;
	link.download = 'PaintJS[🎨]';
	link.click();
}
```

선 굵기 및 채우기 모드 기능을 보유한 그림판을 만들었음

> 선 굵기 제어

```javascript
function handleRangeChange(e) {
	const range = e.target.value;
	ctx.lineWidth = range;
}
```

> 채우기 모드

```javascript
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
```

![도라에몽](https://user-images.githubusercontent.com/46777310/160426159-98b4265f-6a5f-48ee-beef-896c6dd654f9.png)

기능을 사용해서 도라에몽을 그려보았음 히히 