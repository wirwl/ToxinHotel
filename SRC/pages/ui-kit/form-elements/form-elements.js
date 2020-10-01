import '../../../components/pages/ui-kit/form-elements/form-elements';

const fonts = require.context('../../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../../components/', true, /^(?!..pages).*(scss|js)$/);
imports.keys().forEach(imports);
