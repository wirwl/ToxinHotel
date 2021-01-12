import initComponentOnPage from '../components';
import RangeSlider from './range-slider';

export default function initRangeSliderOnPage() {
    initComponentOnPage(RangeSlider, '.js-range-slider');    
}