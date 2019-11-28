var myCanvas = document.getElementById("donut-chart");
let context = myCanvas.getContext("2d");
myCanvas.width = 120;
myCanvas.height = 120;


function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle, true);
  ctx.closePath();
  ctx.fill();
}

function drawPieSliceEx(canvas, start_angel, end_angel, color) {
  drawPieSlice(
    canvas.getContext("2d"),
    canvas.width / 2,
    canvas.height / 2,
    Math.min(canvas.width / 2, canvas.height / 2),
    start_angel * Math.PI,
    end_angel * Math.PI,
    color
  );
}

function getRightWord(voices) {
  if (voices == 0 || voices > 4) return "голосов";
  if (voices == 1) return "голос";
  if (voices > 1 && voices < 5) return "голоса";
}

export function DrawDonutChart(data) {
  let arc_length = [[2], [2], [1, 1], [1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5]];
  //let arc_thickness = [4, 4, 10, 0];
  let arc_thickness = [58 / 260, 58 / 260, 144 / 260, 0];
  let start_angel = 1.5;
  let total = 0;
  let no_zero = 0;

  let arc_100percent = 0;
  for (let i in data) {
    //if (i>3) break;
    total += data[i].count;
    if (data[i].count > 0) no_zero += 1;
    if (data[i].count > arc_100percent) arc_100percent = data[i].count;
  }
  if (no_zero == 0) {
    drawPieSliceEx(myCanvas, 0, 2, "#e2e2e2");
  } else {
    let index = 0;
    for (let i in data) {
      //if (i>3) break;
      if (data[i].count > 0) {
        drawPieSlice(
          myCanvas.getContext("2d"),
          myCanvas.width / 2,
          myCanvas.height / 2,
          Math.min(myCanvas.width / 2, myCanvas.height / 2),
          start_angel * Math.PI, (start_angel - arc_length[no_zero][index]) * Math.PI,
          data[i].color
        );
        drawPieSlice(
          myCanvas.getContext("2d"),
          myCanvas.width / 2,
          myCanvas.height / 2,
          Math.min(myCanvas.width / 2, myCanvas.height / 2) - 10 * (data[i].count / arc_100percent),
          start_angel * Math.PI, (start_angel - arc_length[no_zero][index]) * Math.PI,
          "#fff"
        );


        start_angel = start_angel - arc_length[no_zero][index]
        index++;
      }
    }

    index = 0;
    start_angel = 1.5;
    for (let i in data) {
      if (no_zero > 1) {
        let x, y = 0;
        switch (start_angel) {
          case 1.5: x = myCanvas.width / 2; y = 0; break;
          case 1: x = 0; y = myCanvas.height / 2; break;
          case 0.5: x = myCanvas.width / 2; y = myCanvas.height; break;
          case 0: x = myCanvas.width; y = myCanvas.height / 2; break;
        }
        drawLine(myCanvas.getContext("2d"),
          myCanvas.width / 2, myCanvas.height / 2, x, y, "#fff");
      }
      start_angel = start_angel - arc_length[no_zero][index]
      index++;
    }
  }

  let text = total;
  context.font = 'bold 24px Quicksand';
  if (total > 0) context.fillStyle = "#BC9CFF"; else context.fillStyle = "gray";
  context.fillText(text, myCanvas.width / 2 - context.measureText(text).width / 2, myCanvas.height / 2 - 2);
  context.font = 'bold 12px Montserrat';
  text = getRightWord(total).toUpperCase();
  context.fillText(text, myCanvas.width / 2 - context.measureText(text).width / 2, myCanvas.height / 2 + 17);
}


