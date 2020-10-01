import '../../components/pages/search-room/search-room';

const fonts = require.context('../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /^(?!..pages).*(scss|js)$/);
imports.keys().forEach(imports);
