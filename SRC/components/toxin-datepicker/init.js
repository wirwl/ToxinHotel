import initComponentOnPage from '../components';
import ToxinDatepicker from './toxin-datepicker';

export default function initHeaderMenuOnPage() {
  const defaultData = { buttonClearText: 'Очистить', buttonApplyText: 'Применить' };
  initComponentOnPage(ToxinDatepicker, '.standalone-datepicker', data || defaultData);
}