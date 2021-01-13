import initComponentOnPage from '../components';
import ComfortInput from './comfort-input';

export default function initComfortInputOnPage(data) {
  const defaultData = {
    placeholder: 'Выберите удобства',
    items: [
      { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
      { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
      { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] },
    ],
  };
  initComponentOnPage(ComfortInput, '.js-comfort-input', data || defaultData);
}