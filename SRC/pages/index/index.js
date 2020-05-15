const imports = require.context('../../components/', true, /\.(scss|js)$/);
imports.keys().forEach(imports);
