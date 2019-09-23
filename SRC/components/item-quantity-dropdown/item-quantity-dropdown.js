(function ($) {
  const defaults = {

    maxItems: Infinity,
    minItems: 0,
    controls: {
      displayCls: 'iqdropdown__content',
      controlsCls: 'iqdropdown__item-controls',
      counterCls: 'iqdropdown__counter',
    },
    items: {},
    onChange: () => { },
    beforeDecrement: () => true,
    beforeIncrement: () => true,
  };

  $.fn.iqDropdown = function (options) {
    this.each(function () {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown__selection').last();
      const $menu = $this.find('div.iqdropdown__menu');
      const $items = $menu.find('div.iqdropdown__menu-option');
      const $clear = $this.find('.iqdropdown__clear');
      const settings = $.extend(true, {}, defaults, options);
      const itemCount = {};
      let totalItems = 0;

      function getRightCaseForTotal(count) {
        for (let c in entities.total.cases) {
          if (count >= entities.total.cases[entities.total.cases.length - 1 - c].n)
            return entities.total.cases[entities.total.cases.length - 1 - c].text;
        }
        return 'items';
      }
      function getRightCaseForField(id, count) {
        for (let i in entities.fields) {
          if (entities.fields[i].id == id) {
            for (let c in entities.fields[i].cases) {
              if (count >= entities.fields[i].cases[entities.fields[i].cases.length - 1 - c].n)
                return entities.fields[i].cases[entities.fields[i].cases.length - 1 - c].text;
            }
          }
        }
        return id;
      }

      function getFieldById(id) {
        entities = settings.entities;
        for (let i in entities.fields) {
          if (entities.fields[i].id == id)
            return entities.fields[i].isNotInTotal;
        }
        return false;
      }

      function updateDisplay() {
        entities = settings.entities;
        let text = '';
        if (entities.total.isShow && totalItems > 0)
          text = totalItems + ' ' + getRightCaseForTotal(totalItems) + ', ';
        let sumCount = 0;
        $items.each(function (index) {
          let itemCount2 = $(this).find('.iqdropdown__counter').text();
          sumCount += itemCount2;
          let id = $(this).data('id');
          if (itemCount2 > 0 && entities.fields[index].isShow)
            text += (itemCount2 + ' ' + getRightCaseForField(id, itemCount2) + ', ');
        })           
        if ($clear.length > 0) {
          if (sumCount > 0) $clear.removeClass('iqdropdown__clear_hide')
          else $clear.addClass('iqdropdown__clear_hide');
        }

        if (sumCount == 0) $selection.text(entities.placeholder);
        else $selection.text(text.slice(0, text.lastIndexOf(', ')));
        $selection.attr('title', $selection.text());
      }

      function setItemSettings(id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }

      function addControls(id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="iqdropdown__button-decrement">
            <i class="iqdropdown__icon-decrement"></i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="iqdropdown__button-increment">
            <i class="iqdropdown__icon-decrement iqdropdown__icon-increment"></i>
          </button>
        `);
        const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);
        $item.append($controls);

        $clear.click((event) => {
          $items.find('.iqdropdown__counter').html('0');
          for (let i in itemCount) itemCount[i] = 0;
          totalItems = 0;
          $selection.text(entities.placeholder);
          $clear.addClass('iqdropdown__clear_hide');
        })

        $decrementButton.click((event) => {
          const { items, minItems, beforeDecrement, onChange } = settings;
          const allowClick = beforeDecrement(id, itemCount);
          
          if (allowClick && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;            
            if (!getFieldById(id))
              totalItems -= 1;
            $counter.html(itemCount[id]);
            updateDisplay(id);
            onChange($this, id, itemCount[id], totalItems);
          }

          if (itemCount[id] == items[id].minCount)
            $item.find('.iqdropdown__button-decrement').addClass('iqdropdown__button-decrement_disable');
          $item.find('.iqdropdown__button-increment').removeClass('iqdropdown__button-increment_disable');

          event.preventDefault();
        });

        $incrementButton.click((event) => {
          const { items, maxItems, beforeIncrement, onChange } = settings;
          const allowClick = beforeIncrement(id, itemCount);

          if (allowClick && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            if (!getFieldById(id))
              totalItems += 1;
            $counter.html(itemCount[id]);
            updateDisplay(id);
            onChange($this, id, itemCount[id], totalItems);
          }

          if (itemCount[id] == items[id].maxCount)
            $item.find('.iqdropdown__button-increment').addClass('iqdropdown__button-increment_disable');
          $item.find('.iqdropdown__button-decrement').removeClass('iqdropdown__button-decrement_disable');

          event.preventDefault();

        });

        $item.click(event => event.stopPropagation());

        return $item;
      }

      $this.click((event) => {
        if (!$(event.target).hasClass('iqdropdown__clear'))
          $this.toggleClass('iqdropdown_show');
      });

      $items.each(function () {
        const $item = $(this);
        const id = $item.data('id');
        let defaultCount = Number($item.data('defaultcount') || '0');
        const minCount = Number($item.data('mincount') || '0');
        const maxCount = Number($item.data('maxcount') || Infinity);

        if (defaultCount < minCount) defaultCount = minCount;
        if (defaultCount > maxCount) defaultCount = maxCount;

        itemCount[id] = defaultCount;

        if ($clear.length > 0) {
          if (defaultCount > 0) $clear.removeClass('iqdropdown__clear_hide');
        }

        if (!getFieldById(id))
          totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);

        if (defaultCount == minCount)
          $item.find('.iqdropdown__button-decrement').addClass('iqdropdown__button-decrement_disable');
        if (defaultCount == maxCount)
          $item.find('.iqdropdown__button-increment').addClass('iqdropdown__button-increment_disable');
      });
      updateDisplay();
    });
    return this;
  };
}(jQuery));