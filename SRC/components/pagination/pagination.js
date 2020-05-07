class Pagination {
  constructor(rootClassName) {
    this._init(rootClassName);
  }

  _init(rootClassName) {
    this._$paginationButtons = $(rootClassName);
    this._pages = this._$paginationButtons.data('pages');
    this._page = this._$paginationButtons.data('page');

    this._$paginationButtons.html(this.createPagination(this._pages, this._page));
    this._addEventListenerClick.bind(this)(this._$paginationButtons);
  }

  _addEventListenerClick(pagination) {
    let lis = pagination.find('a');
    lis.each((index, element) => {
      const $element = $(element);
      let datapage = $element.data("page");
      if (datapage)
        $element.on('click.pagination', () => { this.createPagination(this._pages, datapage); });
    })
  }

  createPagination(pages, page) {
    let showed = this._$paginationButtons.data('showed');
    let showedLastPage = this._$paginationButtons.data('showedlastpage');
    let total = this._$paginationButtons.data('total');
    let toCount = page * showed;
    if (page == pages)
      toCount = page * showed - showed + showedLastPage;
    $('.pagination__caption').text(((page - 1) * showed + 1) + " – " + toCount + " из " + total + "+ вариантов аренды");

    if (page < 1) page = 1; else
      if (page > pages) page = pages;
    let str = '<ul class="pagination__list">';
    let active;
    let pageCutLow = page - 1;
    let pageCutHigh = page + 1;
    if (page > 1) {
      str += '<li class="pagination__item previous pagination__item_no"><a data-page="' + (page - 1) + '"class="pagination__link material-icons">arrow_back</a></li>';
    }
    if (pages < 6) {
      for (let p = 1; p <= pages; p++) {
        active = page == p ? "pagination__item_active" : "pagination__item_no";
        str += '<li class="pagination__item ' + active + '"><a data-page="' + p + '"class="pagination__link">' + p + '</a></li>';
      }
    }
    else {
      if (page > 2) {
        str += '<li class="pagination__item_no pagination__item"><a data-page="1" class="pagination__link">1</a></li>';
        if (page > 3) {
          str += '<li class="pagination__item pagination__item"><a class="pagination__link_out-of-range">...</a></li>';
        }
      }
      if (page === 1) { pageCutHigh += 1; }
      if (page === pages) { pageCutLow -= 1; }

      for (let p = pageCutLow; p <= pageCutHigh; p++) {
        if (p === 0) {
          p += 1;
        }
        if (p > pages) {
          continue
        }
        active = page == p ? "pagination__item_active" : "pagination__item_no";
        str += '<li class="pagination__item ' + active + '"><a data-page="' + p + '"class="pagination__link">' + p + '</a></li>';
      }

      if (page < pages - 1) {
        if (page < pages - 2) {
          str += '<li class="pagination__item pagination__item"><a class="pagination__link_out-of-range">...</a></li>';
        }
        str += '<li class="pagination__item pagination__item_no"><a data-page="' + pages + '"class="pagination__link">' + pages + '</a></li>';
      }
    }

    if (page < pages) {
      str += '<li class="pagination__item next pagination__item_no"><a data-page="' + (page + 1) + '"class="pagination__link material-icons">arrow_forward</a></li>';
      $('#next').on('click.nextButton', () => { this.createPagination(pages, page + 1) })
    }
    str += '</ul>';

    this._$paginationButtons.html(str);
    this._addEventListenerClick(this._$paginationButtons);
    return str;
  }
}

new Pagination('.js-pagination__buttons');