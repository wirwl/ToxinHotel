import './room-details.scss';

import '../../favicons/favicons';

import '../../../node_modules/air-datepicker/dist/js/datepicker';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min';

const fonts = require.context('../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /\.(scss|js)$/);
imports.keys().forEach(imports);
