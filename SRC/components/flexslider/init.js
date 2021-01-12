import initComponentOnPage from '../components';
import Flexslider from './flexslider';

export default function initFlexsliderOnPage() {
    initComponentOnPage(Flexslider, '.js-flexslider', { animation: 'fade', touch: true });
}