import initComponentOnPage from '../components';
import GuestsInput from './guests-input';

export default function initHeaderMenuOnPage() {
    initComponentOnPage(GuestsInput, '.js-guests-input',{
        placeholder: 'Сколько гостей',    
        guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
        babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
    });    
}

