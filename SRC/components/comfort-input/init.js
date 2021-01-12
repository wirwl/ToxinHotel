import initComponentOnPage from '../components';
import ComfortInput from './comfort-input';

export default function initComfortInputOnPage() {
    initComponentOnPage(ComfortInput, '.js-comfort-input', {
        placeholder: 'Выберите удобства',
        items: [
            { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
            { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
            { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] },
        ],
    });
}