import initComponentOnPage from '../components';
import Flexslider from './flexslider';

export default function initFlexsliderOnPage(data) {
  const defaultData = { animation: 'fade', touch: true };
  initComponentOnPage(Flexslider, '.js-flexslider', data || defaultData);
}