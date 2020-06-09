import './search-room.scss';

import '../../favicons/favicons';

const fonts = require.context('../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /\.(scss|js)$/);
imports.keys().forEach(imports);

const dp = $('.datepicker-input__input').data('datepicker');
dp.update('dateFormat', 'dd M');
dp.update('onSelect', (fd, d, picker) => {
  picker.$el.val(fd.toLowerCase());
});

// Only for pixel perfect
dp.update('minDate', null);
dp.selectDate([new Date('2019-08-19'), new Date('2019-08-23')]);
