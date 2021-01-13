import initComponentOnPage from '../components';
import HeaderMenu from './header-menu';

export default function initHeaderMenuOnPage() {
  initComponentOnPage(HeaderMenu, '.js-header-menu');
}