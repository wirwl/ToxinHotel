import initComponentOnPage from '../components';
import DatepickerInputRange from './datepicker-input-range';

export default function initHeaderMenuOnPage() {
  initComponentOnPage(DatepickerInputRange, '.js-datepicker-input-range');
}