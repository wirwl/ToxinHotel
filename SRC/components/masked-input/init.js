import initComponentOnPage from '../components';
import MaskedInput from './masked-input';

export default function initMaskedInputOnPage() {
  initComponentOnPage(MaskedInput, '.js-masked-input', {
    showMaskOnHover: true,
    showMaskOnFocus: false,
  });
}