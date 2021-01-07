import 'px-jquery-pagination/px-pagination';
import './px-pagination.scss';

export default class PxPagination {
  constructor(htmlRootElement) {
    this.$htmlRootElement = $(htmlRootElement);
    this.$pagination = $(htmlRootElement).find('.px-pagination__plugin');
    this._initPluginPxPagination();
    this._nextPrevBtnShowUpdate(1);
  }

  _initPluginPxPagination() {
    const pagination = this;
    this.$pagination.pxpaginate({
      totalPageCount: 15,
      maxBtnCount: 3,
      align: 'center',
      firstLastBtnShow: false,
      prevPageName: 'arrow_back',
      nextPageName: 'arrow_forward',
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
