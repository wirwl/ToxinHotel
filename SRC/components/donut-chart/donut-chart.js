class DonutChart {
  constructor(data) {
    this._init(data);
  }

  _init({ id, items }) {
    this._canvas = document.getElementById(id);
    if (this._canvas) {
      this._context = this._canvas.getContext("2d");
      this._canvas.width = 120;
      this._canvas.height = 120;
      this._drawDonutChart(items);
    }
  }

  _drawLine(ctx, startX, startY, endX, endY, color) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  _drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, true);
    ctx.closePath();
    ctx.fill();
  }

  _drawPieSliceEx(canvas, start_angel, end_angel, color) {
    this._drawPieSlice(
      canvas.getContext("2d"),
      canvas.width / 2,
      canvas.height / 2,
      Math.min(canvas.width / 2, canvas.height / 2),
      start_angel * Math.PI,
      end_angel * Math.PI,
      color
    );
  }

  _getRightWord(voices) {
    if (voices == 0 || voices > 4) return "голосов";
    if (voices == 1) return "голос";
    if (voices > 1 && voices < 5) return "голоса";
  }

  _drawDonutChart(data) {
    let arc_length = [[2], [2], [1, 1], [1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5]];
    let arc_thickness = [58 / 260, 58 / 260, 144 / 260, 0];
    let start_angel = 1.5;
    let total = 0;
    let no_zero = 0;

    let arc_100percent = 0;
    for (let i in data) {
      total += data[i].count;
      if (data[i].count > 0) no_zero += 1;
      if (data[i].count > arc_100percent) arc_100percent = data[i].count;
    }
    if (no_zero == 0) {
      this._drawPieSliceEx(this._canvas, 0, 2, "#e2e2e2");
    } else {
      let index = 0;
      for (let i in data) {
        if (data[i].count > 0) {
          this._drawPieSlice(
            this._canvas.getContext("2d"),
            this._canvas.width / 2,
            this._canvas.height / 2,
            Math.min(this._canvas.width / 2, this._canvas.height / 2),
            start_angel * Math.PI, (start_angel - arc_length[no_zero][index]) * Math.PI,
            data[i].color
          );
          this._drawPieSlice(
            this._canvas.getContext("2d"),
            this._canvas.width / 2,
            this._canvas.height / 2,
            Math.min(this._canvas.width / 2, this._canvas.height / 2) - 10 * (data[i].count / arc_100percent),
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
            case 1.5: x = this._canvas.width / 2; y = 0; break;
            case 1: x = 0; y = this._canvas.height / 2; break;
            case 0.5: x = this._canvas.width / 2; y = this._canvas.height; break;
            case 0: x = this._canvas.width; y = this._canvas.height / 2; break;
          }
          this._drawLine(this._canvas.getContext("2d"),
            this._canvas.width / 2, this._canvas.height / 2, x, y, "#fff");
        }
        start_angel = start_angel - arc_length[no_zero][index]
        index++;
      }
    }

    let text = total;
    this._context.font = 'bold 24px quicksand';
    if (total > 0) this._context.fillStyle = "#BC9CFF"; else this._context.fillStyle = "gray";
    this._context.fillText(text, this._canvas.width / 2 - this._context.measureText(text).width / 2, this._canvas.height / 2 - 2);
    this._context.font = 'bold 12px montserrat';
    text = this._getRightWord(total).toUpperCase();
    this._context.fillText(text, this._canvas.width / 2 - this._context.measureText(text).width / 2, this._canvas.height / 2 + 17);
  }
}

new DonutChart({
  id: 'donut-chart', items: [{ text: "Великолепно", count: 58, color: "#FFE39C" },
  { text: "Хорошо", count: 58, color: "#6FCF97" },
  { text: "Удовлетворительно", count: 144, color: "#BC9CFF" },
  { text: "Разочарован", count: 0, color: "#919191" },
  ]
});