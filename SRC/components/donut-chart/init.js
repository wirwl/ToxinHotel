import initComponentOnPage from '../components';
import DonutChart from './donut-chart';

export default function initDonutChartOnPage() {
  initComponentOnPage(DonutChart, '.js-donut-chart', {
    width: 120,
    height: 120,
    items: [
      { text: 'Великолепно', count: 58, color: '#FFE39C' },
      { text: 'Хорошо', count: 58, color: '#6FCF97' },
      { text: 'Удовлетворительно', count: 144, color: '#BC9CFF' },
      { text: 'Разочарован', count: 0, color: '#919191' },
    ],
  });
}