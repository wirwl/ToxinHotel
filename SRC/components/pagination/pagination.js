$(document).ready(function () {
  let $paginationButtons=$('.js-pagination__buttons');
  let pages = $paginationButtons.data('pages');
  let page = $paginationButtons.data('page');  
  $paginationButtons.html(createPagination(pages, page));

  function AddEventListenerClick(pagination) {
    let lis = pagination.find('a');
    lis.each(function () {
      var datapage = $(this).data("page");
      if (datapage)
        $(this).click(function (event) { createPagination(pages, datapage); });
    })
  }

  AddEventListenerClick($paginationButtons);

  function createPagination(pages, page) {
    let showed = $paginationButtons.data('showed');
    let showedLastPage = $paginationButtons.data('showedlastpage');
    let total = $paginationButtons.data('total');    
    let toCount=page*showed;
    if (page==pages) 
    toCount=page*showed-showed+showedLastPage;
    $('.pagination__caption').text(((page-1)*showed+1)+" – "+toCount+" из " + total + "+ вариантов аренды");

    if (page < 1) page = 1; else
      if (page > pages) page = pages;
    let str = '<ul class="pagination__list">';
    let active;
    let pageCutLow = page - 1;
    let pageCutHigh = page + 1;
    // Show the Previous button only if you are on a page other than the first
    if (page > 1) {
      str += '<li class="pagination__item previous pagination__item_no"><a data-page="' + (page - 1) + '"class="pagination__link material-icons">arrow_back</a></li>';
    }
    // Show all the pagination elements if there are less than 6 pages total
    if (pages < 6) {
      for (let p = 1; p <= pages; p++) {
        active = page == p ? "pagination__item_active" : "pagination__item_no";
        str += '<li class="pagination__item ' + active + '"><a data-page="' + p + '"class="pagination__link">' + p + '</a></li>';
      }
    }
    // Use "..." to collapse pages outside of a certain range
    else {
      // Show the very first page followed by a "..." at the beginning of the
      // pagination section (after the Previous button)
      if (page > 2) {
        str += '<li class="pagination__item_no pagination__item"><a data-page="1" class="pagination__link">1</a></li>';
        if (page > 3) {
          str += '<li class="pagination__item pagination__item_out-of-range"><a class="pagination__link">...</a></li>';
        }
      }
      // Determine how many pages to show after the current page index
      if (page === 1) { pageCutHigh += 1; }
      //else if (page === 2) { pageCutHigh += 1; }
      // Determine how many pages to show before the current page index
      if (page === pages) { pageCutLow -= 1; }
      //else if (page === pages-1) { pageCutLow -= 1; }
      // Output the indexes for pages that fall inside the range of pageCutLow
      // and pageCutHigh
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
      // Show the very last page preceded by a "..." at the end of the pagination
      // section (before the Next button)
      if (page < pages - 1) {
        if (page < pages - 2) {
          str += '<li class="pagination__item pagination__item_out-of-range"><a class="pagination__link">...</a></li>';
        }
        str += '<li class="pagination__item pagination__item_no"><a data-page="' + pages + '"class="pagination__link">' + pages + '</a></li>';
      }
    }
    // Show the Next button only if you are on a page other than the last
    if (page < pages) {
      str += '<li class="pagination__item next pagination__item_no"><a data-page="' + (page + 1) + '"class="pagination__link material-icons">arrow_forward</a></li>';
      $('#next').click(function () { createPagination(pages, page + 1) })
    }
    str += '</ul>';
    // Return the pagination string to be outputted in the pug templates
    //document.getElementById('pagination').innerHTML = str;
    $paginationButtons.html(str);
    AddEventListenerClick($paginationButtons);
    return str;
  }//function createPagination(pages, page) 


})//$(document).ready(function()