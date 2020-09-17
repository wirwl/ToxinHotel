import '../../../components/pages/ui-kit/colors-type/colors-type';

const fonts = require.context('../../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../../components/', true, /^(?!..pages).*(scss|js)$/);
imports.keys().forEach(imports);
