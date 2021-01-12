import initComponentOnPage from '../components';
import RateButton from './rate-button';

export default function initRateButtonOnPage() {
  initComponentOnPage(RateButton, '.js-rate-button');
}