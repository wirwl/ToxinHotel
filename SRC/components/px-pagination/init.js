import initComponentOnPage from '../components';
import PxPagination from './px-pagination';

export default function initPxPaginationOnPage() {
  initComponentOnPage(PxPagination, '.js-px-pagination');
}