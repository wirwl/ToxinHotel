class Pagination {
  constructor(rootClassName) {
    this._$paginationButtons = $(rootClassName);
    if (this._$paginationButtons) this._init(rootClassName);
  }

  _getDataAttributesValue() {
    this._pages = this._$paginationButtons.data('pages');
    this._page = this._$paginationButtons.data('page');
  }

  _createPagination(pages, page) {
    const showed = this._$paginationButtons.data('showed');
    const showedLastPage = this._$paginationButtons.data('showedlastpage');
    const total = this._$paginationButtons.data('total');
    let toCount = page * showed;
    if (page === pages) {
      toCount = page * showed - showed + showedLastPage;
    }
    $('.pagination__caption').text(`${(page - 1) * showed + 1} – ${toCount} из ${total}+ вариантов аренды`);

    let str = '<ul class="pagination__list">';
    let active;
    let pageCutLow = page - 1;
    let pageCutHigh = page + 1;
    const maxPagesCountWithoutDots = 5;
    const maxCurrentPageeWithRightDots = 3;
    const minCurrentPageWithLeftDots = 4;

    if (page > 1) {
      str += `<li class="pagination__item previous pagination__item_no"><a data-page="${page - 1}"class="pagination__link material-icons">arrow_back</a></li>`;
    }
    if (pages <= maxPagesCountWithoutDots) {
      for (let p = 1; p <= pages; p += 1) {
        active = page === p ? 'pagination__item_active' : 'pagination__item_no';
        str += `<li class="pagination__item ${active}"><a data-page="${p}"class="pagination__link">${p}</a></li>`;
      }
    } else {
      if (page >= maxCurrentPageeWithRightDots) {
        str += '<li class="pagination__item_no pagination__item"><a data-page="1" class="pagination__link">1</a></li>';
        if (page >= minCurrentPageWithLeftDots) {
          str += '<li class="pagination__item pagination__item"><a class="pagination__link_out-of-range">...</a></li>';
        }
      }
      if (page === 1) { pageCutHigh += 1; }
      if (page === pages) { pageCutLow -= 1; }

      for (let p = pageCutLow; p <= pageCutHigh; p += 1) {
        if (p === 0) {
          p += 1;
        }
        if (p > pages) {
          // eslint-disable-next-line no-continue
          continue;
        }
        active = page === p ? 'pagination__item_active' : 'pagination__item_no';
        str += `<li class="pagination__item ${active}"><a data-page="${p}"class="pagination__link">${p}</a></li>`;
      }

      if (page < pages - 1) {
        if (page < pages - 2) {
          str += '<li class="pagination__item pagination__item"><a class="pagination__link_out-of-range">...</a></li>';
        }
        str += `<li class="pagination__item pagination__item_no"><a data-page="${pages}"class="pagination__link">${pages}</a></li>`;
      }
    }

    if (page < pages) {
      str += `<li class="pagination__item next pagination__item_no"><a data-page="${page + 1}"class="pagination__link material-icons">arrow_forward</a></li>`;
    }
    str += '</ul>';

    this._$paginationButtons.html(str);
    this._addEventListenerClickForButtons();
    return str;
  }

  _addEventListenerClickForButtons() {
    const lis = this._$paginationButtons.find('a');
    lis.each((_, element) => {
      const $element = $(element);
      const datapage = $element.data('page');
      if (datapage) {
        $element.on('click.pagination', this._createPagination.bind(this, this._pages, datapage));
      }
    });
  }

  _firstDrawPagination() {
    this._$paginationButtons.html(this._createPagination(this._pages, this._page));
    this._addEventListenerClickForButtons();
  }

  _init() {
    this._getDataAttributesValue();
    this._firstDrawPagination();
  }
}

new Pagination('.js-pagination__buttons');
