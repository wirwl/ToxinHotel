import initComponentOnPage from '../components';
import OrderInfoForm from './order-info-form';

export default function initOrderInfoFormOnPage() {    
    initComponentOnPage(OrderInfoForm, '.js-order-info-form');    
}