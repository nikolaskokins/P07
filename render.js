function render() {
	var c = document.getElementById("main_container"),
	ctx=c.getContext('2d');
		if(mouse == 0){
			ctx.fillStyle="white";
		}
		else {
			ctx.fillStyle="red";
		}
		ctx.fillRect(0,0,600,1000);
		ctx.stroke();
		
		ctx.fillStyle="green";
		
		ctx.fillRect(0,0,160,180);
		ctx.stroke();
		
		ctx.moveTo(0, 200);
		ctx.lineTo(140, 320);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(260, 60, 60, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
		
		ctx.beginPath();
		ctx.ellipse(260, 260, 70, 60, 0, 0, Math.PI*2);
		ctx.stroke();
		ctx.fill();
		
		ctx.moveTo(400, 0);
		ctx.lineTo(560, 180);
		ctx.lineTo(460, 160);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(400, 200);
		ctx.lineTo(520, 220);
		ctx.lineTo(480, 390);
		ctx.lineTo(480, 300);
		ctx.lineTo(400, 200);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}