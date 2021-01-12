import initHeaderMenuOnPage from './header-menu/init';
import initGuestsInputOnPage from './guests-input/init';
import initDatepickerInputRangeOnPage from './datepicker-input-range/init';
import initRoomReservationFormOnPage from './room-reservation-form/init';
import initFlexsliderOnPage from './flexslider/init';
import initDonutChartOnPage from './donut-chart/init';
import initOrderInfoFormOnPage from './order-info-form/init';
import initLikeButtonOnPage from './like-button/init';
import initRangeSliderOnPage from './range-slider/init';
import initComfortInputOnPage from './comfort-input/init';
import initExpandableCheckboxListOnPage from './expandable-checkbox-list/init';
import initPxPaginationOnPage from './px-pagination/init';
import initMaskedInputOnPage from './masked-input/init';
import initToxinDatepickerOnPage from './toxin-datepicker/init';
import initRateButtonOnPage from './rate-button/init';

function initComponentOnPage(componentClass, htmlRootElement, data) {
  const $htmlRootElements = $(htmlRootElement);
  $htmlRootElements.each(
    (_, htmlRootElement) => new componentClass(htmlRootElement, data)
  );
}

export default initComponentOnPage;

export {  
  initHeaderMenuOnPage,  
  initGuestsInputOnPage,
  initDatepickerInputRangeOnPage,
  initRoomReservationFormOnPage,  
  initFlexsliderOnPage,  
  initDonutChartOnPage,
  initOrderInfoFormOnPage,  
  initLikeButtonOnPage,
  initRangeSliderOnPage,
  initComfortInputOnPage,
  initExpandableCheckboxListOnPage,
  initPxPaginationOnPage,
  initMaskedInputOnPage,
  initToxinDatepickerOnPage,
  initRateButtonOnPage
};

