import initComponentOnPage from '../components';
import PxPagination from './px-pagination';

export default function initPxPaginationOnPage(data) {
  const defaultData = {
    totalPageCount: 15,
    maxBtnCount: 3,
    align: 'center',
    firstLastBtnShow: false,
    prevPageName: 'arrow_back',
    nextPageName: 'arrow_forward',
  };
  initComponentOnPage(PxPagination, '.js-px-pagination', data || defaultData);
}