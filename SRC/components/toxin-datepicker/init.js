import initComponentOnPage from '../components';
import ToxinDatepicker from './toxin-datepicker';

export default function initToxinDatepickerOnPage(data) {
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
  };
  initComponentOnPage(ToxinDatepicker, '.standalone-datepicker', data || defaultData);
}