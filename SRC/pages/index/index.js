import '../../components/pages/index/index';

import '../../favicons/favicons';

const images = require.context('../../components', true, /\.(png|jpe?g|gif|svg)$/);
images.keys().forEach(images);

const fonts = require.context('../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /^(?!..pages).*(scss|js)$/);
imports.keys().forEach(imports);
