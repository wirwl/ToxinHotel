export default class DonutChart {
  constructor(htmlRootElement, data) {
    this._$htmlRootElement = $(htmlRootElement);
    this._initMembers(data);
    this._drawDonutChart(data.items);
  }

  _initMembers({ width, height }) {
    this._$canvas = this._$htmlRootElement.find('.donut-chart__canvas');
    if (this._$canvas.length) {
      this._canvas = this._$canvas[0];
      if (this._canvas) {
        this._context = this._canvas.getContext('2d');
        this._canvas.width = width;
        this._canvas.height = height;
      }
    }
  }

  _drawLine(context, startX, startY, endX, endY, color) {
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.strokeStyle = color;
    context.stroke();
  }

  _drawPieSlice(context, centerX, centerY, radius, startAngle, endAngle, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, startAngle, endAngle, true);
    context.closePath();
    context.fill();
  }

  _drawPieSliceEx(canvas, startAngel, endAngel, color) {
    this._drawPieSlice(
      canvas.getContext('2d'),
      canvas.width / 2,
      canvas.height / 2,
      Math.min(canvas.width / 2, canvas.height / 2),
      startAngel * Math.PI,
      endAngel * Math.PI,
      color,
    );
  }

  _getRightWord(voices) {
    if (voices === 0 || voices > 4) return 'голосов';
    if (voices === 1) return 'голос';
    if (voices > 1 && voices < 5) return 'голоса';
    return 'голос';
  }

  _drawDonutChart(data) {
    const arcLength = [[2], [2], [1, 1], [1, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5]];
    let startAngel = 1.5;
    let total = 0;
    let noZero = 0;

    let arc100percent = 0;

    Object.keys(data).forEach((key) => {
      total += data[key].count;
      if (data[key].count > 0) noZero += 1;
      if (data[key].count > arc100percent) arc100percent = data[key].count;
    });

    if (noZero === 0) {
      this._drawPieSliceEx(this._canvas, 0, 2, '#e2e2e2');
    } else {
      let index = 0;

      Object.keys(data).forEach((key) => {
        if (data[key].count > 0) {
          this._drawPieSlice(
            this._context,
            this._canvas.width / 2,
            this._canvas.height / 2,
            Math.min(this._canvas.width / 2, this._canvas.height / 2),
            startAngel * Math.PI, (startAngel - arcLength[noZero][index]) * Math.PI,
            data[key].color,
          );
          const size = Math.min(this._canvas.width / 2, this._canvas.height / 2);
          this._drawPieSlice(
            this._context,
            this._canvas.width / 2,
            this._canvas.height / 2,
            size - 10 * 0.4,
            startAngel * Math.PI, (startAngel - arcLength[noZero][index]) * Math.PI,
            '#fff',
          );

          startAngel -= arcLength[noZero][index];
          index += 1;
        }
      });

      index = 0;
      startAngel = 1.5;

      if (noZero > 1) {
        let x; let
          y = 0;
        switch (startAngel) {
          case 1.5: x = this._canvas.width / 2; y = 0; break;
          case 1: x = 0; y = this._canvas.height / 2; break;
          case 0.5: x = this._canvas.width / 2; y = this._canvas.height; break;
          case 0: x = this._canvas.width; y = this._canvas.height / 2; break;
          default: break;
        }
        this._drawLine(this._canvas.getContext('2d'),
          this._canvas.width / 2, this._canvas.height / 2, x, y, '#fff');
      }
      startAngel -= arcLength[noZero][index];
      index += 1;
    }

    let text = total;
    this._context.font = 'bold 24px quicksand';
    if (total > 0) this._context.fillStyle = '#BC9CFF';
    else this._context.fillStyle = 'gray';
    let x = this._canvas.width / 2 - this._context.measureText(text).width / 2;
    let y = this._canvas.height / 2 - 2;
    this._context.fillText(text, x, y);
    this._context.font = 'bold 12px montserrat';
    text = this._getRightWord(total).toUpperCase();
    x = this._canvas.width / 2 - this._context.measureText(text).width / 2;
    y = this._canvas.height / 2 + 17;
    this._context.fillText(text, x, y);
  }
}
