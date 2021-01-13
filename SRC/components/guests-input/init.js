import initComponentOnPage from '../components';
import GuestsInput from './guests-input';

export default function initHeaderMenuOnPage(data) {
  const defaultData = {
    placeholder: 'Сколько гостей',
    guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
    babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
  };
  initComponentOnPage(GuestsInput, '.js-guests-input', data || defaultData);
}

