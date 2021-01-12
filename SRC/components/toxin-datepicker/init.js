import initComponentOnPage from '../components';
import ToxinDatepicker from './toxin-datepicker';

export default function initHeaderMenuOnPage() {
  initComponentOnPage(ToxinDatepicker, '.standalone-datepicker', { buttonClearText: 'Очистить', buttonApplyText: 'Применить' });
}