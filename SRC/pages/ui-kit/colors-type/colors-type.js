import './colors-type.scss';

import '../../../favicons/favicons'

const fonts = require.context('../../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../../components/', true, /\.scss$/)
imports.keys().forEach(imports);