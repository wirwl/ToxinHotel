import initComponentOnPage from '../components';
import DatepickerInputRange from './datepicker-input-range';

export default function initDatepickerInputRangeOnPage(data) {
  const defaultData = {
    buttonClearText: 'Очистить', 
    buttonApplyText: 'Применить',
    datepickerData: {
      moveToOtherMonthsOnSelect: false,
      minDate: new Date(),
      range: true,
      multipleDatesSeparator: ' - ',
      prevHtml: 'arrow_back',
      nextHtml: 'arrow_forward',
      navTitles: { days: 'MM yyyy' }
    }
  }
  initComponentOnPage(DatepickerInputRange, '.js-datepicker-input-range', data || defaultData);
}