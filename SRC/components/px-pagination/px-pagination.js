import 'px-jquery-pagination/px-pagination';
import './px-pagination.scss';

export default class PxPagination {
  constructor(htmlRootElement, data) {
    this.$htmlRootElement = $(htmlRootElement);
    this.$pagination = $(htmlRootElement).find('.px-pagination__plugin');
    this._initPluginPxPagination(data);
    this._nextPrevBtnShowUpdate(1);
  }

  _initPluginPxPagination(data) {
    const pagination = this;
    this.$pagination.pxpaginate({
      ...data,
      callback(pagenumber) {
        pagination._nextPrevBtnShowUpdate(pagenumber);
      },
    });
  }

  _nextPrevBtnShowUpdate(pagenumber) {
    const rootContainer = this.$htmlRootElement.find('.px-paginate-container');
    const totalPageCount = parseInt(rootContainer.data('total'), 10);
    const pageNumber = parseInt(pagenumber, 10);
    const btnPrev = rootContainer.find('.px-btn-prev');
    const btnNext = rootContainer.find('.px-btn-next');

    if (pageNumber < 2) {
      btnPrev.addClass('d-none');
    } else btnPrev.removeClass('d-none');

    if (pageNumber === totalPageCount) btnNext.addClass('d-none');
    else btnNext.removeClass('d-none');
  }
}
