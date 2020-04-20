import './room-details.scss'

import '../../favicons/favicons'

const fonts = require.context('../../fonts', true, /\.css$/ );
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /\.(scss|js)$/)
imports.keys().forEach(imports);