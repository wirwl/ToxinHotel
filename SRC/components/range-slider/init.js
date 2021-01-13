import initComponentOnPage from '../components';
import RangeSlider from './range-slider';

export default function initRangeSliderOnPage(data) {
  const defaultData = {
    skin: 'round',
    type: 'double',
    hide_min_max: true,
    hide_from_to: true,
    prettify_enabled: true,
    prettify_separator: ' ',
  };
  initComponentOnPage(RangeSlider, '.js-range-slider', data || defaultData);
}