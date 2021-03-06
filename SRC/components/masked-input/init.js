import initComponentOnPage from '../components';
import MaskedInput from './masked-input';

export default function initMaskedInputOnPage(data) {
  const defaultData = {
    showMaskOnHover: true,
    showMaskOnFocus: false,
  };
  initComponentOnPage(MaskedInput, '.masked-input', data || defaultData);
}